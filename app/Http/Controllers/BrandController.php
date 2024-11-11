<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class BrandController extends Controller
{
    public function index(): JsonResponse
    {
        $brands = Brand::all();

        return response()->json($brands);
    }

    public function datatable(Request $request): LengthAwarePaginator
    {
        $query = Brand::query();

        return $query->paginate($request->get('per_page', 10));
    }
}
