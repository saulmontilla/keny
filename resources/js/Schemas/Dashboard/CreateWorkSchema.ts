import * as Yup from "yup";
import { BaseSchema } from "../BaseSchema";
import { Select2Option } from "ubiionline/form";

interface ServiceWithAmount {
    id: number,
    name: string,
    amount: number,
    rendersInPdf: boolean,
    type: string
}

export interface CreateWorkSchema extends BaseSchema {
    initialValues: {
        plate: string;
        vehicle: Select2Option | null;
        date: string | Date;
        services: ServiceWithAmount[];
        description: string;
    };
}

export const CreateWorkSchema: CreateWorkSchema = {
    initialValues: {
        plate: '',
        vehicle: null,
        date: '',
        services: [],
        description: '',
    },
    validationSchema: Yup.object({
        plate: Yup.string().required('La placa es requerida'),
        vehicle: Yup.object({
            value: Yup.string().required('El modelo de vehiculo es requerido')
        })
            .required('El modelo de vehiculo es requerido'),
        date: Yup.date().required('La fecha es requerida'),
        services: Yup.array().min(1, 'Debe agregar almenos un servicio').of(Yup.object({
            id: Yup.number().required('El servicio es requerido'),
            name: Yup.string().required('El nombre es requerido'),
            amount: Yup.number(),
            rendersInPdf: Yup.boolean(),
            type: Yup.string().required('El tipo es requerido'),
        })),
        description: Yup.string(),
    }),
}