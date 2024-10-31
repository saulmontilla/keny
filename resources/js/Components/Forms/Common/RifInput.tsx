import FormikControl from '@/Components/Forms/Controls/FormikControl'
import React from 'react'
import { TextControlProps } from 'ubiionline/form'

export default function RifInput(props: TextControlProps) {
    return (
        <FormikControl
            control='text'
            label='Número de RIF'
            numeric
            maxLength={9}
            placeholder='RIF'
            {...props}
        />
    )
}
