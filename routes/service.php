<?php

use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'service',
    'as' => 'service.',
    'controller' => ServiceController::class
], function () {
    Route::get('/', 'index')->name('index');
    Route::get('/create', 'create')->name('create');
    Route::post('/', 'store')->name('store');
});
