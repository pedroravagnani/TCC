<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router){

    route::post('login', 'App\Http\Controllers\AuthController@login');
    route::post('logout', 'App\Http\Controllers\AuthController@logout');
    route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    route::post('me', 'App\Http\Controllers\AuthController@me');
});