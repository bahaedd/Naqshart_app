<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateArtistRequest;
use App\Http\Requests\UpdateArtistRequest;
use App\Repositories\ArtistRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class ArtistController extends AppBaseController
{
    /** @var  ArtistRepository */
    private $artistRepository;

    public function __construct(ArtistRepository $artistRepo)
    {
        $this->artistRepository = $artistRepo;
    }

    /**
     * Display a listing of the Artist.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $artists = $this->artistRepository->paginate(5);

        return view('artists.index')
            ->with('artists', $artists);
    }

    /**
     * Show the form for creating a new Artist.
     *
     * @return Response
     */
    public function create()
    {
        return view('artists.create');
    }

    /**
     * Store a newly created Artist in storage.
     *
     * @param CreateArtistRequest $request
     *
     * @return Response
     */
    public function store(Request $request)
    {
        // $input = $request->all();
        // $artist = $this->artistRepository->create($input);
        $request->validate([
            'name' => 'required|unique:artists|max:255',
            'cover_img' => 'mimes:jpeg,jpg,png,gif|required|max:10000',
            // 'Plates_description' => 'required',
            // 'artist_img' => 'mimes:jpeg,jpg,png,gif|required|max:10000',

        ]);
        $artist = $this->artistRepository->createArtist($request);
        Flash::success('Artist saved successfully.');

        return redirect(route('artists.index'));
    }

    /**
     * Display the specified Artist.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $artist = $this->artistRepository->find($id);

        if (empty($artist)) {
            Flash::error('Artist not found');

            return redirect(route('artists.index'));
        }

        return view('artists.show')->with('artist', $artist);
    }

    /**
     * Show the form for editing the specified Artist.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $artist = $this->artistRepository->find($id);

        if (empty($artist)) {
            Flash::error('Artist not found');

            return redirect(route('artists.index'));
        }

        return view('artists.edit')->with('artist', $artist);
    }

    /**
     * Update the specified Artist in storage.
     *
     * @param int $id
     * @param UpdateArtistRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateArtistRequest $request)
    {
        $artist = $this->artistRepository->find($id);

        if (empty($artist)) {
            Flash::error('Artist not found');

            return redirect(route('artists.index'));
        }
        // $artist = $this->artistRepository->createArtist($request);

        $artist = $this->artistRepository->updateArtist($request, $id);

        Flash::success('Artist updated successfully.');

        return redirect(route('artists.index'));
    }

    /**
     * Remove the specified Artist from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $artist = $this->artistRepository->find($id);

        if (empty($artist)) {
            Flash::error('Artist not found');

            return redirect(route('artists.index'));
        }

        $this->artistRepository->delete($id);

        Flash::success('Artist deleted successfully.');

        return redirect(route('artists.index'));
    }
}