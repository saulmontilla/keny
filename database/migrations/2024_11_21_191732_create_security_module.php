<?php

use App\Models\Dashboard\Menu;
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
        Menu::insert([
            [
                'id' => 7,
                'nombre' => 'Seguridad',
                'orden' => 3,
                'parent_id' => 0,
                'url' => '',
                'activo_regexp' => '/dashboard/security.*',
                'icono' => ''
            ],
            [
                'id' => 8,
                'nombre' => 'Cambio de clave',
                'orden' => 1,
                'parent_id' => 7,
                'url' => '/dashboard/security/password',
                'activo_regexp' => '/dashboard/security/password',
                'icono' => ''
            ],

        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Menu::whereIn('id', [7, 8])->delete();
    }
};
