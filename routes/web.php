<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('test');
});

//Route::get('/callback', 'Controller@testcURL');
Route::get('/logtest', 'Controller@loginUsr');
Route::get('/callback', 'Controller@testSocialite');
Route::get('/redirect', 'Controller@redTest');
Route::get('/logouttest', 'Controller@deAuthorize');
