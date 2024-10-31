import { LoginSchema } from "@/Schemas/LoginSchema";
import { router } from "@inertiajs/react";
import axios from "axios";
import { FormikHelpers } from "formik";

export class LoginRepository {
    public async login(values: LoginSchema['initialValues'], actions: FormikHelpers<LoginSchema['initialValues']>) {
        try {
            const response = await axios.post('/login', values)
            router.visit('/dashboard/service/create')
        } catch (error: any) {
            const errorMessage = error.response.data?.message || error.toString()
            actions.setFieldError('password', errorMessage)
        }
    }
}