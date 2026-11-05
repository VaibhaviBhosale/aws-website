<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admission_registrations', function (Blueprint $table) {
            $table->id();

            $table->foreignId('enquiry_id')
                ->constrained('enquiries')
                ->cascadeOnDelete();

            $table->string('student_name');
            $table->string('mobile', 15);

            // OTP verification
            $table->string('otp_hash')->nullable();
            $table->timestamp('otp_expires_at')->nullable();
            $table->timestamp('otp_verified_at')->nullable();
            $table->unsignedTinyInteger('otp_attempts')->default(0);

            // Admission payment
            $table->decimal('amount', 10, 2)->default(1000.00);
            $table->string('payment_status')->default('pending');
            $table->string('payment_id')->nullable();
            $table->timestamp('paid_at')->nullable();

            // Overall registration status
            $table->string('status')->default('pending');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admission_registrations');
    }
};
