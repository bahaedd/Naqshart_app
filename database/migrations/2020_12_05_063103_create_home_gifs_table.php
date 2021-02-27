<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeGifsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_gifs', function (Blueprint $table) {
            $table->id();
            $table->string('gif1');
            // $table->string('gif2');
            $table->text('header_ar_gif1');
            $table->text('header_gif1');
            $table->text('content_ar_gif1');
            $table->text('content_gif1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_gifs');
    }
}