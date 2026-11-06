<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\EnquiryController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\AdmissionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/enquiries', [EnquiryController::class, 'store']);
Route::get('/branches', [EnquiryController::class, 'getBranches']);
Route::get('/gallery', [GalleryController::class, 'index']);
Route::post('/admission/verify-enquiry',[AdmissionController::class, 'verifyEnquiry']);

Route::post('/admission/send-otp', [AdmissionController::class, 'sendOtp'])->middleware('throttle:10,1');
Route::post('/admission/verify-otp', [AdmissionController::class, 'verifyOtp'])->middleware('throttle:15,1');

Route::post('/admission/complete-dummy-payment', [AdmissionController::class,'completeDummyPayment'])->middleware('throttle:5,1');
Route::post('/admission/check-form-access', [AdmissionController::class,'checkAdmissionFormAccess'])->middleware('throttle:10,1');

// Admission application APIs
Route::get('/admission/application/{registrationId}',[AdmissionController::class, 'getAdmissionApplication'])->middleware('throttle:20,1');
Route::post('/admission/application/save-draft',[AdmissionController::class, 'saveAdmissionDraft'])->middleware('throttle:20,1');
Route::post('/admission/application/submit',[AdmissionController::class, 'submitAdmissionApplication'])->middleware('throttle:10,1');