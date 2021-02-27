<?php

namespace App\Http\Controllers\Api;

use App\Models\AboutAretists;
use App\Models\AboutContent;
use App\Models\About_Contacts_Text;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutController extends Controller
{


    /**
     * Responds with a welcome message with instructions
     *
     * @return \Illuminate\Http\Response
     */
    public function get_about_content(Request $request)
    {

        $data = AboutContent::latest()->first();
        // $dataArtist = AboutAretists::all();
        if ($data) {
            // return response( )->json(['status'=>true,'data'=>$data,'dataArtist'=>$dataArtist]);
            return response()->json(['status' => true, 'data' => $data]);
        } else {
            return response()->json(['status' => false]);
        }
    }


    /**
     * Responds with a welcome message with instructions
     *
     * @return \Illuminate\Http\Response
     */
    public function get_about_artist(Request $request)
    {

        $data = AboutAretists::all();
        if ($data) {
            return response()->json(['status' => true, 'data' => $data]);
        } else {
            return response()->json(['status' => false]);
        }
    }

    public function get_about_contents_text()
    {
        $data = About_Contacts_Text::latest()->first();
        return response()->json(['data' => $data]);
    }
}