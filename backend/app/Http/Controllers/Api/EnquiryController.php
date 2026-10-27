<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enquiry;
use Illuminate\Http\Request;

class EnquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_name' => 'required|string|max:255',
            'dob' => 'required|date|before_or_equal:today',
            'gender' => 'required|in:Male,Female',
            'class_applying_for' => 'required|string|max:100',
            'admission_year' => 'nullable|string|max:20',

            'father_name' => 'required|string|max:255',
            'father_qualification' => 'nullable|string|max:255',
            'father_mobile' => [
                'required',
                'regex:/^[0-9]{10}$/',
            ],
            'father_whatsapp' => [
                'nullable',
                'regex:/^[0-9]{10}$/',
            ],
            'father_email' => 'nullable|email|max:255',

            'mother_qualification' => 'nullable|string|max:255',
            'mother_mobile' => [
                'nullable',
                'regex:/^[0-9]{10}$/',
            ],
            'mother_email' => 'nullable|email|max:255',
            'mother_whatsapp' => [
                'nullable',
                'regex:/^[0-9]{10}$/',
            ],

            'address' => 'required|string|max:2000',
            'pin' => [
                'nullable',
                'regex:/^[0-9]{6}$/',
            ],

            'previous_school' => 'nullable|string|max:255',
            'previous_standard' => 'nullable|string|max:100',
            'leaving_reason' => 'nullable|string|max:2000',
        ]);

        $enquiry = Enquiry::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Your enquiry has been submitted successfully.',
            'data' => $enquiry,
        ], 201);
    }
}   