<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class AboutContent
 * @package App\Models
 * @version July 31, 2020, 10:44 am UTC
 *
 * @property string $gif1
 * @property string $gif2
 */
class PaletteGif extends Model
{
    use SoftDeletes;

    public $table = 'palette_gifs';

    protected $dates = ['deleted_at'];

    public $fillable = [
        'gif1',
        'gif2',
        // 'header_ar_gif2',
        // 'header_gif2',
        // 'content_ar_gif2',
        // 'content_gif2',
        'header_ar_gif1',
        'header_gif1',
        'content_ar_gif1',
        'content_gif1',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'gif1' => 'string',
        'gif2' => 'string',
        // 'header_gif2' => 'string',
        // 'header_ar_gif2' => 'string',
        // 'content_gif2' => 'string',
        // 'content_ar_gif2' => 'string',
        'header_gif1' => 'string',
        'header_ar_gif1' => 'string',
        'content_gif1' => 'string',
        'content_ar_gif1' => 'string',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [

        'gif1' => 'required|file',
        'gif2' => 'required|file',
        // 'content_gif2' => 'required',
        // 'header_gif2' => 'required',
        // 'content_ar_gif2' => 'required',
        // 'header_ar_gif2' => 'required',
        'content_gif1' => 'required',
        'header_gif1' => 'required',
        'content_ar_gif1' => 'required',
        'header_ar_gif1' => 'required',

    ];
}