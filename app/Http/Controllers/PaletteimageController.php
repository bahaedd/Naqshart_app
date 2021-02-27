<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePaletteimageRequest;
use App\Http\Requests\UpdatePaletteimageRequest;
use App\Repositories\PaletteimageRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;
use App\Models\Paletteimage;
use Illuminate\Support\Facades\DB;

class PaletteimageController extends AppBaseController
{
    /** @var  PaletteimageRepository */
    private $paletteimageRepository;

    public function __construct(PaletteimageRepository $paletteimageRepo)
    {
        $this->paletteimageRepository = $paletteimageRepo;
    }

    /**
     * Display a listing of the Paletteimage.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $paletteimages = $this->paletteimageRepository->all();

        return view('paletteimages.index')
            ->with('paletteimages', $paletteimages);
    }

    /**
     * Show the form for creating a new Paletteimage.
     *
     * @return Response
     */
    public function create($palette=null)
    {
        // dd($palette);
        return view('paletteimages.create',["palette"=>$palette]);
    }

    /**
     * Store a newly created Paletteimage in storage.
     *
     * @param CreatePaletteimageRequest $request
     *
     * @return Response
     */
    public function store(CreatePaletteimageRequest $request)
    {
        // $request->validate([
        //     'img	' => 'mimes:jpeg,jpg,png,gif|required|max:10000',
        // ]);
        $input = $request->all();
        request()->validate([
            'img.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if ($files = $request->file('img')) {
            // Define upload path
            foreach ($files as $img) {
                $paletteimage = $this->paletteimageRepository->createPalatteImages($request, $img);
            }
        }
        // dd($request->palatte_id);
        // return redirect(route('palettes.index'));
        return redirect('/paletteimages/'.$request->palatte_id);

    }

    /**
     * Display the specified Paletteimage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        // $paletteimages = $this->paletteimageRepository->find($id);
        $paletteimages=  DB::table('paletteimages')->where('palatte_id',$id)->get();
        $paletteimages=Paletteimage::all()->where('palatte_id',$id);
        // dd($paletteimages);

        if (empty($paletteimages)) {
            Flash::error('Paletteimage not found');

            return redirect(route('paletteimages.index'));
        }

        return view('paletteimages.show',['paletteimages'=>$paletteimages,'id'=>$id]);
    }

    /**
     * Show the form for editing the specified Paletteimage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        
        $paletteimage = $this->paletteimageRepository->find($id);

        if (empty($paletteimage)) {
            Flash::error('Paletteimage not found');

            return redirect(route('paletteimages.index'));
        }

        // return view('paletteimages.edit')->with('paletteimage', $paletteimage);
        // dd($paletteimage->palette_id);
        return view('paletteimages.edit',['paletteimage'=>$paletteimage,"palette"=>$paletteimage->palette_id]);
    }

    /**
     * Update the specified Paletteimage in storage.
     *
     * @param int $id
     * @param UpdatePaletteimageRequest $request
     *
     * @return Response
     */
    public function update($id, UpdatePaletteimageRequest $request)
    {
        $paletteimage = $this->paletteimageRepository->find($id);

        if (empty($paletteimage)) {
            Flash::error('Paletteimage not found');

            return redirect(route('paletteimages.index'));
        }

        $paletteimage = $this->paletteimageRepository->update($request->all(), $id);

        Flash::success('Paletteimage updated successfully.');

        return redirect(route('paletteimages.index'));
    }

    /**
     * Remove the specified Paletteimage from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $paletteimage = $this->paletteimageRepository->find($id);
        // dd();
        if (empty($paletteimage)) {
            Flash::error('Paletteimage not found');

            return redirect(route('paletteimages.index'));
        }

        $this->paletteimageRepository->delete($id);

        Flash::success('Paletteimage deleted successfully.');

        // return redirect(route('palettes.index'));
        return redirect('/paletteimages/'.$paletteimage->palatte_id);

    }
}
