import { FieldProps } from 'formik'
import React from 'react'
import { CheckboxControlProps } from 'ubiionline/form'
import BaseCheckbox from './Base/BaseCheckbox'

export default function CheckboxControl(props: CheckboxControlProps & FieldProps) {
    const {
        field,
        form,
        meta,
        serverName,
        inline,
        ...rest
    } = props

    const shouldBeChecked = () => {
        return (Array.isArray(field.value) && props.value)
            ? field.value.includes(props.value)
            : field.value
    }

    return (
        <BaseCheckbox
            checked={shouldBeChecked()}
            {...field}
            {...rest}
        />
    )
}
