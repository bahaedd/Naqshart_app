<?php

namespace App\Repositories;

use App\PaletteContent;
use App\Repositories\BaseRepository;
use Illuminate\Http\Request;

/**
 * Class PaletteRepository
 * @package App\Repositories
 * @version June 17, 2020, 4:50 pm UTC
 */

class PaletteContentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'sizing_details',
        'print_material',
        'print_ink',
        'print_finish',
        'frame_material',
        'frame_finish',
        'sizing_details_ar',
        'print_material_ar',
        'print_ink_ar',
        'print_finish_ar',
        'frame_material_ar',
        'frame_finish_ar',
        'shipping',
        'shipping_ar',
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
        return PaletteContent::class;
    }

    public function createPalette(Request $request)
    {
        $input = $request->all();
        return $this->create($input);
    }
    public function updatePalette(Request $request, $id)
    {
        $input = $request->all();
        return $this->update($input, $id);
    }
}