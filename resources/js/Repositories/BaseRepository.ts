import axios, { AxiosStatic } from 'axios';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import withReactContent, { ReactSweetAlert } from 'sweetalert2-react-content';

export class BaseRepository {
    /**
     * SweetAlert2 instance
     */
    Swal: typeof Swal & ReactSweetAlert;

    /**
     * Axios instance
     */
    axios: AxiosStatic

    constructor() {
        this.Swal = withReactContent(Swal)
        this.axios = axios
    }

    /**
     * Throw an error message
     */
    throwError(message?: string) {
        this.Swal.fire({
            title: '',
            icon: 'error',
            text: message
        })
    }

    throwAxiosError(error: any) {
        this.throwError(this.getAxiosError(error))
    }

    getAxiosError(error: any) {
        return error.response?.data?.message || error.toString()
    }

    /**
     * Mostrar un cuadro de diálogo de confirmación antes de ejecutar una función
     */
    async preConfirm(onConfirm: () => Promise<void>, options?: SweetAlertOptions) {
        this.Swal.fire({
            title: '¿Está seguro que desea continuar con los datos suministrados?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                await onConfirm()
            },
            ...options
        })
    }
}
