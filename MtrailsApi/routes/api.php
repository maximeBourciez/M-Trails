<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\SpotController;
use App\Http\Controllers\SpotDetailController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ActualiteController;

// Spots
Route::apiResource('spots', SpotController::class);
Route::get('lightSpots', [SpotController::class, 'getLightSpots']);

// Spot details
Route::apiResource('spotsdetails', SpotDetailController::class);
Route::get('spots/{id}/details', [SpotDetailController::class, 'getDetailsBySpotId']);

// Contact
Route::post('/contact', [ContactController::class, 'store']);

// Actus
Route::apiResource('actualites', ActualiteController::class);