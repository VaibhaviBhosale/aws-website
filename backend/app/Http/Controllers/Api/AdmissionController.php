<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enquiry;
use App\Models\AdmissionRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use App\Models\AdmissionApplication;
use Illuminate\Support\Str;

class AdmissionController extends Controller
{
    /**
     * Verify student details against an existing enquiry.
     */
    public function verifyEnquiry(Request $request)
    {
        $validated = $request->validate([
            'student_name' => 'required|string|max:255',
            'mobile' => 'required|string|regex:/^[0-9]{10,15}$/',
        ]);

        $studentName = trim($validated['student_name']);
        $mobile = trim($validated['mobile']);

        // Match the student name exactly.
        $enquiry = Enquiry::whereRaw(
            'BINARY student_name = ?',
            [$studentName]
        )
        // Primary check: Father's mobile.
        ->where('father_mobile', $mobile)
        ->first();

        $matchedContact = 'father';

        // Alternative check: Mother's mobile.
        if (!$enquiry) {
            $enquiry = Enquiry::whereRaw(
                'BINARY student_name = ?',
                [$studentName]
            )
            ->where('mother_mobile', $mobile)
            ->first();

            $matchedContact = 'mother';
        }

        if (!$enquiry) {
            return response()->json([
                'success' => false,
                'enquiry_found' => false,
                'message' => 'Please fill out the enquiry form first to proceed with admission.',
            ], 404);
        }

        // Prevent creating multiple pending registrations
        // for the same enquiry and mobile number.
        $registration = DB::transaction(function () use ($enquiry, $mobile) {

        $registration = AdmissionRegistration::where('enquiry_id', $enquiry->id)
            ->where('mobile', $mobile)
            ->latest('id')
            ->first();

            if (!$registration) {
                $registration = AdmissionRegistration::create([
                    'enquiry_id' => $enquiry->id,
                    'student_name' => $enquiry->student_name,
                    'mobile' => $mobile,
                    'amount' => 1000.00,
                    'payment_status' => 'pending',
                    'status' => 'pending',
                ]);
            } else {
                // Require fresh OTP verification for every new attempt.
                $registration->update([
                    'otp_verified_at' => null,
                    'otp_hash' => null,
                    'otp_expires_at' => null,
                    'otp_attempts' => 0,
                ]);
            }

            return $registration;
        });

        return response()->json([
            'success' => true,
            'enquiry_found' => true,
            'message' => 'Enquiry verified successfully.',
            'data' => [
                'registration_id' => $registration->id,
                'student_name' => $registration->student_name,
                'mobile' => $registration->mobile,
                'matched_contact' => $matchedContact,
                'otp_required' => true,
                'payment_status' => $registration->payment_status,
            ],
        ], 200);
    }

    public function sendOtp(Request $request)
    {
        $validated = $request->validate([
            'registration_id' => 'required|integer|exists:admission_registrations,id',
        ]);

        // Temporary OTP logging is permitted only locally.
        if (!app()->environment('local')) {
            return response()->json([
                'success' => false,
                'message' => 'Temporary OTP delivery is available only in local development.',
            ], 503);
        }

        $registration = AdmissionRegistration::findOrFail(
            $validated['registration_id']
        );

        

        if ($registration->status !== 'pending') {
            return response()->json([
                'success' => false,
                'message' => 'This admission registration is not pending.',
            ], 422);
        }

        // Allow only one OTP request every 60 seconds.
        $cooldownKey = 'admission_otp_cooldown_' . $registration->id;

        if (!Cache::add($cooldownKey, true, now()->addSeconds(60))) {
            return response()->json([
                'success' => false,
                'message' => 'Please wait 60 seconds before requesting another OTP.',
            ], 429);
        }

        $otp = (string) random_int(100000, 999999);

        $registration->update([
            'otp_hash' => Hash::make($otp),
            'otp_expires_at' => now()->addMinutes(5),
            'otp_attempts' => 0,
            'otp_verified_at' => null,
        ]);

        // Never return OTP in the API response.
        Log::info('Temporary admission OTP generated', [
            'registration_id' => $registration->id,
            'otp' => $otp,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'OTP generated successfully. Check your local Laravel log.',
            'expires_in' => 300,
        ]);
    }


    public function verifyOtp(Request $request)
    {
        $validated = $request->validate([
            'registration_id' => 'required|integer|exists:admission_registrations,id',
            'otp' => 'required|digits:6',
        ]);

        if (!app()->environment('local')) {
            return response()->json([
                'success' => false,
                'message' => 'Temporary OTP verification is available only in local development.',
            ], 503);
        }

        return DB::transaction(function () use ($validated) {

            $registration = AdmissionRegistration::where(
                'id',
                $validated['registration_id']
            )->lockForUpdate()->firstOrFail();

            if ($registration->otp_verified_at) {
                return response()->json([
                    'success' => false,
                    'message' => 'Mobile number is already verified.',
                ], 422);
            }

            if (!$registration->otp_hash || !$registration->otp_expires_at) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please request a new OTP.',
                ], 422);
            }

            if ($registration->otp_expires_at->isPast()) {

                $registration->update([
                    'otp_hash' => null,
                    'otp_expires_at' => null,
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'OTP expired. Please request a new OTP.',
                ], 422);
            }

            if ($registration->otp_attempts >= 5) {
                return response()->json([
                    'success' => false,
                    'message' => 'Maximum OTP attempts exceeded. Please request a new OTP.',
                ], 429);
            }

            if (!Hash::check($validated['otp'], $registration->otp_hash)) {

                $attempts = $registration->otp_attempts + 1;

                $registration->update([
                    'otp_attempts' => $attempts,
                ]);

                if ($attempts >= 5) {
                    $registration->update([
                        'otp_hash' => null,
                        'otp_expires_at' => null,
                    ]);
                }

                return response()->json([
                    'success' => false,
                    'message' => $attempts >= 5
                        ? 'Maximum OTP attempts exceeded. Please request a new OTP.'
                        : 'Invalid OTP. Please try again.',
                    'attempts_remaining' => max(0, 5 - $attempts),
                ], 422);
            }

            // Generate a secure admission access token.
            $accessToken = Str::random(64);

            // Save only the hashed token in the database.
            $registration->update([
                'otp_verified_at' => now(),
                'otp_hash' => null,
                'otp_expires_at' => null,
                'otp_attempts' => 0,

                'admission_access_token_hash' => Hash::make($accessToken),
                'admission_access_token_expires_at' => now()->addMinutes(30),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Mobile number verified successfully.',
                'data' => [
                    'registration_id' => $registration->id,
                    'student_name' => $registration->student_name,
                    'mobile' => $registration->mobile,
                    'otp_verified' => true,

                    // Send raw token to React only once.
                    'admission_access_token' => $accessToken,
                    'token_expires_in' => 1800,
                ],
            ], 200);
        });
    }


    /**
     * TEMPORARY: Complete dummy admission payment.
     * Available only in local development.
     */
    public function completeDummyPayment(Request $request)
    {
        if (!app()->environment('local')) {
            return response()->json([
                'success' => false,
                'message' => 'Dummy payment is disabled.',
            ], 403);
        }

        $validated = $request->validate([
            'registration_id' => 'required|integer|exists:admission_registrations,id',
        ]);

        return DB::transaction(function () use ($validated) {

            $registration = AdmissionRegistration::where(
                'id',
                $validated['registration_id']
            )->lockForUpdate()->firstOrFail();

            // OTP must be verified before payment.
            if (!$registration->otp_verified_at) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please verify your mobile number first.',
                ], 403);
            }

            // Do not allow payment for an invalid registration.
            if ($registration->status !== 'pending') {
                return response()->json([
                    'success' => false,
                    'message' => 'This admission registration is not pending.',
                ], 422);
            }

            // If already paid, return the existing successful status.
            if ($registration->payment_status === 'paid') {
                return response()->json([
                    'success' => true,
                    'message' => 'Admission payment is already completed.',
                    'data' => [
                        'registration_id' => $registration->id,
                        'amount' => 1000,
                        'payment_status' => 'paid',
                    ],
                ]);
            }

            // Amount is fixed on the backend. Never accept it from React.
            $registration->update([
                'amount' => 1000.00,
                'payment_status' => 'paid',
                'payment_id' => 'DUMMY-' . $registration->id . '-' . now()->format('YmdHis'),
                'paid_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Your admission fee of ₹1,000 has been paid successfully.',
                'data' => [
                    'registration_id' => $registration->id,
                    'amount' => 1000,
                    'payment_status' => 'paid',
                    'paid_at' => $registration->paid_at,
                ],
            ]);
        });
    }

    /**
     * Check whether the student is allowed to open the admission form.
     */
    public function checkAdmissionFormAccess(Request $request)
    {
        $validated = $request->validate([
            'registration_id' => 'required|integer|exists:admission_registrations,id',
        ]);

        $registration = AdmissionRegistration::findOrFail(
            $validated['registration_id']
        );

        if (!$registration->otp_verified_at) {
            return response()->json([
                'success' => false,
                'message' => 'Mobile number verification is required.',
            ], 403);
        }

        if (
            $registration->payment_status !== 'paid' ||
            !$registration->paid_at
        ) {
            return response()->json([
                'success' => false,
                'message' => 'Please complete your ₹1,000 admission fee payment before opening the admission form.',
                'payment_required' => true,
            ], 403);
        }

        return response()->json([
            'success' => true,
            'message' => 'Payment verified. You can now open the admission form.',
            'data' => [
                'registration_id' => $registration->id,
                'student_name' => $registration->student_name,
                'mobile' => $registration->mobile,
                'amount' => 1000,
                'payment_status' => 'paid',
                'form_access' => true,
            ],
        ]);
    }

    /**
     * Save or update an admission application draft.
     */
    public function saveAdmissionDraft(Request $request)
    {
        $validated = $request->validate([
            'registration_id' => 'required|integer|exists:admission_registrations,id',

            'student_details' => 'nullable|array',
            'previous_school_details' => 'nullable|array',
            'father_details' => 'nullable|array',
            'mother_details' => 'nullable|array',
            'other_details' => 'nullable|array',
            'documents' => 'nullable|array',
        ]);

        return DB::transaction(function () use ($validated, $request) {

            $registration = $this->getAuthorizedAdmissionRegistration($request);

            if (!$registration) {
                return response()->json([
                    'success' => false,
                    'message' => 'Admission access expired or invalid. Please verify your OTP again.',
                ], 403);
            }

            // Fresh OTP verification is mandatory.
            if (!$registration->otp_verified_at) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please verify your mobile number again.',
                ], 403);
            }

            // Confirmed payment is mandatory.
            if (
                $registration->payment_status !== 'paid' ||
                !$registration->paid_at
            ) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please complete your admission fee payment first.',
                ], 403);
            }

            $application = AdmissionApplication::firstOrNew([
                'admission_registration_id' => $registration->id,
            ]);

            if ($application->status && $application->status !== 'draft') {
                return response()->json([
                    'success' => false,
                    'message' => 'This admission application has already been submitted.',
                ], 422);
            }

            $application->fill([
                'student_details' => $validated['student_details'] ?? $application->student_details,
                'previous_school_details' => $validated['previous_school_details'] ?? $application->previous_school_details,
                'father_details' => $validated['father_details'] ?? $application->father_details,
                'mother_details' => $validated['mother_details'] ?? $application->mother_details,
                'other_details' => $validated['other_details'] ?? $application->other_details,
                'documents' => $validated['documents'] ?? $application->documents,
                'status' => 'draft',
            ]);

            $application->save();

            return response()->json([
                'success' => true,
                'message' => 'Admission form draft saved successfully.',
                'data' => [
                    'application_id' => $application->id,
                    'status' => $application->status,
                ],
            ]);
        });
    }

    /**
     * Submit the completed admission application.
     */
    public function submitAdmissionApplication(Request $request)
    {
        $validated = $request->validate([
            'registration_id' => 'required|integer|exists:admission_registrations,id',

            'student_details' => 'required|array',
            'previous_school_details' => 'nullable|array',
            'father_details' => 'nullable|array',
            'mother_details' => 'nullable|array',
            'other_details' => 'nullable|array',
            'documents' => 'nullable|array',

            'declaration_accepted' => 'accepted',
        ]);

        return DB::transaction(function () use ($validated) {

            $registration = $this->getAuthorizedAdmissionRegistration($request);

            if (!$registration) {
                return response()->json([
                    'success' => false,
                    'message' => 'Admission access expired or invalid. Please verify your OTP again.',
                ], 403);
            }

            if (!$registration->otp_verified_at) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please verify your mobile number again.',
                ], 403);
            }

            if (
                $registration->payment_status !== 'paid' ||
                !$registration->paid_at
            ) {
                return response()->json([
                    'success' => false,
                    'message' => 'Admission fee payment is not completed.',
                ], 403);
            }

            $application = AdmissionApplication::firstOrNew([
                'admission_registration_id' => $registration->id,
            ]);

            if ($application->status && $application->status !== 'draft') {
                return response()->json([
                    'success' => false,
                    'message' => 'This admission application has already been submitted.',
                ], 422);
            }

            $application->fill([
                'student_details' => $validated['student_details'],
                'previous_school_details' => $validated['previous_school_details'] ?? [],
                'father_details' => $validated['father_details'] ?? [],
                'mother_details' => $validated['mother_details'] ?? [],
                'other_details' => $validated['other_details'] ?? [],
                'documents' => $validated['documents'] ?? [],
                'declaration_accepted' => true,
                'status' => 'submitted',
                'submitted_at' => now(),
            ]);

            if (!$application->application_no) {
                $application->application_no =
                    'ADM-' . now()->format('Y') . '-' .
                    str_pad((string) $registration->id, 6, '0', STR_PAD_LEFT);
            }

            $application->save();

            return response()->json([
                'success' => true,
                'message' => 'Admission application submitted successfully.',
                'data' => [
                    'application_id' => $application->id,
                    'application_no' => $application->application_no,
                    'status' => $application->status,
                    'submitted_at' => $application->submitted_at,
                ],
            ]);
        });
    }

    /**
     * Retrieve an existing admission application draft.
     */
    public function getAdmissionApplication(Request $request, $registrationId)
    {
        $request->merge([
            'registration_id' => $registrationId,
        ]);

        $registration = $this->getAuthorizedAdmissionRegistration($request);

        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Admission access expired or invalid. Please verify your OTP again.',
            ], 403);
        }

        $application = AdmissionApplication::where(
            'admission_registration_id',
            $registration->id
        )->first();

        return response()->json([
            'success' => true,
            'data' => [
                'registration_id' => $registration->id,
                'student_name' => $registration->student_name,
                'mobile' => $registration->mobile,
                'payment_status' => $registration->payment_status,
                'application' => $application,
            ],
        ]);
    }

    private function getAuthorizedAdmissionRegistration(Request $request)
    {
        $registrationId = $request->route('registrationId')
            ?? $request->input('registration_id');
        $token = $request->bearerToken();

        if (!$registrationId || !$token) {
            return null;
        }

        $registration = AdmissionRegistration::find($registrationId);

        if (!$registration) {
            return null;
        }

        if (
            !$registration->admission_access_token_hash ||
            !$registration->admission_access_token_expires_at
        ) {
            return null;
        }

        if ($registration->admission_access_token_expires_at->isPast()) {
            return null;
        }

        if (!$registration->otp_verified_at) {
            return null;
        }

        if (
            $registration->payment_status !== 'paid' ||
            !$registration->paid_at
        ) {
            return null;
        }

        if (!Hash::check($token, $registration->admission_access_token_hash)) {
            return null;
        }

        return $registration;
    }

}
