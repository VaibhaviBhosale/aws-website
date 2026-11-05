<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enquiry;
use App\Models\AdmissionRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $registration = DB::transaction(function () use (
            $enquiry,
            $mobile
        ) {
            return AdmissionRegistration::firstOrCreate(
                [
                    'enquiry_id' => $enquiry->id,
                    'mobile' => $mobile,
                    'status' => 'pending',
                ],
                [
                    'student_name' => $enquiry->student_name,
                    'amount' => 1000,
                    'payment_status' => 'pending',
                ]
            );
        });

        return response()->json([
            'success' => true,
            'enquiry_found' => true,
            'message' => 'Enquiry verified successfully.',
            'data' => [
                'registration_id' => $registration->id,
                'student_name' => $enquiry->student_name,
                'mobile' => $mobile,
                'matched_contact' => $matchedContact,
                'otp_required' => true,
            ],
        ], 200);
    }
}
