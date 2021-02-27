<?php

namespace App\Repositories;

use App\Models\Paletteimage;
use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

/**
 * Class PaletteimageRepository
 * @package App\Repositories
 * @version June 21, 2020, 1:05 pm UTC
 */

class PaletteimageRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'img',
        'palatte_id'
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Paletteimage::class;
    }
    public function createPalatteImages(Request $request, $img)
    {
        // $file = $request->file('img')[0];
        $input = $request->all();
        $path = 'storage/' . $img->store('palettes', 'public');
        $input['img'] = $path;

        return $this->create($input);
    }
}