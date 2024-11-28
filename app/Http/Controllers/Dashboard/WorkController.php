<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\StoreWorkRequest;
use App\Models\Work;
use App\Repositories\WorkRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;
use Inertia\Response;

class WorkController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Work/History');
    }

    public function create(): Response
    {
        return Inertia::render('Work/Create');
    }

    public function store(StoreWorkRequest $request, WorkRepository $work): JsonResponse
    {
        $work->store($request->validated());
        return response()->json('Servicio registrado correctamente');
    }

    public function historyDatatable(Request $request, WorkRepository $work): LengthAwarePaginator
    {
        return $work->historyDatatable($request);
    }

    public function print(Request $request, Work $work, WorkRepository $workRepository)
    {
        $work = $work->load(['vehicle.brand', 'vehicle.model', 'services']);
        $work->loadSum('services as total_service_amount', 'service_work.amount');

        $hiddenCosts = $work->services->filter(function ($service) {
            return $service->pivot->renders_in_pdf == 0;
        })->sum(function ($service) {
            return $service->pivot->amount;
        });

        $labourServices = $work->services->filter(function ($service) {
            return $service->service_type_id == 1 && $service->pivot->renders_in_pdf == 1;
        });

        $labourCost = $labourServices->sum(function ($service) {
            return $service->pivot->amount;
        });

        $enumerableServices = $work->services->filter(function ($service) {
            return $service->pivot->renders_in_pdf == 1 && $service->service_type_id != 1;
        });

        $work->labourServices = $labourServices;
        $work->enumerableServices = $enumerableServices;
        $work->totalLabour = $labourCost + $hiddenCosts;
        $work->total = $work->total_service_amount;
        $work->code = str_pad($work->id, 6, '0', STR_PAD_LEFT);

        $pdf = $workRepository->print($work);

        return $pdf;
    }
}
