<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAppliedartistRequest;
use App\Http\Requests\UpdateAppliedartistRequest;
use App\Repositories\AppliedartistRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class AppliedartistController extends AppBaseController
{
    /** @var  AppliedartistRepository */
    private $appliedartistRepository;

    public function __construct(AppliedartistRepository $appliedartistRepo)
    {
        $this->appliedartistRepository = $appliedartistRepo;
    }

    /**
     * Display a listing of the Appliedartist.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $appliedartists = $this->appliedartistRepository->all();

        return view('appliedartists.index')
            ->with('appliedartists', $appliedartists);
    }

    /**
     * Show the form for creating a new Appliedartist.
     *
     * @return Response
     */
    public function create()
    {
        return view('appliedartists.create');
    }

    /**
     * Store a newly created Appliedartist in storage.
     *
     * @param CreateAppliedartistRequest $request
     *
     * @return Response
     */
    public function store(CreateAppliedartistRequest $request)
    {
        $input = $request->all();

        $appliedartist = $this->appliedartistRepository->create($input);

        Flash::success('Appliedartist saved successfully.');

        return redirect(route('appliedartists.index'));
    }

    /**
     * Display the specified Appliedartist.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $appliedartist = $this->appliedartistRepository->find($id);

        if (empty($appliedartist)) {
            Flash::error('Appliedartist not found');

            return redirect(route('appliedartists.index'));
        }

        return view('appliedartists.show')->with('appliedartist', $appliedartist);
    }

    /**
     * Show the form for editing the specified Appliedartist.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $appliedartist = $this->appliedartistRepository->find($id);

        if (empty($appliedartist)) {
            Flash::error('Appliedartist not found');

            return redirect(route('appliedartists.index'));
        }

        return view('appliedartists.edit')->with('appliedartist', $appliedartist);
    }

    /**
     * Update the specified Appliedartist in storage.
     *
     * @param int $id
     * @param UpdateAppliedartistRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateAppliedartistRequest $request)
    {
        $appliedartist = $this->appliedartistRepository->find($id);

        if (empty($appliedartist)) {
            Flash::error('Appliedartist not found');

            return redirect(route('appliedartists.index'));
        }

        $appliedartist = $this->appliedartistRepository->update($request->all(), $id);

        Flash::success('Appliedartist updated successfully.');

        return redirect(route('appliedartists.index'));
    }

    /**
     * Remove the specified Appliedartist from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $appliedartist = $this->appliedartistRepository->find($id);

        if (empty($appliedartist)) {
            Flash::error('Appliedartist not found');

            return redirect(route('appliedartists.index'));
        }

        $this->appliedartistRepository->delete($id);

        Flash::success('Appliedartist deleted successfully.');

        return redirect(route('appliedartists.index'));
    }
}
