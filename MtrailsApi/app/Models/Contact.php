<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name', 
        'email', 
        'subject', 
        'message',
        'read_at'
    ];

    protected $dates = ['read_at'];
}