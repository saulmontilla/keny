import * as Yup from 'yup';
import { BaseSchema } from './BaseSchema';

export interface LoginSchema extends BaseSchema {
}

export const LoginSchema: LoginSchema = {
    initialValues: {
        username: '',
        password: '',
    },
    validationSchema: Yup.object({
        username: Yup.string().required('El usuario es requerido'),
        password: Yup.string().required('Contraseña requerida'),
    }),
};