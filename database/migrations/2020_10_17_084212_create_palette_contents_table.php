<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaletteContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('palette_contents', function (Blueprint $table) {
            $table->id();

            $table->longText('sizing_details')->nullable();
            $table->longText('sizing_details_ar')->nullable();

            $table->longText('print_material')->nullable();
            $table->longText('print_material_ar')->nullable();

            $table->longText('print_ink')->nullable();
            $table->longText('print_ink_ar')->nullable();

            $table->longText('print_finish')->nullable();
            $table->longText('print_finish_ar')->nullable();

            $table->longText('frame_material')->nullable();
            $table->longText('frame_material_ar')->nullable();

            $table->longText('frame_finish')->nullable();
            $table->longText('frame_finish_ar')->nullable();

            $table->longText('shipping')->nullable();
            $table->longText('shipping_ar')->nullable();

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
        Schema::dropIfExists('palette_contents');
    }
}