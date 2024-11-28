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
        Schema::table('works', function (Blueprint $table) {
            $table->dropColumn('labour');
        });

        Schema::table('works', function (Blueprint $table) {
            $table->dropColumn('materials');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('works', function (Blueprint $table) {
            $table->decimal('labour', 8, 2)->default(0)->comment('Mano de obra');
            $table->decimal('materials', 8, 2)->default(0)->comment('Materiales');
        });
    }
};
