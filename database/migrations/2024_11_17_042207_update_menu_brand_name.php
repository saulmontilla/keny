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
        $menu = Menu::find(6);
        $menu->nombre = 'Vehiculos';
        $menu->url = '/dashboard/config/vehicle';
        $menu->save();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
