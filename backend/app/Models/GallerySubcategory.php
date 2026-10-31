<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GallerySubcategory extends Model
{
    protected $table = 'gallery_subcategories';

    protected $fillable = [
        'branch_id',
        'category',
        'name'
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}