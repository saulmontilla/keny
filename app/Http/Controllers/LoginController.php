<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class LoginController extends Controller
{
    public function index(): mixed //Response
    {
        return Inertia::render('Login');
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $login_attempt = Auth::attempt($request->validated());

        if (!$login_attempt) {
            throw new HttpException(401, 'Usuario o contraseña incorrectos');
        }

        $user = User::where('username', $request->username)->first();

        Auth::login($user);

        session()->regenerate();

        return response()->json(['message' => 'Login successful']);
    }
}
