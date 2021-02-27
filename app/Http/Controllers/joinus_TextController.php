<?php

namespace App\Http\Controllers;

use App\Http\Requests\Createjoinus_TextRequest;
use App\Http\Requests\Updatejoinus_TextRequest;
use App\Repositories\joinus_TextRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class joinus_TextController extends AppBaseController
{
    /** @var  joinus_TextRepository */
    private $joinusTextRepository;

    public function __construct(joinus_TextRepository $joinusTextRepo)
    {
        $this->joinusTextRepository = $joinusTextRepo;
    }

    /**
     * Display a listing of the joinus_Text.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $joinusTexts = $this->joinusTextRepository->all();

        return view('joinus__texts.index')
            ->with('joinusTexts', $joinusTexts);
    }

    /**
     * Show the form for creating a new joinus_Text.
     *
     * @return Response
     */
    public function create()
    {
        return view('joinus__texts.create');
    }

    /**
     * Store a newly created joinus_Text in storage.
     *
     * @param Createjoinus_TextRequest $request
     *
     * @return Response
     */
    public function store(Createjoinus_TextRequest $request)
    {
        $input = $request->all();

        $joinusText = $this->joinusTextRepository->create($input);

        Flash::success('Joinus  Text saved successfully.');

        return redirect(route('joinusTexts.index'));
    }

    /**
     * Display the specified joinus_Text.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $joinusText = $this->joinusTextRepository->find($id);

        if (empty($joinusText)) {
            Flash::error('Joinus  Text not found');

            return redirect(route('joinusTexts.index'));
        }

        return view('joinus__texts.show')->with('joinusText', $joinusText);
    }

    /**
     * Show the form for editing the specified joinus_Text.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $joinusText = $this->joinusTextRepository->find($id);

        if (empty($joinusText)) {
            Flash::error('Joinus  Text not found');

            return redirect(route('joinusTexts.index'));
        }

        return view('joinus__texts.edit')->with('joinusText', $joinusText);
    }

    /**
     * Update the specified joinus_Text in storage.
     *
     * @param int $id
     * @param Updatejoinus_TextRequest $request
     *
     * @return Response
     */
    public function update($id, Updatejoinus_TextRequest $request)
    {
        $joinusText = $this->joinusTextRepository->find($id);

        if (empty($joinusText)) {
            Flash::error('Joinus  Text not found');

            return redirect(route('joinusTexts.index'));
        }

        $joinusText = $this->joinusTextRepository->update($request->all(), $id);

        Flash::success('Joinus  Text updated successfully.');

        return redirect(route('joinusTexts.index'));
    }

    /**
     * Remove the specified joinus_Text from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $joinusText = $this->joinusTextRepository->find($id);

        if (empty($joinusText)) {
            Flash::error('Joinus  Text not found');

            return redirect(route('joinusTexts.index'));
        }

        $this->joinusTextRepository->delete($id);

        Flash::success('Joinus  Text deleted successfully.');

        return redirect(route('joinusTexts.index'));
    }
}
