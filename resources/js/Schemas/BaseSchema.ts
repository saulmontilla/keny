import * as Yup from 'yup';

export interface BaseSchema {
    initialValues: Record<string, any>;
    validationSchema: Yup.AnySchema;
}