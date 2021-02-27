<?php

namespace App\Http\Controllers;

use App\Http\Controllers\functions\SaveImageController;
use App\Http\Requests\CreatePaletteGifRequest;
use App\Http\Requests\UpdatepaletteGifRequest;
use App\PaletteGif;
use App\Repositories\PaletteGifRepository;
use Illuminate\Http\Request;
use Laracasts\Flash\Flash;

class PaletteGifController extends Controller
{
    /** @var  PaletteGifRepository */
    private $paletteGifRepository;

    public function __construct(PaletteGifRepository $paletteGifRepo)
    {
        $this->paletteGifRepository = $paletteGifRepo;
    }

    /**
     * Display a listing of the paletteGif.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $paletteGifs = $this->paletteGifRepository->all();
        // dd($paletteGifs->first());
        return view('palette_gif.index')
            ->with('paletteGifs', $paletteGifs);
    }

    /**
     * Show the form for creating a new paletteGif.
     *
     * @return Response
     */
    public function create()
    {
        return view('palette_gif.create');
    }

    /**
     * Store a newly created paletteGif in storage.
     *
     * @param CreatepaletteGifRequest $request
     *
     * @return Response
     */
    public function store(CreatePaletteGifRequest $request)
    {
        $input = $request->all();
        if ($files = $request->file('gif1')) {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request, $files);
            $input['gif1'] = $image;
        }
        if ($files = $request->file('gif2')) {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request, $files);
            $input['gif2'] = $image;
        }

        $paletteGif = $this->paletteGifRepository->create($input);

        Flash::success('Palette Gif saved successfully.');

        return redirect(route('paletteGif.index'));
    }

    /**
     * Display the specified paletteGif.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $paletteGif = $this->paletteGifRepository->find($id);

        if (empty($paletteGif)) {
            Flash::error('Palette Gif not found');

            return redirect(route('paletteGif.index'));
        }

        return view('palette_gif.show')->with('paletteGif', $paletteGif);
    }

    /**
     * Show the form for editing the specified paletteGif.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $paletteGif = $this->paletteGifRepository->find($id);

        if (empty($paletteGif)) {
            Flash::error('Palette Gif not found');

            return redirect(route('paletteGif.index'));
        }

        return view('palette_gif.edit')->with('paletteGif', $paletteGif);
    }

    /**
     * Update the specified paletteGif in storage.
     *
     * @param int $id
     * @param UpdatepaletteGifRequest $request
     *
     * @return Response
     */
    public function update($id, UpdatepaletteGifRequest $request)
    {

        $input = $request->all();
        $paletteGif = $this->paletteGifRepository->find($id);

        if (empty($paletteGif)) {
            Flash::error('Palette Gif not found');

            return redirect(route('paletteGif.index'));
        }
        if ($files = $request->file('gif1')) {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request, $files);
            $input['gif1'] = $image;
        }
        if ($files = $request->file('gif2')) {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request, $files);
            $input['gif2'] = $image;
        }


        $paletteGif = $this->paletteGifRepository->update($input, $id);

        Flash::success('Palette Gif updated successfully.');

        return redirect(route('paletteGif.index'));
    }
    public function destroy($id)
    {
        $palettegif = $this->paletteGifRepository->find($id);
        // dd();
        if (empty($palettegif)) {
            Flash::error('Palettegif not found');

            return redirect(route('paletteimages.index'));
        }

        $this->paletteGifRepository->delete($id);

        Flash::success('Palettegif deleted successfully.');

        // return redirect(route('palettes.index'));
        return redirect(route('paletteGif.index'));
    }
}