<?php

namespace App\Http\Controllers\login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\districs;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;


class User_loginController extends Controller
{
    //
    public function logout(){
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return view('backend.adlogin');
    }


    function registr_home(Request $request){
        $dis=districs::orderby('distric_name')->get();

        return view('Backend.u_reg_form')->with('districs', $dis);
    }

    function admin_login(Request $request){


        return view('Backend.adlogin');
    }

    function guest_registeration(Request $request){
        $dis=districs::orderby('distric_name')->get();

        return view('report.r_reg_form')->with('districs', $dis);
    }

    public function create_account(Request $request)
    {

        $rules = [
            'title' => 'required|string',
            'initial' => 'required|string',
             'email' => 'required|email|max:191',
            "passeord"  => "required|string|min:8",
            "repasseord"  => "required|string|min:8",
        ];

        $customMessages = [
            'required' => 'Please fill the required fields*.',
            'string' => 'Invalid Data Format',
            'numeric' => 'Invalid Data Format',
            'email' => 'Invalid Email'
        ];


        $this->validate($request, $rules, $customMessages);


            if ($users = User::where('email', '=', $request->email)
                ->exists()
            ) {

                return redirect(url()->previous())
                    ->withErrors('Email already exists')
                    ->withInput();
            }


            // register

            $userdtls = User::create([
                'email' => $request->email,
               'password' => Hash::make($request->passeord),
               'LcId' => $employee->LcId,
                'ConfirmedLogin' => 1,
                'act_memb'=> 1,
            ]);


            $message = [
                'mtype' => 'success',
                'title' => 'Create Account!',
                'text' => 'Your account has been Created Successfully.',
                'route_name' => 'login',
            ];


            return view('dir_msg.alert_msg')->with('message', $message);

    }


}
