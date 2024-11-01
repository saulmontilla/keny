<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Service::insert([
            [
                'id' => 1,
                'nombre' => 'Servicio 1',
            ],
            [
                'id' => 2,
                'nombre' => 'Servicio 2',
            ],
            [
                'id' => 3,
                'nombre' => 'Servicio 3',
            ],
        ]);
    }
}
