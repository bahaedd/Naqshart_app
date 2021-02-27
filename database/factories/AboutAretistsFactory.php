<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\AboutAretists;
use Faker\Generator as Faker;

$factory->define(AboutAretists::class, function (Faker $faker) {

    return [
        'name_en' => $faker->word,
        'name_ar' => $faker->word,
        'image_ar' => $faker->word,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
