<?php

namespace App\Repositories;

use App\Models\Service;

class ServiceRepository
{
    public function store(array $data): void
    {
        Service::create($data);
    }

    public function storeOrUpdate(array $data): array
    {
        foreach ($data as $index => $service) {
            if ($service['id'] == 0) {
                $service_data = [
                    'name' => ucfirst($service['name']),
                    'service_type_id' => $service['type'],
                ];

                $service['id'] = Service::create($service_data)->id;

                $data[$index] = $service;
            } else {
                Service::find($service['id'])->update([
                    'name' => ucfirst($service['name']),
                    'service_type_id' => $service['type'],
                ]);
            }
        }

        return $data;
    }

    public function update(array $data, Service $service): void
    {
        $service->update($data);
    }
}
