<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'security',
    'as' => 'security.',
], function () {
    require __DIR__ . '/password.php';
});
