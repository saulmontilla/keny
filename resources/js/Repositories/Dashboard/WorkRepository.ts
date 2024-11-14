import { CreateWorkSchema } from "@/Schemas/Dashboard/CreateWorkSchema";
import { BaseRepository } from "../BaseRepository";
import { FormikHelpers } from "formik";
import { ci_toValue } from "@/Components/Forms/Controls/CurrencyControl";
import { router } from "@inertiajs/react";

export class WorkRepository extends BaseRepository {
    async store(values: CreateWorkSchema['initialValues'], actions: FormikHelpers<CreateWorkSchema['initialValues']>) {
        try {
            const data = {
                ...values
            }

            data.brand = data.brand?.value
            data.servicesWithAmount.map(service => {
                service.base_amount = ci_toValue(service.base_amount)
                return service
            })
            data.labour = ci_toValue(data.labour)
            data.materials = ci_toValue(data.materials)

            const response = await this.axios.post('/dashboard/work', data)

            this.Swal.fire({
                icon: 'success',
                text: response.data
            })
                .then(() => {
                    actions.resetForm()
                    router.reload()
                })
        } catch (error) {
            this.throwError(this.getAxiosError(error))
        }
    }
}