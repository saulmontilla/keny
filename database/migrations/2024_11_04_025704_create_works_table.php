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
        Schema::create('works', function (Blueprint $table) {
            $table->id();
            $table->string('plate', 15);
            $table->integer('brand_id');
            $table->date('date');
            $table->decimal('labour', 8, 2)->comment('Mano de obra');
            $table->decimal('materials', 8, 2)->comment('Materiales');
            $table->text('description');
            $table->timestamps();
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('works');
    }
};
