import React from 'react'
import FormikControl from '../../Controls/FormikControl'
import { TextControlProps } from 'ubiionline/form'

export default function UrbanizationInput(props: TextControlProps) {
    return (
        <FormikControl 
            control='text'
            label='Urbanización'
            placeholder='Urbanización'
            maxLength={100}
            material
            {...props}
        />
    )
}
