import * as Yup from "yup";
import { BaseSchema } from "../BaseSchema";
import { Select2Option } from "ubiionline/form";

interface ServiceWithAmount {
    id: number,
    name: string,
    base_amount: number
}
export interface CreateWorkSchema extends BaseSchema {
    initialValues: {
        plate: string;
        vehicle: Select2Option | null;
        date: string | Date;
        services: Select2Option[];
        servicesWithAmount: ServiceWithAmount[]
        description: string;
        labour: number;
        materials: number
    };
}

export const CreateWorkSchema: CreateWorkSchema = {
    initialValues: {
        plate: '',
        vehicle: null,
        servicesWithAmount: [],
        date: '',
        services: [],
        description: '',
        labour: 0,
        materials: 0
    },
    validationSchema: Yup.object({
        plate: Yup.string().required('La placa es requerida'),
        vehicle: Yup.object({
            value: Yup.string().required('El modelo de vehiculo es requerido')
        }),
        date: Yup.date().required('La fecha es requerida'),
        services: Yup.array().required('El servicio es requerido').min(1, 'El servicio es requerido'),
        description: Yup.string().required('La descripción es requerida'),
        labour: Yup.number().required('El monto de mano de obra es requerido')
            .min(1, 'El monto de mano de obra es requerido'),
        materials: Yup.number().required('El monto de materiales es requerido')
            .min(1, 'El monto de materiales es requerido'),
    }),
}