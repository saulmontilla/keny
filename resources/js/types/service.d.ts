export interface Service {
    id: number,
    name: string,
    base_amount: number,
    pivot: {
        work_id: number,
        service_id: number,
        amount: number
    }
}

export interface Brand {
    id: number,
    name: string
}

export interface BrandModel {
    id: number,
    name: string,
    brand_id: number
    created_at: string,
    updated_at: string,
    brand: Brand
}

export interface Vehicle {
    id: number,
    brand_id: number,
    model_id: number,
    year: number,
    brand: Brand,
    model: BrandModel
}

export interface Work {
    id: number;
    plate: string;
    vehicle_id: number;
    date: string;
    labour: number;
    materials: number;
    description: string;
    created_at: string;
    updated_at: string,
    vehicle: Vehicle,
    services: Service[],
    total_service_amount: number
}