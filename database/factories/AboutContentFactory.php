<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\AboutContent;
use Faker\Generator as Faker;

$factory->define(AboutContent::class, function (Faker $faker) {

    return [
        'body1_en' => $faker->text,
        'body1_ar' => $faker->text,
        'body_image' => $faker->word,
        'body2_en' => $faker->text,
        'body2_ar' => $faker->text,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
