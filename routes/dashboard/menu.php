<?php

use App\Http\Controllers\Dashboard\MenuController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'menu',
    'as' => 'menu.',
    'controller' => MenuController::class
], function () {
    Route::get('/', 'index')->name('index');
});
