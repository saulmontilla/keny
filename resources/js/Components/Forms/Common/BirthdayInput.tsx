import React from 'react'
import FormikControl from '../Controls/FormikControl'
import { DateTime, Duration } from "luxon";
import { DatePickerControlProps } from 'ubiionline/form';

export default function BirthdayInput(props: DatePickerControlProps) {
    const minAge = Duration.fromObject({ years: 18 })
    const maxDate = DateTime.now().minus(minAge)

    return (
        <FormikControl
            control="date-picker"
            label='Fecha de nacimiento'
            yearDropdownItemNumber={80}
            maxDate={maxDate.toJSDate()}
            placeholderText='dd/mm/yyyy'
            material
            {...props}
        />
    )
}
