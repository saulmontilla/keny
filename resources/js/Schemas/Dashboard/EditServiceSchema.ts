import * as Yup from 'yup';
import { BaseSchema } from '../BaseSchema';

export interface EditServiceSchema extends BaseSchema {
    initialValues: {
        name: string;
        base_amount: number;
        id: number;
    };
}

export const EditServiceSchema: EditServiceSchema = {
    initialValues: {
        id: 0,
        name: '',
        base_amount: 0,
    },
    validationSchema: Yup.object({
        id: Yup.number().required('El id es requerido'),
        name: Yup.string().required('El nombre es requerido'),
        base_amount: Yup.number().required('El monto base es requerido'),
    }),
};