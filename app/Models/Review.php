<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Review
 * @package App\Models
 * @version June 17, 2020, 5:32 am UTC
 *
 * @property string $name
 * @property string $email
 * @property string $title
 * @property string $body
 * @property integer $rate
 * @property integer $like_counter
 * @property integer $dislike_counter
 */
class Review extends Model
{
    use SoftDeletes;

    public $table = 'reviews';
    

    protected $dates = ['deleted_at'];



    public $fillable = [
        'name',
        'email',
        'title',
        'body',
        'rate',
        'like_counter',
        'dislike_counter'
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
        'title' => 'string',
        'body' => 'string',
        'rate' => 'integer',
        'like_counter' => 'integer',
        'dislike_counter' => 'integer',
        'created_at'  => 'date:Y/m/d',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        // 'email' => 'unique'
    ];

    
}
