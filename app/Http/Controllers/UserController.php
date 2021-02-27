<?php

namespace App\Http\Controllers;
use App\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all()->skip(1);
        return view('users.index',['users'=>$users]);
    }

    /**
     * Responds with a welcome message with instructions
     *
     * @return \Illuminate\Http\Response
     */
    public function changeStatus(Request $request)
    {
        $user = User::find($request->user_id);
        $user->admin_role = $request->status;
        $user->save();

        return response()->json(['success'=>'Status change successfully.']);
    }

    public function changeStatus_2(Request $request)
    {
        $user = User::find($request->user_id);
        $user->admin_role = $request->status;
        $user->save();

        return response()->json(['success'=>'Status change successfully.']);
    }



}
