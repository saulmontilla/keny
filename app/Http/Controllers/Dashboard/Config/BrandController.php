<?php

namespace App\Http\Controllers\Dashboard\Config;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Config\CreateBrandRequest;
use App\Models\Brand;
use App\Repositories\BrandRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BrandController extends Controller
{
    public function __construct(private BrandRepository $brandRepository) {}

    public function index(): Response
    {
        return Inertia::render('Config/Brand');
    }

    public function store(CreateBrandRequest $request): JsonResponse
    {
        $this->brandRepository->store($request->validated());

        return response()->json('Modelo creado correctamente');
    }

    public function update(
        CreateBrandRequest $request,
        Brand $brand,
    ): JsonResponse {
        $this->brandRepository->update($request->validated(), $brand);

        return response()->json('Modelo actualizado correctamente');
    }
}
