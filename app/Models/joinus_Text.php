<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class joinus_Text
 * @package App\Models
 * @version August 9, 2020, 11:20 pm UTC
 *
 * @property string $text_en
 * @property string $text_ar
 */
class joinus_Text extends Model
{
    use SoftDeletes;

    public $table = 'joinus__texts';
    

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
