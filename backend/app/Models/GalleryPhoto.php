<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GalleryPhoto extends Model
{
    protected $table = 'gallery_photos';

    protected $fillable = [
        'branch_id',
        'category',
        'sub_category',
        'image',
        'title',
        'status'
    ];

    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeCategory($query, $cat)
    {
        return $query->where('category', $cat);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}