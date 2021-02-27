<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAboutContentRequest;
use App\Http\Requests\UpdateAboutContentRequest;
use App\Repositories\AboutContentRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;
use App\Http\Controllers\functions\SaveImageController;


class AboutContentController extends AppBaseController
{
    /** @var  AboutContentRepository */
    private $aboutContentRepository;

    public function __construct(AboutContentRepository $aboutContentRepo)
    {
        $this->aboutContentRepository = $aboutContentRepo;
    }

    /**
     * Display a listing of the AboutContent.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $aboutContents = $this->aboutContentRepository->all();

        return view('about_contents.index')
            ->with('aboutContents', $aboutContents);
    }

    /**
     * Show the form for creating a new AboutContent.
     *
     * @return Response
     */
    public function create()
    {
        return view('about_contents.create');
    }

    /**
     * Store a newly created AboutContent in storage.
     *
     * @param CreateAboutContentRequest $request
     *
     * @return Response
     */
    public function store(CreateAboutContentRequest $request)
    {
        $input = $request->all();
        if ($files = $request->file('body_image'))
        {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request,$files);
                $input['body_image'] = $image;
        }

        $aboutContent = $this->aboutContentRepository->create($input);

        Flash::success('About Content saved successfully.');

        return redirect(route('aboutContents.index'));
    }

    /**
     * Display the specified AboutContent.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $aboutContent = $this->aboutContentRepository->find($id);

        if (empty($aboutContent)) {
            Flash::error('About Content not found');

            return redirect(route('aboutContents.index'));
        }

        return view('about_contents.show')->with('aboutContent', $aboutContent);
    }

    /**
     * Show the form for editing the specified AboutContent.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $aboutContent = $this->aboutContentRepository->find($id);

        if (empty($aboutContent)) {
            Flash::error('About Content not found');

            return redirect(route('aboutContents.index'));
        }

        return view('about_contents.edit')->with('aboutContent', $aboutContent);
    }

    /**
     * Update the specified AboutContent in storage.
     *
     * @param int $id
     * @param UpdateAboutContentRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateAboutContentRequest $request)
    {

        $input =$request->all();
        $aboutContent = $this->aboutContentRepository->find($id);

        if (empty($aboutContent)) {
            Flash::error('About Content not found');

            return redirect(route('aboutContents.index'));
        }
        if ($files = $request->file('body_image'))
        {
            $saveimage = new SaveImageController();
            $image =  $saveimage->createImages($request,$files);
                $input['body_image'] = $image;
        }

        $aboutContent = $this->aboutContentRepository->update($input, $id);

        Flash::success('About Content updated successfully.');

        return redirect(route('aboutContents.index'));
    }

    /**
     * Remove the specified AboutContent from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $aboutContent = $this->aboutContentRepository->find($id);

        if (empty($aboutContent)) {
            Flash::error('About Content not found');

            return redirect(route('aboutContents.index'));
        }

        $this->aboutContentRepository->delete($id);

        Flash::success('About Content deleted successfully.');

        return redirect(route('aboutContents.index'));
    }
}
