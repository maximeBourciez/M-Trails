<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpotDetail extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'name', 'image', 'description', 'spot_id'];

    public $timestamps = false;

    public function spot()
    {
        return $this->belongsTo(Spot::class);
    }
}
