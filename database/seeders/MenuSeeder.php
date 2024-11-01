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
                'url' => '/dashboard/service/create',
                'activo_regexp' => '/dashboard/service/create',
                'icono' => 'service-icon'
            ],
            [
                'id' => 2,
                'nombre' => 'Historial de servicios',
                'orden' => 2,
                'parent_id' => 0,
                'url' => '/dashboard/service',
                'activo_regexp' => '/dashboard/service',
                'icono' => 'service-icon'
            ],
        ]);
    }
}
