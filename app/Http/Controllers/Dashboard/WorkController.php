<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\StoreWorkController;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WorkController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Work/Create');
    }

    public function store(StoreWorkController $request)
    {

        return response()->json($request->all());
    }
}
