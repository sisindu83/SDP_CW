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
    return view('students/s_maim');
   
});
Route::get('/course', function () {
    return view('students/course');
   
});

Route::get('/student_breakages', function () {
    return view('ACADEMIC/student_brakes/student_breakages');
   
});
