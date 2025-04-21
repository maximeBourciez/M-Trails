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
        Schema::create('spots', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('imageUrl');
            $table->boolean('isOpen')->default(true);
            $table->integer('elevation');
            $table->string('ville');
            $table->string('type'); // tech, airline, etc.
            $table->date('maintenanceDate')->nullable();
            $table->string('videoUrl')->nullable();
            $table->decimal('latitude', 10, 7)->nullable()->after('ville');
            $table->decimal('longitude', 10, 7)->nullable()->after('latitude');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spots');
    }
};
