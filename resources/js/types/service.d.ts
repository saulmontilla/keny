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

export interface Work {
    id: number;
    plate: string;
    brand_id: number;
    date: string;
    labour: number;
    materials: number;
    description: string;
    created_at: string;
    updated_at: string,
    brand: Brand,
    services: Service[]
}