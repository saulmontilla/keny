<?php

namespace App\Repositories;

use App\Models\Brand;

class BrandRepository
{
    public function store(array $data): void
    {
        Brand::create($data);
    }

    public function update(array $data, Brand $brand): void
    {
        $brand->update($data);
    }
}