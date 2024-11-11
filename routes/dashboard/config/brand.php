<?php

use App\Http\Controllers\Dashboard\Config\BrandController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'brand',
    'as' => 'brand.',
    'controller' => BrandController::class
], function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store');
    Route::put('/{brand}', 'update')->name('update');
});
