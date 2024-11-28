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
        'vehicle_id',
        'date',
        'labour',
        'materials',
        'description',
    ];

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, 'service_work')->withPivot(['amount', 'renders_in_pdf']);
    }

    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(Vehicle::class, 'vehicle_id');
    }
}
