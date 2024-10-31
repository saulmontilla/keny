import { FieldProps } from 'formik'
import React from 'react'
import { RadioControlProps } from 'ubiionline/form'
import BaseRadio from './Base/BaseRadio'

export default function RadioControl(props: RadioControlProps & FieldProps) {
    const {
        field,
        form,
        meta,
        ...rest
    } = props

    return (
        <BaseRadio
            {...field}
            {...rest}
            checked={field.value === props.value}
        />
    )
}
