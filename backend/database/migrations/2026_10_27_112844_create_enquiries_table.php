<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('enquiries', function (Blueprint $table) {
            $table->id();

            // Student details
            $table->string('student_name');
            $table->date('dob');
            $table->string('gender', 20);
            $table->string('class_applying_for', 100);
            $table->string('admission_year', 20)->nullable();

            // Parent details
            $table->string('father_name');
            $table->string('father_qualification')->nullable();
            $table->string('father_mobile', 15);
            $table->string('father_whatsapp', 15)->nullable();
            $table->string('father_email')->nullable();

            $table->string('mother_qualification')->nullable();
            $table->string('mother_mobile', 15)->nullable();
            $table->string('mother_email')->nullable();
            $table->string('mother_whatsapp', 15)->nullable();

            // Address details
            $table->text('address');
            $table->string('pin', 6)->nullable();

            // Previous school details
            $table->string('previous_school')->nullable();
            $table->string('previous_standard')->nullable();
            $table->text('leaving_reason')->nullable();

            $table->string('status')->default('new');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enquiries');
    }
};
