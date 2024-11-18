<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandModel extends Model
{
    use HasFactory;

    protected $table = 'brand_model';

    protected $fillable = ['name', 'brand_id'];

    public function name(): Attribute
    {
        return Attribute::make(
            get: fn($value) => trim(strtoupper($value)),
            set: fn($value) => trim(strtoupper($value))
        );
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}
