<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\BrandModel;
use App\Models\BrandYear;

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

    public function model(Request $request): JsonResponse
    {
        $brand_id = $request->get('brand');
        $query = BrandModel::query();

        if ($brand_id) {
            $query->where('brand_id', $brand_id);
        }

        $models = $query->get();
        return response()->json($models);
    }
}
