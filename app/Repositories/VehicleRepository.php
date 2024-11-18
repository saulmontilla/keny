<?php

namespace App\Repositories;

use App\Models\Vehicle;

class VehicleRepository
{
    public function store(array $data): Vehicle
    {
        return Vehicle::create($data);
    }
}
