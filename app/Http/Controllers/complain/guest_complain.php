<?php

namespace App\Http\Controllers\complain;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Models\districs;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

class guest_complain extends Controller
{
    //

    public function logout(){
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return view('admin.adlogin');
    }
    function guest_complains(Request $request){
        $dis=districs::orderby('distric_name')->get();

        return view('report.s_maim')->with('districs', $dis);
    }
}
