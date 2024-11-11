import { BaseRepository } from "../BaseRepository";
import { UTableContextValue } from "ubiionline/datatable";
import { AxiosResponse } from "axios";
import { CreateBrandSchema } from "@/Schemas/Dashboard/CreateBrandSchema";
import { CreateBrandModalProps } from "@/Components/Brand/CreateBrandModal";

export class BrandRepository extends BaseRepository {
    async update(
        values: CreateBrandSchema['initialValues'],
        props: CreateBrandModalProps,
        datatable: UTableContextValue
    ) {
        try {
            const data = {
                ...values
            }

            let response: AxiosResponse

            if (props.brand) {
                response = await this.axios.put(`/dashboard/config/brand/${values.id}`, data)
            } else {
                response = await this.axios.post(`/dashboard/config/brand`, data)
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