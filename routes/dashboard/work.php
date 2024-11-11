<?php

use App\Http\Controllers\Dashboard\WorkController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'work',
    'as' => 'work.',
    'controller' => WorkController::class
], function () {
    Route::get('/', 'index')->name('index');
    Route::get('/create', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    Route::get('/history/datatable', 'historyDatatable')->name('historyDatatable');
});
