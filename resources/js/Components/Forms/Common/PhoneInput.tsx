import React from 'react'
import FormikControl from '../Controls/FormikControl'
import { PhoneControlProps } from 'ubiionline/form'

export default function PhoneInput(props: PhoneControlProps) {
    return (
        <FormikControl
            control='phone'
            label='Teléfono'
            {...props}
        />
    )
}
