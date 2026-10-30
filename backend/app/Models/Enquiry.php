<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_name',
        'dob',
        'gender',
        'class_applying_for',
        'admission_year',
        'father_name',
        'father_qualification',
        'father_mobile',
        'father_whatsapp',
        'father_email',
        'mother_qualification',
        'mother_mobile',
        'mother_email',
        'mother_whatsapp',
        'address',
        'pin',
        'previous_school',
        'previous_standard',
        'leaving_reason',
        'status',
    ];

    protected $casts = [
        'dob' => 'date',
    ];
}
