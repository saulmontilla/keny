<?php

use App\Http\Controllers\Dashboard\Config\VehicleController;
use App\Http\Middleware\ParseSelect2Values;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'vehicle',
    'as' => 'vehicle.',
    'controller' => VehicleController::class
], function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store')->middleware(ParseSelect2Values::class);
    Route::get('/all', 'all')->name('all');
    Route::get('/datatable', 'datatable')->name('datatable');
    Route::put('/{vehicle}', 'update')->name('update')->middleware(ParseSelect2Values::class);
});
