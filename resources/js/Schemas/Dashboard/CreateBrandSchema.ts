import * as Yup from 'yup';
import { BaseSchema } from '../BaseSchema';

export interface CreateBrandSchema extends BaseSchema {
    initialValues: {
        name: string;
        id: number;
    };
}

export const CreateBrandSchema: CreateBrandSchema = {
    initialValues: {
        id: 0,
        name: '',
    },
    validationSchema: Yup.object({
        id: Yup.number().required('El id es requerido'),
        name: Yup.string().required('El nombre es requerido'),
    }),
};