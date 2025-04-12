<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('actualites', function (Blueprint $table) {
            $table->id('idActu');
            $table->string('titre');
            $table->string('sousTitre')->nullable();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->dateTime('date')->nullable();
            $table->enum('type', ['Information', 'Évènement', 'Alerte'])->default('Information');
            $table->string('inscriptionUrl')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actualites');
    }
};
