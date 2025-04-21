<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actualite extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'subTitle',
        'description',
        'image',
        'date',
        'type',
        'inscriptionUrl',
    ];

    public $timestamps = false;

    protected $primaryKey = 'idActu';

    // Relier avec les détails de l'actualité
    public function details()
    {
        return $this->hasMany(ActualiteDetail::class, 'idActu');
    }
}
