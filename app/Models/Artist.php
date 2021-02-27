<?php

namespace App\Models;

use Eloquent as Model;

/**
 * Class Artist
 * @package App\Models
 * @version June 17, 2020, 4:00 am UTC
 *
 * @property string $name
 * @property string $email
 * @property string $artist_img
 * @property string $cover_img
 */
class Artist extends Model
{

    public $table = 'artists';





    public $fillable = [
        'name',
        // 'Plates_description',
        // 'email',
        // 'artist_img',
        'cover_img'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        // 'Plates_description' => 'string',
        // 'email' => 'string',
        // 'artist_img' => 'string',
        'cover_img' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required'
    ];
    public function palettes()
    {
        return $this->hasMany('App\Models\Palette');
    }
}