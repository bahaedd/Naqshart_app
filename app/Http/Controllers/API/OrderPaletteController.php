<?php

namespace App\Http\Controllers\API;

use App\OrderPalette;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use PragmaRX\Countries\Package\Countries as Countries;
use App\Models\HomeData;


class OrderPaletteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {


    }


        /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function homedata()
    {

        $homedata = HomeData::latest()->first();
        if($homedata)
        return response()->json(['status'=>true,'data'=>$homedata]);
        return response()->json(['status'=>false,'errors'=>['error']]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OrderPalette  $orderPalette
     * @return \Illuminate\Http\Response
     */
    public function show(OrderPalette $orderPalette)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OrderPalette  $orderPalette
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderPalette $orderPalette)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OrderPalette  $orderPalette
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrderPalette $orderPalette)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OrderPalette  $orderPalette
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderPalette $orderPalette)
    {
        //
    }
}
