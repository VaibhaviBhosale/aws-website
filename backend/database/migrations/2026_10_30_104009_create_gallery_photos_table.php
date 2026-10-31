<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGalleryPhotosTable extends Migration
{
    public function up()
    {
        Schema::create('gallery_photos', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('branch_id')->nullable();

            $table->string('category', 100);

            $table->string('sub_category', 100)->nullable();

            $table->string('image', 255);

            $table->string('title', 255)->nullable();
 
            $table->tinyInteger('status')->nullable()->default(1)
                ->comment('1=Active, 0=Inactive');

            $table->timestamps();

            $table->index('branch_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('gallery_photos');
    }
}