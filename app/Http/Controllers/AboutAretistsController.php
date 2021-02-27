<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAboutAretistsRequest;
use App\Http\Requests\UpdateAboutAretistsRequest;
use App\Repositories\AboutAretistsRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;
use App\Http\Controllers\functions\SaveImageController;
class AboutAretistsController extends AppBaseController
{
    /** @var  AboutAretistsRepository */
    private $aboutAretistsRepository;

    public function __construct(AboutAretistsRepository $aboutAretistsRepo)
    {
        $this->aboutAretistsRepository = $aboutAretistsRepo;
    }

    /**
     * Display a listing of the AboutAretists.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)

    {

        $aboutAretists = $this->aboutAretistsRepository->all();

        return view('about_aretists.index')
            ->with('aboutAretists', $aboutAretists);
    }

    /**
     * Show the form for creating a new AboutAretists.
     *
     * @return Response
     */
    public function create()
    {
        return view('about_aretists.create');
    }

    /**
     * Store a newly created AboutAretists in storage.
     *
     * @param CreateAboutAretistsRequest $request
     *
     * @return Response
     */
    public function store(CreateAboutAretistsRequest $request)
    {
        $saveimage = new SaveImageController();
        $input = $request->all();
        $image='';
        if ($files = $request->file('image_ar'))
        {
            $image =  $saveimage->createImages($request,$files);
                $input['image_ar'] = $image;
        }
        $aboutAretists = $this->aboutAretistsRepository->create($input);

        Flash::success('About Aretists saved successfully.');

        return redirect(route('aboutAretists.index'));
    }

    /**
     * Display the specified AboutAretists.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $aboutAretists = $this->aboutAretistsRepository->find($id);

        if (empty($aboutAretists)) {
            Flash::error('About Aretists not found');

            return redirect(route('aboutAretists.index'));
        }

        return view('about_aretists.show')->with('aboutAretists', $aboutAretists);
    }

    /**
     * Show the form for editing the specified AboutAretists.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $aboutAretists = $this->aboutAretistsRepository->find($id);

        if (empty($aboutAretists)) {
            Flash::error('About Aretists not found');

            return redirect(route('aboutAretists.index'));
        }

        return view('about_aretists.edit')->with('aboutAretists', $aboutAretists);
    }

    /**
     * Update the specified AboutAretists in storage.
     *
     * @param int $id
     * @param UpdateAboutAretistsRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateAboutAretistsRequest $request)
    {
        $aboutAretists = $this->aboutAretistsRepository->find($id);
        $input = $request->all();
        if (empty($aboutAretists)) {
            Flash::error('About Aretists not found');

            return redirect(route('aboutAretists.index'));
        }
        $image='';
        if ($files = $request->file('image_ar'))
        {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request,$files);
                $input['image_ar'] = $image;
        }

        $aboutAretists = $this->aboutAretistsRepository->update($input, $id);

        Flash::success('About Aretists updated successfully.');

        return redirect(route('aboutAretists.index'));
    }

    /**
     * Remove the specified AboutAretists from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $aboutAretists = $this->aboutAretistsRepository->find($id);

        if (empty($aboutAretists)) {
            Flash::error('About Aretists not found');

            return redirect(route('aboutAretists.index'));
        }

        $this->aboutAretistsRepository->delete($id);

        Flash::success('About Aretists deleted successfully.');

        return redirect(route('aboutAretists.index'));
    }
}
