<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class About_Contact
 * @package App\Models
 * @version August 4, 2020, 10:00 pm UTC
 *
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string $message
 */
class About_Contact extends Model
{
    use SoftDeletes;

    public $table = 'about__contacts';
    

    protected $dates = ['deleted_at'];



    public $fillable = [
        'name',
        'email',
        'phone',
        'message'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'email' => 'string',
        'phone' => 'string',
        'message' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required|string',
        'email' => 'required',
        'phone' => 'required|numeric',
        'message' => 'required|string'
    ];

    
}
