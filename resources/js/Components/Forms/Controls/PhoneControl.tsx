import { FieldProps, getIn } from 'formik'
import React from 'react'
import { PhoneControlProps } from 'ubiionline/form'
import BasePhone from './Base/BasePhone'
import { PhoneInputProps } from 'react-phone-input-2'

export default function PhoneControl(props: PhoneControlProps & FieldProps) {
    const {
        field: { onChange: formikOnChange, ...field },
        form,
        meta,
        serverName,
        onChange,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const handleChange: PhoneInputProps['onChange'] = (value, country, e, formattedValue) => {
        e.target.name = field.name
        form.setFieldValue(field.name, value)
        if (onChange) onChange(value, country, e, formattedValue)
    }

    return <BasePhone
        onChange={handleChange}
        error={touched ? (clientError || serverError) : ''}
        {...field}
        {...rest}
    />
}
