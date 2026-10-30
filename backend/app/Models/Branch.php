<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $table = 'branches';

    protected $fillable = [
        'name',
        'city',
        'state',
        'active',
    ];

    protected $casts = [
        'active' => 'boolean',
    ];

    public function enquiries()
    {
        return $this->hasMany(Enquiry::class, 'branch_id');
    }
}