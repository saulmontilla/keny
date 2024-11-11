<?php

use App\Http\Controllers\Dashboard\Config\ServiceController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'service',
    'as' => 'service.',
    'controller' => ServiceController::class,
], function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store');
    Route::put('/{service}', 'update')->name('update');
});
