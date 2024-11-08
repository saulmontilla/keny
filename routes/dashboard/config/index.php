<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'config',
    'as' => 'config.',
], function () {
    include __DIR__ . '/brand.php';
    include __DIR__ . '/service.php';
});
