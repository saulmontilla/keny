import { CreateWorkSchema } from "@/Schemas/Dashboard/CreateWorkSchema";
import { BaseRepository } from "../BaseRepository";
import { FormikHelpers } from "formik";

export class WorkRepository extends BaseRepository {
    async store(values: CreateWorkSchema['initialValues'], actions: FormikHelpers<CreateWorkSchema['initialValues']>) {
        try {
            const data = {
                ...values
            }

            data.services = data.services.map(service => service.value)

            await this.axios.post('/dashboard/work', data)
        } catch (error) {
            this.throwError(this.getAxiosError(error))
        }
    }
}