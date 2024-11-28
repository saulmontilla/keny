<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class ServiceController extends Controller
{
    public function index(): JsonResponse
    {
        $services = Service::all();

        return response()->json($services);
    }

    public function datatable(Request $request): LengthAwarePaginator
    {
        $query = Service::query();

        return $query->paginate($request->get('per_page', 10));
    }

    public function type(): JsonResponse
    {
        $serviceTypes = ServiceType::all();

        return response()->json($serviceTypes);
    }
}
