<?php

namespace App\Repositories;

use App\Models\Artist;
use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

/**
 * Class ArtistRepository
 * @package App\Repositories
 * @version June 17, 2020, 4:00 am UTC
 */

class ArtistRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        // 'Plates_description',
        // 'email',
        // 'artist_img',
        'cover_img'
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
        return Artist::class;
    }

    public function createArtist(Request $request)
    {
        // dd($request);
        // $file = $request->file('artist_img');
        // $originalName = $file->getClientOriginalName();
        // $extension = $file->getClientOriginalExtension();
        // $path = 'images/' . uniqid() . '.' . $extension;
        // $img = Image::make($file);
        // $img->save(public_path($path));


        $file2 = $request->file('cover_img');
        $originalName = $file2->getClientOriginalName();
        $extension2 = $file2->getClientOriginalExtension();
        $path2 = 'images/' . uniqid() . '.' . $extension2;
        $img2 = Image::make($file2);
        $img2->save(public_path($path2));


        $input = $request->all();
        // $input['artist_img'] = $path;
        $input['cover_img'] = $path2;

        return $this->create($input);
    }
    public function updateArtist(Request $request, $id)
    {
        // dd($request->all());
        $input = $request->all();

        // $file = $request->file('artist_img');
        // if ($file) {
        //     $originalName = $file->getClientOriginalName();
        //     $extension = $file->getClientOriginalExtension();
        //     $path = 'images/' . uniqid() . '.' . $extension;
        //     $img = Image::make($file);
        //     $img->save(public_path($path));
        //     $input['artist_img'] = $path;

        // }

        $file2 = $request->file('cover_img');
        if ($file2) {
            $originalName = $file2->getClientOriginalName();
            $extension2 = $file2->getClientOriginalExtension();
            $path2 = 'images/' . uniqid() . '.' . $extension2;
            $img2 = Image::make($file2);
            $img2->save(public_path($path2));
            $input['cover_img'] = $path2;
        }


        return $this->update($input, $id);
    }
}