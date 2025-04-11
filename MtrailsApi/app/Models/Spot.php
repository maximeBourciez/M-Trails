<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spot extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'imageUrl', 'isOpen', 'elevation',
        'ville', 'type', 'rating', 'reviews', 'maintenanceDate'
    ];

    public function details()
    {
        return $this->hasMany(SpotDetail::class);
    }
}
