<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class AboutContent
 * @package App\Models
 * @version July 31, 2020, 10:44 am UTC
 *
 * @property string $body1_en
 * @property string $body1_ar
 * @property string $body_image
 * @property string $body2_en
 * @property string $body2_ar
 */
class AboutContent extends Model
{
    use SoftDeletes;

    public $table = 'about_contents';

    protected $dates = ['deleted_at'];

    public $fillable = [
        'body1_en',
        'body1_ar',
        'body_image',
        'body2_en',
        'body2_ar'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'body1_en' => 'string',
        'body1_ar' => 'string',
        'body_image' => 'string',
        'body2_en' => 'string',
        'body2_ar' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        // 'body1_en' => 'required|min:200|string',
        'body1_en' => 'required|string',
        // 'body1_ar' => 'required|min:200|string',
        'body1_ar' => 'required|string',
        'body_image' => 'image',
        // 'body2_en' => 'required|min:100|string',
        'body2_en' => 'required|string',
        // 'body2_ar' => 'required|min:100|string'
        'body2_ar' => 'required|string'
    ];
}