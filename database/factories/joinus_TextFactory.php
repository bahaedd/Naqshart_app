<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\joinus_Text;
use Faker\Generator as Faker;

$factory->define(joinus_Text::class, function (Faker $faker) {

    return [
        'text_en' => $faker->word,
        'text_ar' => $faker->word,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
