<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaletteimagesTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('paletteimages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('img');
            $table->integer('palatte_id')->unsigned();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('palatte_id')->references('id')->on('palettes')->onDelete('cascade');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('paletteimages');
    }
}
