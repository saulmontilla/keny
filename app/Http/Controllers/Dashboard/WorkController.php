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
        $work->loadSum('services', 'base_amount');
        $work->totalService = $work->services_sum_base_amount + $work->materials;
        $work->total = $work->totalService + $work->labour;

        $pdf = $workRepository->print($work);


        return $pdf;
    }
}
