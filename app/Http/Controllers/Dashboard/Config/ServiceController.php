<?php

namespace App\Http\Controllers\Dashboard\Config;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Config\UpdateServiceRequest;
use App\Models\Service;
use App\Repositories\ServiceRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function __construct(private ServiceRepository $serviceRepository) {}

    public function index(): Response
    {
        return Inertia::render('Config/Service');
    }

    public function store(UpdateServiceRequest $request): JsonResponse
    {
        $this->serviceRepository->store($request->validated());

        return response()->json('Servicio creado correctamente');
    }

    public function update(
        UpdateServiceRequest $request,
        Service $service,
    ): JsonResponse {
        $this->serviceRepository->update($request->validated(), $service);

        return response()->json('Servicio actualizado correctamente');
    }
}
