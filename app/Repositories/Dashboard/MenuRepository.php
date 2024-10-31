<?php

namespace App\Repositories\Dashboard;

use App\Models\Dashboard\Menu;

class MenuRepository
{
    public function all()
    {
        return Menu::where('parent_id', 0)
            ->withChildrens()
            ->get()
            ->map->getRecursiveChildrens(false);
    }
}
