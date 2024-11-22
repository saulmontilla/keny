import { ChangePasswordSchema } from "@/Schemas/Dashboard/ChangePasswordSchema";
import { BaseRepository } from "../BaseRepository";
import { router } from "@inertiajs/react";

export class PasswordRepository extends BaseRepository {
    async update(data: ChangePasswordSchema['initialValues']) {
        try {
            const response = await this.axios.put('/dashboard/password', data)

            this.Swal.fire({
                icon: 'success',
                text: response.data
            }).then(() => {
                router.post('/logout')
            })
        } catch (error) {
            this.throwAxiosError(error)
        }
    }
}