import * as Yup from 'yup';
import { BaseSchema } from '../BaseSchema';

export interface ChangePasswordSchema extends BaseSchema {
    initialValues: {
        currentPassword: string;
        newPassword: string;
        confirmNewPassword: string;
    };
}

export const ChangePasswordSchema: ChangePasswordSchema = {
    initialValues: {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    },
    validationSchema: Yup.object({
        currentPassword: Yup.string().required('La contraseña actual es requerida'),
        newPassword: Yup.string().required('La nueva contraseña es requerida'),
        confirmNewPassword: Yup.string()
            .oneOf([Yup.ref('newPassword')], 'Las contraseñas deben coincidir')
            .required('Confirmar la nueva contraseña es requerido')
    }),
};
