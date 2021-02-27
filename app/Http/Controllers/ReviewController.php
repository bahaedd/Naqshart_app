<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateReviewRequest;
use App\Http\Requests\UpdateReviewRequest;
use App\Repositories\ReviewRepository;
use App\Http\Controllers\AppBaseController;
use App\Models\Review;
use Illuminate\Http\Request;
use Flash;
use Response;

class ReviewController extends AppBaseController
{
    /** @var  ReviewRepository */
    private $reviewRepository;

    public function __construct(ReviewRepository $reviewRepo)
    {
        $this->reviewRepository = $reviewRepo;
    }

    /**
     * Display a listing of the Review.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $reviews = $this->reviewRepository->all();

        return view('reviews.index')
            ->with('reviews', $reviews);
    }

    /**
     * Show the form for creating a new Review.
     *
     * @return Response
     */
    public function create()
    {
        return view('reviews.create');
    }


    /**
     * Store a newly created Review in storage.
     *
     * @param CreateReviewRequest $request
     *
     * @return Response
     */
    public function store(CreateReviewRequest $request)
    {
        // 	email		like_counter	dislike_counter
        // $request->validate([
        //     'name	' => 'required',
        //     'body	' => 'required',
        //     'title	' => 'required',
        //     'rate	' => 'required',
        // ]);
        $input = $request->all();

        $review = $this->reviewRepository->create($input);

        Flash::success('Review saved successfully.');

        return response()->json(['review'=>$review]);
    }

    /**
     * Display the specified Review.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $review = $this->reviewRepository->find($id);

        if (empty($review)) {
            Flash::error('Review not found');

            return redirect(route('reviews.index'));
        }

        return view('reviews.show')->with('review', $review);
    }

    /**
     * Show the form for editing the specified Review.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $review = $this->reviewRepository->find($id);

        if (empty($review)) {
            Flash::error('Review not found');

            return redirect(route('reviews.index'));
        }

        return view('reviews.edit')->with('review', $review);
    }

    /**
     * Update the specified Review in storage.
     *
     * @param int $id
     * @param UpdateReviewRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateReviewRequest $request)
    {
        $review = $this->reviewRepository->find($id);

        if (empty($review)) {
            Flash::error('Review not found');

            return redirect(route('reviews.index'));
        }

        $review = $this->reviewRepository->update($request->all(), $id);

        Flash::success('Review updated successfully.');

        return redirect(route('reviews.index'));
    }
     public function like(Request $request){
        $review = Review::find($request->id);
        if($review){
            $review->like_counter +=1;
            $review->save();
            return response()->json(['review' =>$review]);
        }
     }
     public function dislike(Request $request){
        $review = Review::find($request->id);
        if($review){
            $review->dislike_counter +=1;
            $review->save();
            return response()->json(['review' =>$review]);
        }
     }
    /**
     * Remove the specified Review from storage.
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        $review = $this->reviewRepository->find($id);

        if (empty($review)) {
            Flash::error('Review not found');

            return redirect(route('reviews.index'));
        }

        $this->reviewRepository->delete($id);

        Flash::success('Review deleted successfully.');

        return redirect(route('reviews.index'));
    }
}
