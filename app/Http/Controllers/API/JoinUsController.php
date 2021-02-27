<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateArtistRequest as RequestsCreateArtistRequest;
use Illuminate\Http\Request;
use App\Models\Appliedartist;
use App\Models\joinus_Text;
use Illuminate\Support\Facades\Validator;

class JoinUsController extends Controller
{
        /**
     * Responds with a welcome message with instructions
     *
     * @return \Illuminate\Http\Response
     */
    public function get_join_content(){
      $data=joinus_Text::latest()->first();
      return response()->json(['data'=>$data]);
    }
    public function crete_request(RequestsCreateArtistRequest $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'email' => 'required|email:rfc,dns',
        //     'name' => 'required|string|max:100',
        //     'phone' => ['required', 'regex:/^\+(?:[0-9] ?){6,14}[0-9]$/'],
        //     'socialLink' => 'required'
        //     ]);
        //         if($validator->errors()->count() > 0)
        //         {
        //             return response()->json(['status'=>false,'errors'=>$validator->errors()->all()]);
        //         }

          $applied =  Appliedartist::create($request->only(['name','email','phone','socialLink']));
          if($applied)
          {
            return response()->json(['status'=>true,'data'=>$applied]);

          }else{
            return response()->json(['status'=>false,'eroors'=>['wrong in saving data']]);

          }
    }
}
