<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'dashboard',
    'as' => 'dashboard.',
    'middleware' => 'auth',
], function () {
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

    include __DIR__ . '/work.php';
    include __DIR__ . '/menu.php';
    include __DIR__ . '/config/index.php';
    include __DIR__ . '/security/index.php';
});
