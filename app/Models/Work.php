<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Work extends Model
{
    use HasFactory;

    protected $table = 'works';

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, 'service_work');
    }
}
