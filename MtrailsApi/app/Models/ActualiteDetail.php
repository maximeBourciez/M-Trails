<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActualiteDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'idActu',
        'titre',
        'description',
        'image',
    ];

    public $timestamps = false;

    // Relier à l'actualité principale
    public function actualite()
    {
        return $this->belongsTo(Actualite::class, 'idActu');
    }
}
