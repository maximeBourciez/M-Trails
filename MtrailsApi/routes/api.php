<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\SpotController;
use App\Http\Controllers\SpotDetailController;
use App\Http\Controllers\ContactController;


Route::apiResource('spots', SpotController::class);
Route::apiResource('spotsdetails', SpotDetailController::class);
Route::get('spots/{id}/details', [SpotDetailController::class, 'getDetailsBySpotId']);

// Contact
Route::post('/contact', [ContactController::class, 'store']);