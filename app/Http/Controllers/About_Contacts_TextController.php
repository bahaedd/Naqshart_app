<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAbout_Contacts_TextRequest;
use App\Http\Requests\UpdateAbout_Contacts_TextRequest;
use App\Repositories\About_Contacts_TextRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class About_Contacts_TextController extends AppBaseController
{
    /** @var  About_Contacts_TextRepository */
    private $aboutContactsTextRepository;

    public function __construct(About_Contacts_TextRepository $aboutContactsTextRepo)
    {
        $this->aboutContactsTextRepository = $aboutContactsTextRepo;
    }

    /**
     * Display a listing of the About_Contacts_Text.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $aboutContactsTexts = $this->aboutContactsTextRepository->all();

        return view('about__contacts__texts.index')
            ->with('aboutContactsTexts', $aboutContactsTexts);
    }

    /**
     * Show the form for creating a new About_Contacts_Text.
     *
     * @return Response
     */
    public function create()
    {
        return view('about__contacts__texts.create');
    }

    /**
     * Store a newly created About_Contacts_Text in storage.
     *
     * @param CreateAbout_Contacts_TextRequest $request
     *
     * @return Response
     */
    public function store(CreateAbout_Contacts_TextRequest $request)
    {
        $input = $request->all();

        $aboutContactsText = $this->aboutContactsTextRepository->create($input);

        Flash::success('About  Contacts  Text saved successfully.');

        return redirect(route('aboutContactsTexts.index'));
    }

    /**
     * Display the specified About_Contacts_Text.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $aboutContactsText = $this->aboutContactsTextRepository->find($id);

        if (empty($aboutContactsText)) {
            Flash::error('About  Contacts  Text not found');

            return redirect(route('aboutContactsTexts.index'));
        }

        return view('about__contacts__texts.show')->with('aboutContactsText', $aboutContactsText);
    }

    /**
     * Show the form for editing the specified About_Contacts_Text.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $aboutContactsText = $this->aboutContactsTextRepository->find($id);

        if (empty($aboutContactsText)) {
            Flash::error('About  Contacts  Text not found');

            return redirect(route('aboutContactsTexts.index'));
        }

        return view('about__contacts__texts.edit')->with('aboutContactsText', $aboutContactsText);
    }

    /**
     * Update the specified About_Contacts_Text in storage.
     *
     * @param int $id
     * @param UpdateAbout_Contacts_TextRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateAbout_Contacts_TextRequest $request)
    {
        $aboutContactsText = $this->aboutContactsTextRepository->find($id);

        if (empty($aboutContactsText)) {
            Flash::error('About  Contacts  Text not found');

            return redirect(route('aboutContactsTexts.index'));
        }

        $aboutContactsText = $this->aboutContactsTextRepository->update($request->all(), $id);

        Flash::success('About  Contacts  Text updated successfully.');

        return redirect(route('aboutContactsTexts.index'));
    }

    /**
     * Remove the specified About_Contacts_Text from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $aboutContactsText = $this->aboutContactsTextRepository->find($id);

        if (empty($aboutContactsText)) {
            Flash::error('About  Contacts  Text not found');

            return redirect(route('aboutContactsTexts.index'));
        }

        $this->aboutContactsTextRepository->delete($id);

        Flash::success('About  Contacts  Text deleted successfully.');

        return redirect(route('aboutContactsTexts.index'));
    }
}
