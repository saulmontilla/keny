export interface Address {
    id: number;
    cliente_id: number;
    calle_avenida: string;
    edificio: string;
    piso: string;
    telefono_local: string;
    estado_id: number;
    municipio_id: number;
    parroquia_id: number;
    ciudad_id: number;
    codigo_postal_id: number;
    urbanizacion: string;
    punto_referencia: string;
    created_at: string;
    updated_at: string;
    state: State;
    municipality: Municipality;
    parish: Parish;
    city: City;
    zip_code: ZipCode;
}

export interface State {
    id: number,
    estado: string,
    iso_3166_2: string,
    shortname: string,
    estado_bvc_id: number
}

export interface City {
    id: number,
    ciudad: string,
    es_capital: number,
    estado_id: number
}

export interface Municipality {
    id: number,
    municipio: string,
    estado_id: number
}

export interface Parish {
    id: number,
    parroquia: string,
    municipio_id: number
}

export interface Country {
    lugar_ID: number,
    lugar_nombre: string,
    lugar_tipo: string,
    lugar_fk_lugar: string,
    lugar_lat: string,
    lugar_lon: string,
    lugar_accept_passport: string,
    lugar_alph_3: string,
    lugar_alph_2: string,
    riesgo: number,
    lugar_code: number,
    lugar_phone_code: string,
    lugar_phone_min: string,
    lugar_phone_max: string
}

export interface ZipCode {
    id: number,
    estado_id: number,
    codigo: string,
    zona: string,
    descripcion: string
}