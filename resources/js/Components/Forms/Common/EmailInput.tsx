import FormikControl from '@/Components/Forms/Controls/FormikControl'
import React from 'react'
import { TextControlProps } from 'ubiionline/form'

export default function EmailInput(props: TextControlProps) {
    return (
        <FormikControl
            control='text'
            label='Correo'
            maxLength={70}
            material
            {...props}
        />
    )
}
