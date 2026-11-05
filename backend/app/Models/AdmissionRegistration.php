<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdmissionRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'enquiry_id',
        'student_name',
        'mobile',
        'otp_hash',
        'otp_expires_at',
        'otp_verified_at',
        'otp_attempts',
        'amount',
        'payment_status',
        'payment_id',
        'paid_at',
        'status',
    ];

    protected $casts = [
        'otp_expires_at' => 'datetime',
        'otp_verified_at' => 'datetime',
        'paid_at' => 'datetime',
        'amount' => 'decimal:2',
    ];

    public function enquiry()
    {
        return $this->belongsTo(Enquiry::class);
    }
}
