<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdmissionApplication extends Model
{
    protected $fillable = [
        'admission_registration_id',
        'application_no',
        'student_details',
        'previous_school_details',
        'father_details',
        'mother_details',
        'other_details',
        'documents',
        'declaration_accepted',
        'status',
        'submitted_at',
    ];

    protected $casts = [
        'student_details' => 'array',
        'previous_school_details' => 'array',
        'father_details' => 'array',
        'mother_details' => 'array',
        'other_details' => 'array',
        'documents' => 'array',
        'declaration_accepted' => 'boolean',
        'submitted_at' => 'datetime',
    ];

    public function admissionRegistration()
    {
        return $this->belongsTo(
            AdmissionRegistration::class,
            'admission_registration_id'
        );
    }
}