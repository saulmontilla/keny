<?php

namespace App\Models\Scopes\Dashboard;

use Illuminate\Database\Eloquent\Builder;

trait MenuScopes
{
    public function scopeWithChildrens(Builder $query): Builder
    {
        return $query->orderBy('orden', 'asc')
            ->with(['childrens']);
    }
}
