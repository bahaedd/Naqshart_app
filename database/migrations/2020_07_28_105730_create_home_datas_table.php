<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeDatasTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_datas', function (Blueprint $table) {
            $table->increments('id');
            $table->text('word1_en');
            $table->text('word1_ar');
            $table->text('word2_en');
            $table->text('word2_ar');
            // $table->string('word3_en');
            // $table->string('word3_ar');
            $table->string('image');
            $table->string('video');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('home_datas');
    }
}