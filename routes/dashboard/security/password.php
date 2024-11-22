<?php

use App\Http\Controllers\Dashboard\Security\PasswordController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'password',
    'as' => 'password.',
    'controller' => PasswordController::class,
], function () {
    Route::get('/', 'index')->name('index');
    Route::put('/', 'update')->name('update');
});
