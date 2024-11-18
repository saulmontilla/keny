<?php

namespace App\Repositories;

use App\Models\Work;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class WorkRepository
{
    public function store(array $data): void
    {
        $work = Work::create([
            'plate' => strtoupper($data['plate']),
            'vehicle_id' => $data['vehicle'],
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

    public function historyDatatable(Request $request): LengthAwarePaginator
    {
        $query = Work::query();
        $query->with(['vehicle.brand', 'vehicle.model', 'services']);
        $query->withSum('services', 'base_amount');

        if ($request->has('from')) {
            $query->whereDate('date', '>=', $request->get('from'));
        }

        if ($request->has('to')) {
            $query->whereDate('date', '<=', $request->get('to'));
        }

        $works = $query->paginate();

        return $works;
    }
}
