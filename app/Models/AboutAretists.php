<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class AboutAretists
 * @package App\Models
 * @version July 31, 2020, 10:47 am UTC
 *
 * @property string $name_en
 * @property string $name_ar
 * @property string $image_ar
 */
class AboutAretists extends Model
{
    use SoftDeletes;

    public $table = 'about_aretists';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'name_en',
        'name_ar',
        'image_ar',
        'sociallink'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name_en' => 'string',
        'name_ar' => 'string',
        'image_ar' => 'string',
        'sociallink' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name_en' => 'required|string|max:255',
        'name_ar' => 'required|string|max:255',
        'image_ar' => 'required|image',
        'sociallink' => 'required'
    ];
}