import { FieldProps, getIn } from 'formik'
import React from 'react'
import { TextAreaControlProps } from 'ubiionline/form'
import BaseTextArea from './Base/BaseTextArea'

export default function TextAreaControl(props: TextAreaControlProps & FieldProps) {
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

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
        formikOnChange(e)
        if (onChange) onChange(e)
    }

    return <BaseTextArea
        onChange={handleChange}
        error={touched ? (clientError || serverError) : ''}
        {...field}
        {...rest}
    />
}
