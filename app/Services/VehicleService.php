<?php

namespace App\Services;

use App\Repositories\BrandModelRepository;
use App\Repositories\BrandRepository;
use App\Repositories\VehicleRepository;

class VehicleService
{
    public function __construct(
        private BrandRepository $brandRepository,
        private BrandModelRepository $brandModelRepository,
        private VehicleRepository $vehicleRepository
    ) {}
    public function store(array $data): void
    {
        $brand_id = $data['brand'];

        if (!is_numeric($brand_id)) {
            $created_brand = $this->brandRepository->store([
                'name' => $brand_id
            ]);
            $brand_id = $created_brand->id;
        }

        $model_id = $data['model'];

        if (!is_numeric($model_id)) {
            $created_model = $this->brandModelRepository->store([
                'name' => $model_id,
                'brand_id' => $brand_id
            ]);
            $model_id = $created_model->id;
        }

        $year = $data['year'];

        $this->vehicleRepository->store([
            'brand_id' => $brand_id,
            'model_id' => $model_id,
            'year' => $year
        ]);
    }
}
