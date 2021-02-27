<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Discount
 * @package App\Models
 * @version June 22, 2020, 1:15 pm UTC
 *
 * @property string $code
 * @property string $discount_percentage
 */
class Discount extends Model
{
    use SoftDeletes;

    public $table = 'discounts';
    

    protected $dates = ['deleted_at'];



    public $fillable = [
        'code',
        'discount_percentage'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'code' => 'string',
        'discount_percentage' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    
}
