import * as Yup from 'yup';
import { BaseSchema } from '../BaseSchema';
import { Select2Option } from 'ubiionline/form';

export interface CreateVehicleSchema extends BaseSchema {
    initialValues: {
        brand: Select2Option;
        model: Select2Option;
        year: string;
        id: number;
    };
}

export const CreateVehicleSchema: CreateVehicleSchema = {
    initialValues: {
        id: 0,
        brand: { label: 'Selecciones marca', value: '' },
        model: { label: 'Selecciones modelo', value: '' },
        year: ''
    },
    validationSchema: Yup.object({
        id: Yup.number().required('El id es requerido'),
        brand: Yup.object({
            value: Yup.string().required('La marca es requerida')
        }),
        model: Yup.object({
            value: Yup.string().required('El modelo es requerido')
        }),
        year: Yup.string().required('El año es requerido')
    }),
};