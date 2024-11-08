<?php

use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'brand',
    'as' => 'brand.',
], function () {
    Route::get('/', 'index')->name('index');
});
