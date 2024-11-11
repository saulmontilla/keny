<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Repositories\MenuRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(MenuRepository $menu): JsonResponse
    {
        return response()->json($menu->all());
    }
}
