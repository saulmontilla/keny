<?php

namespace App\Models\Relations\Dashboard;

use Illuminate\Database\Eloquent\Relations\HasMany;

trait MenuRelations
{
    public function childrens(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id');
    }
}
