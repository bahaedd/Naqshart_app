<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();


            $table->string('email')->nullable();
            $table->string('fname')->nullable();
            $table->string('lname')->nullable();
            $table->string('address')->nullable();
            $table->string('apartment')->nullable();
            $table->string('city')->nullable();
            $table->string('postcode')->nullable();
            $table->string('goverment')->nullable();
            $table->string('country')->nullable();
            $table->string('phone')->nullable();

            $table->string('paymentid')->nullable();
            $table->string('paymentstatus')->nullable();
            $table->string('promocode')->nullable();
            $table->string('discount')->nullable();
            $table->string('totalprice')->nullable();
            $table->string('payment_transaction_return')->nullable();

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
        Schema::dropIfExists('orders');
    }
}
