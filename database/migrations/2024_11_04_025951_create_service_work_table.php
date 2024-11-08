<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('service_work', function (Blueprint $table) {
            $table->id();
            $table->integer('service_id');
            $table->integer('work_id');
            $table->decimal('amount', 8, 2);
            $table->timestamps();
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');
            $table->foreign('work_id')->references('id')->on('works')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_work');
    }
};
