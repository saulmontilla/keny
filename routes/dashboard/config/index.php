<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'config',
    'as' => 'config.',
], function () {
    include __DIR__ . '/vehicle.php';
    include __DIR__ . '/service.php';
});
