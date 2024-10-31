import { FieldProps, getIn } from 'formik'
import React from 'react'
import { TextControlProps } from 'ubiionline/form'
import BaseText from './Base/BaseText'

export default function TextControl(props: TextControlProps & FieldProps) {
    const {
        field: { onChange: formikOnChange, ...field },
        form,
        meta,
        serverName,
        onChange,
        ref,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        formikOnChange(e)
        if (onChange) onChange(e)
    }

    return <BaseText
        onChange={handleChange}
        error={touched ? (clientError || serverError) : ''}
        {...field}
        {...rest}
    />
}
