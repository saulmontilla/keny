import { CreateWorkSchema } from "@/Schemas/Dashboard/CreateWorkSchema";
import { BaseRepository } from "../BaseRepository";
import { FormikHelpers } from "formik";
import { ci_toValue } from "@/Components/Forms/Controls/CurrencyControl";
import { router } from "@inertiajs/react";
import { Work } from "@/types/service";

export class WorkRepository extends BaseRepository {
    async store(values: CreateWorkSchema['initialValues'], actions: FormikHelpers<CreateWorkSchema['initialValues']>) {
        try {
            const data = {
                ...values
            }

            data.vehicle = data.vehicle?.value
            data.services = data.services.map(service => ({
                ...service,
                amount: ci_toValue(service.amount)
            }))
                .filter(service => service.amount > 0)

            const response = await this.axios.post('/dashboard/work', data)

            this.Swal.fire({
                icon: 'success',
                text: response.data
            })
                .then(() => {
                    actions.resetForm()
                    router.visit('/dashboard/work')
                })
        } catch (error) {
            this.throwError(this.getAxiosError(error))
        }
    }

    async print(work: Work) {
        try {
            const response = await this.axios.get(`/dashboard/work/${work.id}/print`, {
                responseType: 'blob'
            })

            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `Trabajo - ${work.plate}.pdf`)
            document.body.appendChild(link)
            link.click()
        } catch (error) {
            this.throwError(this.getAxiosError(error))
        }
    }
}