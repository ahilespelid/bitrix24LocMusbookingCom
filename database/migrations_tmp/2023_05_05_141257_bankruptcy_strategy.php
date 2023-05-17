<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BankruptcyStrategy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('bankruptcy_strategy', function (Blueprint $table) {
            $table->id();
            $table->text('data')->nullable();
            
            $table->string('created_at')->nullable();
            $table->string('updated_at')->nullable();
            $table->string('deleted_at')->nullable();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){Schema::dropIfExists('bankruptcy_strategy');}
}