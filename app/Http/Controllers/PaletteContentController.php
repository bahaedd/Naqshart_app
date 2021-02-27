<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePaletteContentRequest;
use App\Http\Requests\UpdatepaletteContentRequest;
use App\PaletteContent;
use App\Repositories\PaletteContentRepository;
use Illuminate\Http\Request;
use Laracasts\Flash\Flash;

class PaletteContentController extends Controller
{
    /** @var  PaletteContentRepository */
    private $paletteContentRepository;

    public function __construct(PaletteContentRepository $paletteContentRepo)
    {
        $this->paletteContentRepository = $paletteContentRepo;
    }

    /**
     * Display a listing of the paletteContent.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $paletteContents = $this->paletteContentRepository->all();
        // dd($paletteContents->first());
        return view('palette_content.index')
            ->with('paletteContents', $paletteContents);
    }

    /**
     * Show the form for creating a new paletteContent.
     *
     * @return Response
     */
    public function create()
    {
        return view('palette_content.create');
    }

    /**
     * Store a newly created paletteContent in storage.
     *
     * @param CreatepaletteContentRequest $request
     *
     * @return Response
     */
    public function store(CreatePaletteContentRequest $request)
    {
        $input = $request->all();

        $paletteContent = $this->paletteContentRepository->create($input);

        Flash::success('Palette Content saved successfully.');

        return redirect(route('paletteContent.index'));
    }

    /**
     * Display the specified paletteContent.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $paletteContent = $this->paletteContentRepository->find($id);

        if (empty($paletteContent)) {
            Flash::error('Palette Content not found');

            return redirect(route('paletteContent.index'));
        }

        return view('palette_content.show')->with('paletteContent', $paletteContent);
    }

    /**
     * Show the form for editing the specified paletteContent.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $paletteContent = $this->paletteContentRepository->find($id);

        if (empty($paletteContent)) {
            Flash::error('Palette Content not found');

            return redirect(route('paletteContent.index'));
        }

        return view('palette_content.edit')->with('paletteContent', $paletteContent);
    }

    /**
     * Update the specified paletteContent in storage.
     *
     * @param int $id
     * @param UpdatepaletteContentRequest $request
     *
     * @return Response
     */
    public function update($id, UpdatepaletteContentRequest $request)
    {

        $input = $request->all();
        $paletteContent = $this->paletteContentRepository->find($id);

        if (empty($paletteContent)) {
            Flash::error('Palette Content not found');

            return redirect(route('paletteContent.index'));
        }
        $paletteContent = $this->paletteContentRepository->update($input, $id);

        Flash::success('Palette Content updated successfully.');

        return redirect(route('paletteContent.index'));
    }
    public function destroy($id)
    {
        $palettecontent = $this->paletteContentRepository->find($id);
        // dd();
        if (empty($palettecontent)) {
            Flash::error('Palettecontent not found');

            return redirect(route('paletteimages.index'));
        }

        $this->paletteContentRepository->delete($id);

        Flash::success('Palettecontent deleted successfully.');

        // return redirect(route('palettes.index'));
        return redirect(route('paletteContent.index'));
    }
}