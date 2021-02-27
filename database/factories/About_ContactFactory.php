<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\About_Contact;
use Faker\Generator as Faker;

$factory->define(About_Contact::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'email' => $faker->word,
        'phone' => $faker->word,
        'message' => $faker->word,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
