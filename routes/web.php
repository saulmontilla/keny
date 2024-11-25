<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\WelcomeController;
use App\Models\Work;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [WelcomeController::class, 'index']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('login.store');

Route::get('/pdf', function () {
    $work = Work::find(1);
    $pdf = PDF::loadView('pdf.work', ['work' => $work]);
    return $pdf->download('work.pdf');
});

include __DIR__ . '/dashboard/index.php';
include __DIR__ . '/service.php';
include __DIR__ . '/brand.php';
