<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateHomeDataRequest;
use App\Http\Requests\UpdateHomeDataRequest;
use App\Repositories\HomeDataRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class HomeDataController extends AppBaseController
{
    /** @var  HomeDataRepository */
    private $homeDataRepository;

    public function __construct(HomeDataRepository $homeDataRepo)
    {
        $this->homeDataRepository = $homeDataRepo;
    }

    /**
     * Display a listing of the HomeData.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $homeDatas = $this->homeDataRepository->all();

        return view('home_datas.index')
            ->with('homeDatas', $homeDatas);
    }

    /**
     * Show the form for creating a new HomeData.
     *
     * @return Response
     */
    public function create()
    {
        return view('home_datas.create');
    }

    /**
     * Store a newly created HomeData in storage.
     *
     * @param CreateHomeDataRequest $request
     *
     * @return Response
     */
    public function store(CreateHomeDataRequest $request)
    {
        $input = $request->all();
        $image='';
        $video='';
        if ($files = $request->file('image'))
        {
                $image = $this->homeDataRepository->createImages($request, $files);
        }
        if ($files = $request->file('video'))
        {
              $video=  $this->homeDataRepository->createVideo($request, $files);
        }

        // dd($image,$video);
        $input['image'] = $image;
        $input['video'] = $video;

        $homeData = $this->homeDataRepository->create($input);

        Flash::success('Home Data saved successfully.');

        return redirect(route('homeDatas.index'));
    }

    /**
     * Display the specified HomeData.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $homeData = $this->homeDataRepository->find($id);

        if (empty($homeData)) {
            Flash::error('Home Data not found');

            return redirect(route('homeDatas.index'));
        }

        return view('home_datas.show')->with('homeData', $homeData);
    }

    /**
     * Show the form for editing the specified HomeData.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $homeData = $this->homeDataRepository->find($id);

        if (empty($homeData)) {
            Flash::error('Home Data not found');

            return redirect(route('homeDatas.index'));
        }

        return view('home_datas.edit')->with('homeData', $homeData);
    }

    /**
     * Update the specified HomeData in storage.
     *
     * @param int $id
     * @param UpdateHomeDataRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateHomeDataRequest $request)
    {
        $homeData = $this->homeDataRepository->find($id);

        if (empty($homeData)) {
            Flash::error('Home Data not found');

            return redirect(route('homeDatas.index'));
        }
        $input=$request->all();
        $image='';
        $video='';
        if ($files = $request->file('image'))
        {
                $image = $this->homeDataRepository->createImages($request, $files);
                $input['image'] = $image;

        }
        if ($files = $request->file('video'))
        {
              $video=  $this->homeDataRepository->createVideo($request, $files);
              $input['video'] = $video;

        }

        // dd($image,$video);

        $homeData = $this->homeDataRepository->update($input, $id);

        Flash::success('Home Data updated successfully.');

        return redirect(route('homeDatas.index'));
    }

    /**
     * Remove the specified HomeData from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $homeData = $this->homeDataRepository->find($id);

        if (empty($homeData)) {
            Flash::error('Home Data not found');

            return redirect(route('homeDatas.index'));
        }

        $this->homeDataRepository->delete($id);

        Flash::success('Home Data deleted successfully.');

        return redirect(route('homeDatas.index'));
    }
}
