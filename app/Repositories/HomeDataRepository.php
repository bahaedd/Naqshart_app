<?php

namespace App\Repositories;

use App\Models\HomeData;
use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

/**
 * Class HomeDataRepository
 * @package App\Repositories
 * @version July 28, 2020, 10:57 am UTC
 */

class HomeDataRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'word1_en',
        'word1_ar',
        'word2_en',
        'word2_ar',
        // 'word3_en',
        // 'word3_ar',
        'image',
        'video'
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
        return HomeData::class;
    }


    public function createImages(Request $request, $img)
    {
        $file = $img;
        $originalName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();

        $path = 'images/' . uniqid() . '.' . $extension;
        $img = Image::make($file);
        $img->save(public_path($path));
        $input = $request->all();
        $input['image'] = $path;

        return $path;
    }
    public function createVideo(Request $request, $img)
    {
        $file = $img;


        $extension = $file->getClientOriginalExtension();
        $destinationPath = 'videos/';
        $Video = $file->getClientOriginalName();
        $path = uniqid() . '.' . $extension;
        $file->move($destinationPath, $path);
        $input = $request->all();
        $input['video'] = $destinationPath . $path;
        return $destinationPath . $path;
    }
}