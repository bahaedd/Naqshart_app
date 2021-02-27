<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Appliedartist
 * @package App\Models
 * @version June 17, 2020, 4:56 am UTC
 *
 * @property string $name
 * @property string $email
 * @property string $phone
 */
class Appliedartist extends Model
{
    use SoftDeletes;

    public $table = 'appliedartists';
    

    protected $dates = ['deleted_at'];



    public $fillable = [
        'name',
        'email',
        'phone',
        'socialLink',
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
        'socialLink' =>'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
