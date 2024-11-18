import { BaseRepository } from "../BaseRepository";
import { UTableContextValue } from "ubiionline/datatable";
import { AxiosResponse } from "axios";
import { CreateVehicleModalProps } from "@/Components/Vehicle/CreateVehicleModal";
import { CreateVehicleSchema } from "@/Schemas/Dashboard/CreateBrandSchema";

export class VehicleRepository extends BaseRepository {
    async store(
        values: CreateVehicleSchema['initialValues'],
        props: CreateVehicleModalProps,
        datatable: UTableContextValue
    ) {
        try {
            const data = {
                ...values
            }

            let response: AxiosResponse

            if (props.brand) {
                response = await this.axios.put(`/dashboard/config/vehicle/${values.id}`, data)
            } else {
                response = await this.axios.post(`/dashboard/config/vehicle`, data)
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