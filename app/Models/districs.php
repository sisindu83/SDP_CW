<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class districs extends Model
{
    use HasFactory;
    protected $fillable = [
        'distric_name',
    ];
}
