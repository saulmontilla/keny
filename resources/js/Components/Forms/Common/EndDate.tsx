import React, { useEffect, useState } from 'react'
import { DatePickerControlProps } from 'ubiionline/form'
import FormikControl from '../Controls/FormikControl'
import { useFormikContext } from 'formik'
import { DateTime, Duration } from 'luxon'

export default function EndDate(props: DatePickerControlProps) {
    const [maxDate, setMaxDate] = useState<Date>(new Date())
    const formik = useFormikContext<any>()
    const now = DateTime.now()
    const oneMonth = Duration.fromObject({ month: 1 })

    const minDate = formik.values.start_date ? formik.values.start_date : undefined

    useEffect(() => {
        const _maxDate = formik.values.start_date
            ? DateTime.fromJSDate(formik.values.start_date).plus(oneMonth).toJSDate()
            : now.toJSDate()

        setMaxDate(_maxDate)

        const end_date = formik.values.end_date

        if (end_date) {
            const currentEndDateIsGreaterThanMaxDate = DateTime.fromJSDate(end_date)
                .diff(DateTime.fromJSDate(_maxDate))
                .milliseconds > 0

            if (currentEndDateIsGreaterThanMaxDate) {
                formik.setFieldValue('end_date', _maxDate)
            }
        }
    }, [formik.values.start_date])

    return (
        <FormikControl
            control='date-picker'
            label="Hasta"
            material
            placeholderText='dd/mm/yyyy'
            minDate={minDate}
            maxDate={maxDate}
            {...props}
        />
    )
}