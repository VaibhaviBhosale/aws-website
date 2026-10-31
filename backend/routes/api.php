<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\EnquiryController;
use App\Http\Controllers\Api\GalleryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/enquiries', [EnquiryController::class, 'store']);
Route::get('/branches', [EnquiryController::class, 'getBranches']);
Route::get('/gallery', [GalleryController::class, 'index']);