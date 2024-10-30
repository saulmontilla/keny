<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller
{
    public function index(): mixed //Response
    {
        return Inertia::render('Login');
    }
}
