<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class About_Contacts_Text
 * @package App\Models
 * @version August 7, 2020, 11:54 am UTC
 *
 * @property string $text_en
 * @property string $text_ar
 */
class About_Contacts_Text extends Model
{
    use SoftDeletes;

    public $table = 'about__contacts__texts';
    

    protected $dates = ['deleted_at'];



    public $fillable = [
        'text_en',
        'text_ar'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'text_en' => 'string',
        'text_ar' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'text_en' => 'required',
        'text_ar' => 'required'
    ];

    
}
