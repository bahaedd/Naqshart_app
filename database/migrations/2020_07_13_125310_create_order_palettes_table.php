<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderPalettesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_palettes', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('order_id')->nullable();
            $table->integer('palatte_id')->unsigned()->nullable();

            $table->string('size')->nullable();
            $table->string('extrainfo')->nullable();
            $table->double('price')->nullable();
            $table->integer('quantity')->nullable();


            $table->foreign('order_id')->references('id')->on('orders')
            ->onDelete('cascade');
            $table->foreign('palatte_id')->references('id')->on('palettes')
            ->onDelete('cascade');
            $table->softDeletes();
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
        Schema::dropIfExists('order_palettes');
    }
}
