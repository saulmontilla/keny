import React from 'react'
import FormikControl from '../Controls/FormikControl'
import { DatePickerControlProps } from 'ubiionline/form'
import { useFormikContext } from 'formik'

export default function StartDate(props: DatePickerControlProps) {
    const formik = useFormikContext<any>()
    const maxDate = formik.values.end_date ? formik.values.end_date : new Date()

    return (
        <FormikControl
            control='date-picker'
            label="Desde"
            material
            placeholderText='dd/mm/yyyy'
            maxDate={maxDate}
            {...props}
        />
    )
}
