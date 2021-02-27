<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("/counter", function () {
    return response()->json(['count' => Cache::get("visitors-ips")->count()]);
});

Route::group(['middleware' => ['visitor-counter']], function () {
    Route::resource('palettes', 'PaletteAPIController');
    Route::get('gifs', 'PaletteAPIController@gifs');
    Route::get('home-gifs', 'PaletteAPIController@homeGifs');
    Route::get('content', 'PaletteAPIController@content');
    Route::get('hover/{id?}', 'PaletteAPIController@hover');
    Route::get('homedata', 'OrderPaletteController@homedata');
    Route::get('artist/{id?}', 'PaletteAPIController@artist');
    Route::get('all-palettes', 'PaletteAPIController@allPalettes');


    Route::get('/view', 'PaletteAPIController@Palettes');
    Route::get('/viewMinPalettes', 'PaletteAPIController@viewMinPalettes');
    Route::get('review', 'PaletteAPIController@getReviews');
    Route::post('addtocart', 'PaletteAPIController@addtocart');
    Route::get('getpallatecart', 'PaletteAPIController@getpallatecart');
    Route::post('removefromcart', 'PaletteAPIController@removefromcart');

    Route::group(['middleware' => ['api']], function () {
        Route::post('check-promo', 'CheckPromo@check_promo');
        Route::post('add-order', 'OrderController@store');
        Route::get('payment/{order?}/{method?}', 'OrderController@create');
        Route::post('artist-request', 'JoinUsController@crete_request');

        Route::get('get-about-content', 'AboutController@get_about_content');
        Route::get('get-join-content', 'JoinUsController@get_join_content');
        Route::get('get-about-artists', 'AboutController@get_about_artist');
        Route::get('get-about-contents', 'AboutController@get_about_contents_text');
    });
});