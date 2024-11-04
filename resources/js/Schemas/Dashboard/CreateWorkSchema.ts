import * as Yup from "yup";
import { BaseSchema } from "../BaseSchema";
import { Select2Option } from "ubiionline/form";

export interface CreateWorkSchema extends BaseSchema {
    initialValues: {
        plate: string;
        model: string;
        amount: number;
        date: string | Date;
        services: Select2Option[];
        description: string;
    };
}

export const CreateWorkSchema: CreateWorkSchema = {
    initialValues: {
        plate: '',
        model: '',
        amount: 0,
        date: '',
        services: [],
        description: '',
    },
    validationSchema: Yup.object({
        plate: Yup.string().required('La placa es requerida'),
        model: Yup.string().required('El modelo es requerido'),
        amount: Yup.number().required('El monto es requerido').min(1, 'El monto es requerido'),
        date: Yup.date().required('La fecha es requerida'),
        services: Yup.array().required('El servicio es requerido').min(1, 'El servicio es requerido'),
        description: Yup.string().required('La descripción es requerida'),
    }),
}