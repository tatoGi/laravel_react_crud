<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return inertia('Products/Index');
});

Route::resource('products', ProductController::class);
