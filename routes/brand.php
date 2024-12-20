<?php

use App\Http\Controllers\BrandController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'brand',
    'as' => 'brand.',
    'controller' => BrandController::class,
], function () {
    Route::get('/', 'index')->name('index');
    Route::get('/datatable', 'datatable')->name('datatable');
    Route::get('/model', 'model')->name('model');
    Route::get('/year', 'year')->name('year');
});
