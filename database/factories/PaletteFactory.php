<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Palette;
use Faker\Generator as Faker;

$factory->define(Palette::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'img' => $faker->word,
        'palette_copies' => $faker->randomDigitNotNull,
        'avalible_copies' => $faker->randomDigitNotNull,
        'S_copies' => $faker->randomDigitNotNull,
        'S_avalible' => $faker->randomDigitNotNull,
        'S_price' => $faker->word,
        'M_copies' => $faker->randomDigitNotNull,
        'M_avalible' => $faker->randomDigitNotNull,
        'M_price' => $faker->word,
        'L_copies' => $faker->randomDigitNotNull,
        'L_avalible' => $faker->randomDigitNotNull,
        'L_price' => $faker->word,
        'sizing_details' => $faker->word,
        'print_material' => $faker->word,
        'print_ink' => $faker->word,
        'print_finish' => $faker->word,
        'frame_material' => $faker->word,
        'frame_finish' => $faker->word,
        'artist_id' => $faker->randomDigitNotNull,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
