<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\HomeData;
use Faker\Generator as Faker;

$factory->define(HomeData::class, function (Faker $faker) {

    return [
        'word1_en' => $faker->word,
        'word1_ar' => $faker->word,
        'word2_en' => $faker->word,
        'word2_ar' => $faker->word,
        'word3_en' => $faker->word,
        'word3_ar' => $faker->word,
        'image' => $faker->word,
        'video' => $faker->word,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
