<?php

namespace App\Http\Controllers\Dashboard\Config;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Config\CreateVehicleRequest;
use App\Models\Brand;
use App\Models\Vehicle;
use App\Services\VehicleService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;
use Inertia\Response;

class VehicleController extends Controller
{
    public function __construct(private VehicleService $vehicleService) {}

    public function index(): Response
    {
        return Inertia::render('Config/Vehicle');
    }

    public function store(CreateVehicleRequest $request): JsonResponse
    {
        $this->vehicleService->store($request->validated());

        return response()->json('Modelo creado correctamente');
    }

    public function update(
        CreateVehicleRequest $request,
        Brand $brand,
    ): JsonResponse {
        // $this->brandRepository->update($request->validated(), $brand);

        return response()->json('Modelo actualizado correctamente');
    }

    public function all(): JsonResponse
    {
        $vehicles = Vehicle::with(['brand', 'model'])->get();

        return response()->json($vehicles);
    }

    public function datatable(Request $request): LengthAwarePaginator
    {
        $query = Vehicle::query();
        $query->with(['brand', 'model']);

        return $query->paginate($request->per_page);
    }
}
