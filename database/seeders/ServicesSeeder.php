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
                'name' => 'Servicio 1',
                'base_amount' => 10.00
            ],
            [
                'id' => 2,
                'name' => 'Servicio 2',
                'base_amount' => 20.00
            ],
            [
                'id' => 3,
                'name' => 'Servicio 3',
                'base_amount' => 50.00
            ],
        ]);
    }
}
