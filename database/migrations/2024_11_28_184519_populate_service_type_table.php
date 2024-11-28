<?php

use App\Models\ServiceType;
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
        ServiceType::insert([
            [
                'id' => 1,
                'name' => 'Mano de obra',
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'name' => 'Repuestos',
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'name' => 'Materiales',
                'created_at' => now(),
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
