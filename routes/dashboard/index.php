<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'dashboard',
    'as' => 'dashboard.',
    'middleware' => 'auth',
], function () {
    include __DIR__ . '/work.php';
    include __DIR__ . '/menu.php';
});
