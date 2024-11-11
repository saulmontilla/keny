<?php

namespace App\Repositories;

use App\Models\Service;

class ServiceRepository
{
    public function store(array $data): void
    {
        Service::create($data);
    }

    public function update(array $data, Service $service): void
    {
        $service->update($data);
    }
}
