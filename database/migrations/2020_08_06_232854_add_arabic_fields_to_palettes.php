<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddArabicFieldsToPalettes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('palettes', function (Blueprint $table) {
            // $table->longText('sizing_details_ar')->nullable();
            // $table->longText('print_material_ar')->nullable();
            // $table->longText('print_ink_ar')->nullable();
            // $table->longText('print_finish_ar')->nullable();
            // $table->longText('frame_material_ar')->nullable();
            // $table->longText('frame_finish_ar')->nullable();
            $table->longText('description')->nullable();
            $table->longText('description_ar')->nullable();
            // $table->longText('shipping')->nullable();
            // $table->longText('shipping_ar')->nullable();
            $table->string('L_price_sar')->nullable();
            $table->string('M_price_sar')->nullable();
            $table->string('S_price_sar')->nullable();
            // $table->string('gif1')->nullable();
            // $table->string('gif2')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('palettes', function (Blueprint $table) {
            //
        });
    }
}