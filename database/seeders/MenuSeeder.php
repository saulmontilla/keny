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
                'nombre' => 'Trabajos',
                'orden' => 1,
                'parent_id' => 0,
                'url' => '',
                'activo_regexp' => '/dashboard/work/*',
                'icono' => ''
            ],
            [
                'id' => 2,
                'nombre' => 'Registrar trabajo',
                'orden' => 1,
                'parent_id' => 1,
                'url' => '/dashboard/work/create',
                'activo_regexp' => '/dashboard/work/create',
                'icono' => ''
            ],
            [
                'id' => 3,
                'nombre' => 'Historial',
                'orden' => 2,
                'parent_id' => 1,
                'url' => '/dashboard/work',
                'activo_regexp' => '/dashboard/work',
                'icono' => ''
            ],
            [
                'id' => 4,
                'nombre' => 'Configuracion',
                'orden' => 2,
                'parent_id' => 0,
                'url' => '/dashboard/config',
                'activo_regexp' => '/dashboard/config/*',
                'icono' => ''
            ],
            [
                'id' => 5,
                'nombre' => 'Servicios',
                'orden' => 1,
                'parent_id' => 4,
                'url' => '/dashboard/config/service',
                'activo_regexp' => '/dashboard/config/service',
                'icono' => ''
            ],
            [
                'id' => 6,
                'nombre' => 'Modelos',
                'orden' => 1,
                'parent_id' => 4,
                'url' => '/dashboard/config/brand',
                'activo_regexp' => '/dashboard/config/brand',
                'icono' => ''
            ],
        ]);
    }
}
