<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Work extends Model
{
    use HasFactory;

    protected $table = 'works';

    protected $fillable = [
        'plate',
        'brand_id',
        'date',
        'labour',
        'materials',
        'description',
    ];

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, 'service_work')->withPivot('amount');
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }
}
