<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAbout_ContactRequest;
use App\Http\Requests\UpdateAbout_ContactRequest;
use App\Repositories\About_ContactRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class About_ContactController extends AppBaseController
{
    /** @var  About_ContactRepository */
    private $aboutContactRepository;

    public function __construct(About_ContactRepository $aboutContactRepo)
    {
        $this->aboutContactRepository = $aboutContactRepo;
    }

    /**
     * Display a listing of the About_Contact.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $aboutContacts = $this->aboutContactRepository->all();

        return view('about__contacts.index')
            ->with('aboutContacts', $aboutContacts);
    }

    /**
     * Show the form for creating a new About_Contact.
     *
     * @return Response
     */
    public function create()
    {
        return view('about__contacts.create');
    }

    /**
     * Store a newly created About_Contact in storage.
     *
     * @param CreateAbout_ContactRequest $request
     *
     * @return Response
     */
    public function store(CreateAbout_ContactRequest $request)
    {
        $input = $request->all();

        $aboutContact = $this->aboutContactRepository->create($input);

        Flash::success('About  Contact saved successfully.');

        return redirect(route('aboutContacts.index'));
    }

    /**
     * Display the specified About_Contact.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $aboutContact = $this->aboutContactRepository->find($id);

        if (empty($aboutContact)) {
            Flash::error('About  Contact not found');

            return redirect(route('aboutContacts.index'));
        }

        return view('about__contacts.show')->with('aboutContact', $aboutContact);
    }

    /**
     * Show the form for editing the specified About_Contact.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $aboutContact = $this->aboutContactRepository->find($id);

        if (empty($aboutContact)) {
            Flash::error('About  Contact not found');

            return redirect(route('aboutContacts.index'));
        }

        return view('about__contacts.edit')->with('aboutContact', $aboutContact);
    }

    /**
     * Update the specified About_Contact in storage.
     *
     * @param int $id
     * @param UpdateAbout_ContactRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateAbout_ContactRequest $request)
    {
        $aboutContact = $this->aboutContactRepository->find($id);

        if (empty($aboutContact)) {
            Flash::error('About  Contact not found');

            return redirect(route('aboutContacts.index'));
        }

        $aboutContact = $this->aboutContactRepository->update($request->all(), $id);

        Flash::success('About  Contact updated successfully.');

        return redirect(route('aboutContacts.index'));
    }

    /**
     * Remove the specified About_Contact from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $aboutContact = $this->aboutContactRepository->find($id);

        if (empty($aboutContact)) {
            Flash::error('About  Contact not found');

            return redirect(route('aboutContacts.index'));
        }

        $this->aboutContactRepository->delete($id);

        Flash::success('About  Contact deleted successfully.');

        return redirect(route('aboutContacts.index'));
    }
}
