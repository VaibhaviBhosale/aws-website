<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admission_applications', function (Blueprint $table) {
            $table->id();

            $table->foreignId('admission_registration_id')
                ->unique()
                ->constrained('admission_registrations')
                ->cascadeOnDelete();

            $table->string('application_no')->nullable()->unique();

            // Student information
            $table->json('student_details')->nullable();

            // Previous school information
            $table->json('previous_school_details')->nullable();

            // Parents' information
            $table->json('father_details')->nullable();
            $table->json('mother_details')->nullable();

            // Emergency, medical and sibling information
            $table->json('other_details')->nullable();

            // Uploaded document paths
            $table->json('documents')->nullable();

            $table->boolean('declaration_accepted')->default(false);

            $table->enum('status', [
                'draft',
                'submitted',
                'under_review',
                'approved',
                'rejected'
            ])->default('draft');

            $table->timestamp('submitted_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admission_applications');
    }
};