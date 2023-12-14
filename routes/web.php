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

/*Route::get('/s_maim', function () {
   return view('welcome');
   
});*/
Route::get('/', function () {
    return view('report/s_maim');
   
});
Route::get('/report', function () {
    return view('report/s_maim');
   
});
Route::get('/admin', function () {
    return view('Backend/r_view');
   
});

Route::get('/registration', function () {
    return view('report/r_reg_form');
   
});

Route::get('/login', function () {
    return view('report/login');
   
});

Route::get('/pwrest', function () {
    return view('report/passwordreset');
   
});
