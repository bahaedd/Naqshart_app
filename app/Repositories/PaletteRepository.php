<?php

namespace App\Repositories;

use App\Models\Palette;
use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

/**
 * Class PaletteRepository
 * @package App\Repositories
 * @version June 17, 2020, 4:50 pm UTC
 */

class PaletteRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'img',
        // 'img2',
        'palette_copies',
        'avalible_copies',
        'S_copies',
        'S_avalible',
        'S_price',
        'M_copies',
        'M_avalible',
        'M_price',
        'L_copies',
        'L_avalible',
        'L_price',
        // 'sizing_details',
        // 'print_material',
        // 'print_ink',
        // 'print_finish',
        // 'frame_material',
        // 'frame_finish',
        'artist_id',
        // 'sizing_details_ar',
        // 'print_material_ar',
        // 'print_ink_ar',
        // 'print_finish_ar',
        // 'frame_material_ar',
        // 'frame_finish_ar',
        'description',
        'description_ar',
        // 'shipping',
        // 'shipping_ar',
        'L_price_sar',
        'M_price_sar',
        'S_price_sar',
        // 'gif1',
        // 'gif2',
        // 'header',
        // 'header_ar',
        // 'content',
        // 'content_ar',
        'mobile_background'
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
        return Palette::class;
    }

    public function createPalette(Request $request)
    {
        // $file = $request->file('img');
        // $originalName = $file->getClientOriginalName();
        // $extension = $file->getClientOriginalExtension();

        // $path = 'images/' . uniqid() . '.' . $extension;
        // $img = Image::make($file);
        // $img->save(public_path($path));

        $input = $request->all();
        $path = 'storage/' . $request->img->store('palettes', 'public');
        $input['img'] = $path;
        // $path = 'storage/' . $request->img2->store('palettes', 'public');
        // $input['img2'] = $path;
        $path = 'storage/' . $request->mobile_background->store('palettes', 'public');
        $input['mobile_background'] = $path;
        // $path = 'storage/' . $request->gif1->store('videos', 'public');
        // $input['gif1'] = $path;
        // $path = 'storage/' . $request->gif2->store('videos', 'public');
        // $input['gif2'] = $path;

        return $this->create($input);
    }
    public function updatePalette(Request $request, $id)
    {
        $input = $request->all();
        // $file = $request->file('img');

        if ($request->has('img')) {
            $path = 'storage/' . $request->img->store('palettes', 'public');
            $input['img'] = $path;
        }
        // if ($request->has('img2')) {
        //     $path = 'storage/' . $request->img2->store('palettes', 'public');
        //     $input['img2'] = $path;
        // }
        if ($request->has('mobile_background')) {
            $path = 'storage/' . $request->mobile_background->store('palettes', 'public');
            $input['mobile_background'] = $path;
        }
        // if ($request->has('gif1')) {
        //     $path = 'storage/' . $request->gif1->store('videos', 'public');
        //     $input['gif1'] = $path;
        // }
        // if ($request->has('gif2')) {
        //     $path = 'storage/' . $request->gif2->store('videos', 'public');
        //     $input['gif2'] = $path;
        // }
        return $this->update($input, $id);
    }
}