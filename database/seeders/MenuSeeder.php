<?php

namespace Database\Seeders;

use App\Models\Dashboard\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Menu::insert([
            [
                'id' => 1,
                'nombre' => 'Crear servicio',
                'orden' => 1,
                'parent_id' => 0,
                'url' => '/dashboard/services/create',
                'activo_regexp' => '/dashboard/services/create',
                'icono' => 'service-icon'
            ],
            [
                'id' => 2,
                'nombre' => 'Historial de servicios',
                'orden' => 2,
                'parent_id' => 0,
                'url' => '/dashboard/services',
                'activo_regexp' => '/dashboard/services',
                'icono' => 'service-icon'
            ],
        ]);
    }
}
