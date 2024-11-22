<?php

namespace App\Http\Controllers\Dashboard\Security;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\UpdatePasswordRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class PasswordController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Security/Password');
    }

    public function update(UpdatePasswordRequest $request): JsonResponse
    {
        $request->user()->update([
            'password' => Hash::make($request->password)
        ]);

        return response()->json('Clave actualizada correctamente');
    }
}
