import * as Yup from 'yup'

export interface DatatableFiltersSchema {
    initialValues: {
        startDate: string | Date,
        endDate: string | Date
    },
    schema: any
}

export const datatableFiltersSchema: DatatableFiltersSchema = {
    initialValues: {
        startDate: '',
        endDate: ''
    },
    schema: Yup.object({
        startDate: Yup.string().nullable(),
        endDate: Yup.string().nullable()
    })
}