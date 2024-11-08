import { CreateWorkSchema } from "@/Schemas/Dashboard/CreateWorkSchema";
import { BaseRepository } from "../BaseRepository";
import { FormikHelpers } from "formik";
import { ci_toValue } from "@/Components/Forms/Controls/CurrencyControl";

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

            await this.axios.post('/dashboard/work', data)
        } catch (error) {
            this.throwError(this.getAxiosError(error))
        }
    }
}