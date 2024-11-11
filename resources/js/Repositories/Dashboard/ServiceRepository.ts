import { EditServiceSchema } from "@/Schemas/Dashboard/EditServiceSchema";
import { BaseRepository } from "../BaseRepository";
import { ci_toValue } from "@/Components/Forms/Controls/CurrencyControl";
import { EditServiceModalProps } from "@/Components/Service/EditServiceModal";
import { UTableContextValue } from "ubiionline/datatable";
import { AxiosResponse } from "axios";

export class ServiceRepository extends BaseRepository {
    async update(
        values: EditServiceSchema['initialValues'],
        props: EditServiceModalProps,
        datatable: UTableContextValue
    ) {
        try {
            const data = {
                ...values
            }

            data.base_amount = ci_toValue(values.base_amount)

            let response: AxiosResponse

            if (props.service) {
                response = await this.axios.put(`/dashboard/config/service/${values.id}`, data)
            } else {
                response = await this.axios.post(`/dashboard/config/service`, data)
            }

            this.Swal.fire({
                text: response.data,
                icon: 'success'
            })
                .then(() => {
                    props.onHide && props.onHide()
                    datatable.fetchData(datatable.currentPage)

                })
        } catch (error: any) {
            this.throwError(this.getAxiosError(error))
        }
    }
}