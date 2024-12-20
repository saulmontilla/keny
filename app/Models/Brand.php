<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    protected $table = 'brands';

    public function name(): Attribute
    {
        return Attribute::make(
            get: fn($value) => trim(strtoupper($value)),
            set: fn($value) => trim(strtoupper($value))
        );
    }
}
