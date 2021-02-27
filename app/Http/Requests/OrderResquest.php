<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\instock;

class OrderResquest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email:rfc,dns',
            'fname' => 'required|string|max:100',
            'lname' => 'required|string|max:100',
            'address' => 'required|string|max:300',
            'apartment' => 'nullable|string|max:300',
            'city' => 'required|string|max:100',
            'postcode' => 'required|numeric',
            'goverment' => 'required|string|max:100',
            'country' => 'required|string|max:100',
            'phone' => 'required|string|min:8|max:20',
            'phonecode' => 'required',
            'items' => 'required|present|array',
            'items.*.paletteid' => 'required|numeric|exists:App\Models\Palette,id',

            'items.*.palettesize' => 'required|in:"small","large","medium"',
            'items.*.quantity' => 'required|numeric|gt:0',
            'items.*' => new instock(),
        ];
    }
}