<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class HomeData
 * @package App\Models
 * @version July 28, 2020, 10:57 am UTC
 *
 * @property string $word1_en
 * @property string $word1_ar
 * @property string $word2_en
 * @property string $word2_ar
 * @property string $word3_en
 * @property string $word3_ar
 * @property string $image
 * @property string $video
 */
class HomeData extends Model
{
    use SoftDeletes;

    public $table = 'home_datas';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'word1_en',
        'word1_ar',
        'word2_en',
        'word2_ar',
        // 'word3_en',
        // 'word3_ar',
        'image',
        'video'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'word1_en' => 'string',
        'word1_ar' => 'string',
        'word2_en' => 'string',
        'word2_ar' => 'string',
        // 'word3_en' => 'string',
        // 'word3_ar' => 'string',
        'image' => 'string',
        'video' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'word1_en' => 'required|string',
        'word1_ar' => 'required|string',
        'word2_en' => 'required|string',
        'word2_ar' => 'required|string',
        // 'word3_en' => 'required|string|max:200',
        // 'word3_ar' => 'required|string|max:200',
        'image' => 'required|image',
        'video' => 'required|image'
    ];
}