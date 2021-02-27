<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Artist;
use Faker\Generator as Faker;

$factory->define(Artist::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'Plates_description' => $faker->word,
        'email' => $faker->word,
        'artist_img' => $faker->word,
        'cover_img' => $faker->word,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
