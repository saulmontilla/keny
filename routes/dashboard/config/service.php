<?php

use App\Http\Controllers\Config\ServiceController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'service',
    'as' => 'service.',
    'controller' => ServiceController::class,
], function () {
    Route::get('/', 'index')->name('index');
});
