<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'artwork',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('artworks2020'),
            'admin_role'=>1
        ]);
    }
}
