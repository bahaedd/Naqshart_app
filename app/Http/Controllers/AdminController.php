<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Models\Artist;
// use App\Models\Palette;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $artists = DB::table('artists')->count();
        $palettes = DB::table('palettes')->count();

        return view('admin',['artists'=>$artists,"palettes"=>$palettes]);
    }
}
