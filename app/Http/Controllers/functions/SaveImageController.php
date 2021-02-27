<?php

namespace App\Http\Controllers\functions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;


class SaveImageController extends Controller
{

    public function __construct()
    {
    }
    public function createImages(Request $request, $img)
    {
        $input = $request->all();
        $path = 'storage/' . $img->store('artists', 'public');
        $input['img'] = $path;

        return $path;
    }
}