<?php

namespace App\Http\Controllers;

use App\Http\Controllers\functions\SaveImageController;
use App\Http\Requests\CreateHomeGifRequest;
use App\Http\Requests\UpdateHomeGifRequest;
use App\HomeGif;
use App\Repositories\HomeGifRepository;
use Illuminate\Http\Request;
use Laracasts\Flash\Flash;

class HomeGifController extends Controller
{
    /** @var  HomeGifRepository */
    private $homeGifRepository;

    public function __construct(HomeGifRepository $homeGifRepo)
    {
        $this->homeGifRepository = $homeGifRepo;
    }

    /**
     * Display a listing of the homeGif.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $homeGifs = $this->homeGifRepository->all();
        // dd($homeGifs->first());
        return view('home_gif.index')
            ->with('homeGifs', $homeGifs);
    }

    /**
     * Show the form for creating a new homeGif.
     *
     * @return Response
     */
    public function create()
    {
        return view('home_gif.create');
    }

    /**
     * Store a newly created homeGif in storage.
     *
     * @param CreatehomeGifRequest $request
     *
     * @return Response
     */
    public function store(CreateHomeGifRequest $request)
    {
        $input = $request->all();
        if ($files = $request->file('gif1')) {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request, $files);
            $input['gif1'] = $image;
        }
        // if ($files = $request->file('gif2')) {
        //     $saveimage = new SaveImageController();
        //     $image =  $saveimage->createImages($request, $files);
        //     $input['gif2'] = $image;
        // }

        $homeGif = $this->homeGifRepository->create($input);

        Flash::success('Home Gif saved successfully.');

        return redirect(route('homeGif.index'));
    }

    /**
     * Display the specified homeGif.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $homeGif = $this->homeGifRepository->find($id);

        if (empty($homeGif)) {
            Flash::error('Home Gif not found');

            return redirect(route('homeGif.index'));
        }

        return view('home_gif.show')->with('homeGif', $homeGif);
    }

    /**
     * Show the form for editing the specified homeGif.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $homeGif = $this->homeGifRepository->find($id);

        if (empty($homeGif)) {
            Flash::error('Home Gif not found');

            return redirect(route('homeGif.index'));
        }

        return view('home_gif.edit')->with('homeGif', $homeGif);
    }

    /**
     * Update the specified homeGif in storage.
     *
     * @param int $id
     * @param UpdatehomeGifRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateHomeGifRequest $request)
    {

        $input = $request->all();
        $homeGif = $this->homeGifRepository->find($id);

        if (empty($homeGif)) {
            Flash::error('Home Gif not found');

            return redirect(route('homeGif.index'));
        }
        if ($files = $request->file('gif1')) {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request, $files);
            $input['gif1'] = $image;
        }
        // if ($files = $request->file('gif2')) {
        //     $saveimage = new SaveImageController();
        //     $image =  $saveimage->createImages($request, $files);
        //     $input['gif2'] = $image;
        // }


        $homeGif = $this->homeGifRepository->update($input, $id);

        Flash::success('Home Gif updated successfully.');

        return redirect(route('homeGif.index'));
    }
    public function destroy($id)
    {
        $homegif = $this->homeGifRepository->find($id);
        // dd();
        if (empty($homegif)) {
            Flash::error('Homegif not found');

            return redirect(route('homeimages.index'));
        }

        $this->homeGifRepository->delete($id);

        Flash::success('Homegif deleted successfully.');

        // return redirect(route('homes.index'));
        return redirect(route('homeGif.index'));
    }
}