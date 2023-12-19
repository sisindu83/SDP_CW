<?php
use Illuminate\Support\Facades\Route;


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

Route::get('/report', function () {
    return view('report/s_maim');

});
Route::get('/s_view', function () {
    return view('Backend/r_view');

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
//Route::get('/admin', function () {
  //  return view('Backend/adlogin');

//});
Route::get('/pwrestpswreset', function () {
    return view('Backend/pwreset');

});


use App\Http\Controllers\complain\guest_complain;
use App\Http\Controllers\login\User_loginController;

Route::get('/user/register/home',[User_loginController::class,'registr_home'])->name('user.register.home');


Route::get('/admin', [User_loginController::class,'admin_login'])->name('user.login');

Route::get('/',[guest_complain::class,'guest_complains'])->name('/');

Route::get('/guest_registeration',[User_loginController::class,'guest_registeration'])->name('guest_registeration');
