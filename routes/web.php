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
Route::get('/s_view', function () {
    return view('Backend/r_view');
   
});

Route::get('/registration', function () {
    return view('report/r_reg_form');
   
});

Route::get('/login', function () {
    return view('report/login');
   
});

Route::get('/ccmplin', function () {
    return view('report/passwordreset');
   
});

Route::get('/pwrest', function () {
    return view('report/report_check');
   
});
Route::get('/inspec', function () {
    return view('Backend/inspec');
   
});
Route::get('/admin', function () {
    return view('Backend/login');
   
});
Route::get('/pswreset', function () {
    return view('Backend/passwordreset');
   
});
Route::get('/u_reg', function () {
    return view('Backend/r_reg_form');
   
});