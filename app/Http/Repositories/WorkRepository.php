<?php

namespace App\Repositories;

use App\Models\Work;

class WorkRepository
{
    public function store(array $data): void
    {
        $work = Work::create([
            'plate' => $data['plate'],
            'brand' => $data['brand'],
            'date' => $data['date'],
            'labour' => $data['labour'],
            'materials' => $data['materials'],
            'description' => $data['description']
        ]);

        $services = collect($data['servicesWithAmount'])->mapWithKeys(function ($service) {
            return [$service['id'] => ['amount' => $service['base_amount']]];
        });

        $work->services()->attach($services);
    }
}
