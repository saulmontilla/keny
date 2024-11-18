<?php

namespace App\Repositories;

use App\Models\BrandModel;

class BrandModelRepository
{
    public function store(array $data): BrandModel
    {
        return BrandModel::create($data);
    }

    public function update(array $data, BrandModel $brandModel): void
    {
        $brandModel->update($data);
    }
}
