<?php

use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'service',
    'as' => 'service.',
    'controller' => ServiceController::class
], function () {
    Route::get('/', 'index')->name('index');
    Route::get('/datatable', 'datatable')->name('datatable');
    Route::get('/type', 'type')->name('type');
});
