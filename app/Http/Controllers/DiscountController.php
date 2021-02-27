<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateDiscountRequest;
use App\Http\Requests\UpdateDiscountRequest;
use App\Repositories\DiscountRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Response;

class DiscountController extends AppBaseController
{
    /** @var  DiscountRepository */
    private $discountRepository;

    public function __construct(DiscountRepository $discountRepo)
    {
        $this->discountRepository = $discountRepo;
    }

    /**
     * Display a listing of the Discount.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $discounts = $this->discountRepository->all();

        return view('discounts.index')
            ->with('discounts', $discounts);
    }

    /**
     * Show the form for creating a new Discount.
     *
     * @return Response
     */
    public function create()
    {
        return view('discounts.create');
    }

    /**
     * Store a newly created Discount in storage.
     *
     * @param CreateDiscountRequest $request
     *
     * @return Response
     */
    public function store(CreateDiscountRequest $request)
    {
         $request->validate([
            'code' => 'required|unique:discounts|max:255',
            'discount_percentage' => 'required',
        ]);
        $input = $request->all();

        $discount = $this->discountRepository->create($input);

        Flash::success('Discount saved successfully.');

        return redirect(route('discounts.index'));
    }

    /**
     * Display the specified Discount.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $discount = $this->discountRepository->find($id);

        if (empty($discount)) {
            Flash::error('Discount not found');

            return redirect(route('discounts.index'));
        }

        return view('discounts.show')->with('discount', $discount);
    }

    /**
     * Show the form for editing the specified Discount.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $discount = $this->discountRepository->find($id);

        if (empty($discount)) {
            Flash::error('Discount not found');

            return redirect(route('discounts.index'));
        }

        return view('discounts.edit')->with('discount', $discount);
    }

    /**
     * Update the specified Discount in storage.
     *
     * @param int $id
     * @param UpdateDiscountRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateDiscountRequest $request)
    {
        $discount = $this->discountRepository->find($id);

        if (empty($discount)) {
            Flash::error('Discount not found');

            return redirect(route('discounts.index'));
        }

        $discount = $this->discountRepository->update($request->all(), $id);

        Flash::success('Discount updated successfully.');

        return redirect(route('discounts.index'));
    }

    /**
     * Remove the specified Discount from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $discount = $this->discountRepository->find($id);

        if (empty($discount)) {
            Flash::error('Discount not found');

            return redirect(route('discounts.index'));
        }

        $this->discountRepository->delete($id);

        Flash::success('Discount deleted successfully.');

        return redirect(route('discounts.index'));
    }
}
