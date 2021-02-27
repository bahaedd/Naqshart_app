<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use  App\Models\Palette;


class instock implements Rule
{
    protected $dd ;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value,$dd=null)
    {
        $key['small']="S_avalible";
        $key['medium']='M_avalible';
        $key['large']='L_avalible';

        $palett =Palette::find($value['paletteid']);
        if($palett )
        {
           $palett_arr = $palett->toArray();
           if($palett_arr[$key[$value['palettesize']]] )
           {
            return $palett_arr[$key[$value['palettesize']]] >= $value['quantity']         ;

           }else
           {
               return false ;
           }
        }else{
            return false ;
        }







    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Sorry, the quantity exceeds the store';
    }
}
