<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table = 'projects';
    protected $fillable = ['name', 'description', 'image', 'language'];
    protected $casts = [
        'images' => 'array', // Esto asegurará que las imágenes se decodifiquen automáticamente de JSON a array
    ];
}
