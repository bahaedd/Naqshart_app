<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaletteContent extends Model
{

    public $table = 'palette_contents';
    public $fillable = [
        'sizing_details',
        'print_material',
        'print_ink',
        'print_finish',
        'frame_material',
        'frame_finish',
        'sizing_details_ar',
        'print_material_ar',
        'print_ink_ar',
        'print_finish_ar',
        'frame_material_ar',
        'frame_finish_ar',
        'shipping',
        'shipping_ar',
    ];
    protected $casts = [
        'sizing_details' => 'string',
        'print_material' => 'string',
        'print_ink' => 'string',
        'print_finish' => 'string',
        'frame_material' => 'string',
        'frame_finish' => 'string',
        'shipping' => 'string',
        'shipping_ar' => 'string',

        'sizing_details_ar' => 'string',
        'print_material_ar' => 'string',
        'print_ink_ar' => 'string',
        'print_finish_ar' => 'string',
        'frame_material_ar' => 'string',
        'frame_finish_ar' => 'string',
    ];
    public static $rules = [

        'sizing_details' => 'required|string',
        'print_material' => 'required|string',
        'print_ink' => 'required|string',
        'print_finish' => 'required|string',
        'frame_material' => 'required|string',
        'frame_finish' => 'required|string',
        'shipping' => 'required|string',
        'shipping_ar' => 'required|string',
        'sizing_details_ar' => 'required|string',
        'print_material_ar' => 'required|string',
        'print_ink_ar' => 'required|string',
        'print_finish_ar' => 'required|string',
        'frame_material_ar' => 'required|string',
        'frame_finish_ar' => 'required|string',

    ];
}