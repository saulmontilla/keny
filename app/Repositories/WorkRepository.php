<?php

namespace App\Repositories;

use App\Models\Work;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Barryvdh\DomPDF\Facade\Pdf;

class WorkRepository
{
    public function __construct(private ServiceRepository $serviceRepository) {}

    public function store(array $data): void
    {
        $work = Work::create([
            'plate' => strtoupper($data['plate']),
            'vehicle_id' => $data['vehicle'],
            'date' => $data['date'],
            'description' => $data['description']
        ]);

        $services = $this->serviceRepository->storeOrUpdate($data['services']);

        $services = collect($services)->mapWithKeys(function ($service) {
            return [
                $service['id'] => [
                    'amount' => $service['amount'],
                    'renders_in_pdf' => $service['rendersInPdf']
                ],
            ];
        });

        $work->services()->attach($services);
    }


    public function historyDatatable(Request $request): LengthAwarePaginator
    {
        $query = Work::query();
        $query->with(['vehicle.brand', 'vehicle.model', 'services.type']);
        $query->withSum('services as total_service_amount', 'service_work.amount');

        if ($request->has('from')) {
            $query->whereDate('date', '>=', $request->get('from'));
        }

        if ($request->has('to')) {
            $query->whereDate('date', '<=', $request->get('to'));
        }

        $query->orderByDesc('date');

        $works = $query->paginate();

        return $works;
    }

    public function print(Work $work)
    {
        $pdf = Pdf::loadView('pdf.work', ['work' => $work]);

        return $pdf->download('work.pdf');
    }
}
