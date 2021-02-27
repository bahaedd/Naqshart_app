<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Discount;
class CheckPromo extends Controller
{


        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function check_promo(Request $request)
    {

                $discount = Discount::where('code', '=', $request->code)->first();
                if($discount)
        {
            return response()->json(['status'=>true,'data'=>$discount,'percentage'=>$discount->discount_percentage]);
        }
        else
        {
            return response()->json(['status'=>false,'message'=>'code not found']);
        }
    }
}
