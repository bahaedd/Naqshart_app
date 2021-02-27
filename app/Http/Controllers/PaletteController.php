<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePaletteRequest;
use App\Http\Requests\UpdatePaletteRequest;
use App\Repositories\PaletteRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;

use Flash;
use Response;

class PaletteController extends AppBaseController
{
    /** @var  PaletteRepository */
    private $paletteRepository;

    public function __construct(PaletteRepository $paletteRepo)
    {
        $this->paletteRepository = $paletteRepo;
    }

    /**
     * Display a listing of the Palette.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $palettes = $this->paletteRepository->paginate(6);

        return view('palettes.index')
            ->with('palettes', $palettes);
    }


    /**
     * Show the form for creating a new Palette.
     *
     * @return Response
     */
    public function create()
    {
        return view('palettes.create');
    }

    /**
     * Store a newly created Palette in storage.
     *
     * @param CreatePaletteRequest $request
     *
     * @return Response
     */
    public function store(CreatePaletteRequest $request)
    {
        // name	img	palette_copies	avalible_copies	S_copies	S_avalible
        //     S_price	M_copies	M_avalible	M_price	L_copies	L_avalible
        //     	L_price	sizing_details	print_material
        // print_ink	print_finish	frame_material	frame_finish	artist_id
        $request->validate([
            'name' => 'required',
            'palette_copies' => 'required',
            'avalible_copies' => 'required',
            'S_copies' => 'required',
            'S_avalible' => 'required',
            'S_price' => 'required',
            'S_price_sar' => 'required',
            'M_copies' => 'required',
            'M_avalible' => 'required',
            'M_price' => 'required',
            'M_price_sar' => 'required',
            'L_copies' => 'required',
            'L_avalible' => 'required',
            'L_price' => 'required',
            'L_price_sar' => 'required',
            'artist_id' => 'required',
            'img' => 'mimes:jpeg,jpg,png,gif|required|max:10000',
            // 'img2' => 'mimes:jpeg,jpg,png,gif|required|max:10000',
            'mobile_background' => 'mimes:jpeg,jpg,png,gif|required|max:10000',
            // 'gif1' => 'mimes:webm,mp4,mpeg|required|max:10000',
            // 'gif2' => 'mimes:webm,mp4,mpeg|required|max:10000',
            // 'content' => 'required',
            // 'header' => 'required',
            // 'content_ar' => 'required',
            // 'header_ar' => 'required',
            'tag' => 'required'
        ]);
        // $input = $request->all();

        $palette = $this->paletteRepository->createPalette($request);

        Flash::success('Palette saved successfully.');

        return redirect(route('palettes.index'));
    }

    /**
     * Display the specified Palette.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $palette = $this->paletteRepository->find($id);

        if (empty($palette)) {
            Flash::error('Palette not found');

            return redirect(route('palettes.index'));
        }

        return view('palettes.show')->with('palette', $palette);
    }

    /**
     * Show the form for editing the specified Palette.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $palette = $this->paletteRepository->find($id);

        if (empty($palette)) {
            Flash::error('Palette not found');

            return redirect(route('palettes.index'));
        }

        return view('palettes.edit')->with('palette', $palette);
    }

    /**
     * Update the specified Palette in storage.
     *
     * @param int $id
     * @param UpdatePaletteRequest $request
     *
     * @return Response
     */
    public function update($id, UpdatePaletteRequest $request)
    {
        $palette = $this->paletteRepository->find($id);

        if (empty($palette)) {
            Flash::error('Palette not found');

            return redirect(route('palettes.index'));
        }

        $palette = $this->paletteRepository->updatePalette($request, $id);

        Flash::success('Palette updated successfully.');

        return redirect(route('palettes.index'));
    }

    /**
     * Remove the specified Palette from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $palette = $this->paletteRepository->find($id);

        if (empty($palette)) {
            Flash::error('Palette not found');

            return redirect(route('palettes.index'));
        }

        $this->paletteRepository->delete($id);

        Flash::success('Palette deleted successfully.');

        return redirect(route('palettes.index'));
    }
    public function images($id)
    {
        $paletteimage = $this->paletteimageRepository->find($id);
        // $paletteimage=  DB::table('paletteimages')->where('palatte_id',$id)->get();
        // dd($paletteimage);

        if (empty($paletteimage)) {
            Flash::error('Paletteimage not found');

            return redirect(route('paletteimages.index'));
        }

        return view('paletteimages.show')->with('paletteimage', $paletteimage);
    }
}