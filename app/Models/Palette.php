<?php

namespace App\Models;

use Eloquent as Model;
// use Illuminate\Database\Eloquent\Model;

/**
 * Class Palette
 * @package App\Models
 * @version June 17, 2020, 4:50 pm UTC
 *
 * @property string $name
 * @property string $img
 * @property integer $palette_copies
 * @property integer $avalible_copies
 * @property integer $S_copies
 * @property integer $S_avalible
 * @property string $S_price
 * @property integer $M_copies
 * @property integer $M_avalible
 * @property string $M_price
 * @property integer $L_copies
 * @property integer $L_avalible
 * @property string $L_price
 * @property string $sizing_details
 * @property string $print_material
 * @property string $print_ink
 * @property string $print_finish
 * @property string $frame_material
 * @property string $frame_finish
 * @property integer $artist_id
 */
class Palette extends Model
{

    public $table = 'palettes';





    public $fillable = [
        'name',
        'img',
        // 'img2',
        'palette_copies',
        'avalible_copies',
        'S_copies',
        'S_avalible',
        'S_price',
        'M_copies',
        'M_avalible',
        'M_price',
        'L_copies',
        'L_avalible',
        'L_price',
        // 'sizing_details',
        // 'print_material',
        // 'print_ink',
        // 'print_finish',
        // 'frame_material',
        // 'frame_finish',
        'artist_id',
        'tag',
        // 'sizing_details_ar',
        // 'print_material_ar',
        // 'print_ink_ar',
        // 'print_finish_ar',
        // 'frame_material_ar',
        // 'frame_finish_ar',
        'description',
        'description_ar',
        // 'shipping',
        // 'shipping_ar',
        'L_price_sar',
        'M_price_sar',
        'S_price_sar',
        // 'gif1',
        // 'gif2',
        // 'header_ar',
        // 'header',
        // 'content_ar',
        // 'content',
        'mobile_background'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'img' => 'string',
        // 'img2' => 'string',
        'palette_copies' => 'integer',
        'avalible_copies' => 'integer',
        'S_copies' => 'integer',
        'S_avalible' => 'integer',
        'S_price' => 'string',
        'M_copies' => 'integer',
        'M_avalible' => 'integer',
        'M_price' => 'string',
        'L_copies' => 'integer',
        'L_avalible' => 'integer',
        'L_price' => 'string',
        // 'sizing_details' => 'string',
        // 'print_material' => 'string',
        // 'print_ink' => 'string',
        // 'print_finish' => 'string',
        // 'frame_material' => 'string',
        // 'frame_finish' => 'string',
        'artist_id' => 'integer',
        'tag' => 'string',
        // 'sizing_details_ar' => 'string',
        // 'print_material_ar' => 'string',
        // 'print_ink_ar' => 'string',
        // 'print_finish_ar' => 'string',
        // 'frame_material_ar' => 'string',
        // 'frame_finish_ar' => 'string',
        'description' => 'string',
        'description_ar' => 'string',
        'L_price_sar' => 'string',
        'M_price_sar' => 'string',
        'S_price_sar' => 'string',
        // 'gif1' => 'string',
        // 'gif2' => 'string',
        // 'header' => 'string',
        // 'header_ar' => 'string',
        // 'content' => 'string',
        // 'content_ar' => 'string',
        'mobile_background' => 'string',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'tag' => 'required',
    ];
    public function images()
    {
        return $this->hasMany('App\Models\Paletteimage', 'palatte_id');
    }
    public function artist()
    {
        return $this->belongsTo('App\Models\Artist');
    }
    protected $appends = ['artistMinPalettes', 'img2'];
    public function getArtistMinPalettesAttribute()
    {
        return [
            'img' => $this->images->first()->img
        ];
    }
    public function getImg2Attribute()
    {
        return $this->images->get(1)->img;
    }
    // public function artist(){
    //     return $this->belongsTo(Artist::class,"artist_id");
    // }

}