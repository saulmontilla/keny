<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'dashboard',
    'as' => 'dashboard.',
    'middleware' => 'auth',
], function () {
    include __DIR__ . '/service.php';
});
