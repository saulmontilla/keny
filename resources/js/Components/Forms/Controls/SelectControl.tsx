import { FieldProps, getIn } from 'formik'
import React, { SelectHTMLAttributes } from 'react'
import { SelectControlProps } from 'ubiionline/form'
import BaseSelect from './Base/BaseSelect'

export default function SelectControl(props: SelectControlProps & FieldProps) {
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

    const handleChange: SelectHTMLAttributes<HTMLSelectElement>['onChange'] = e => {
        formikOnChange(e)
        if (onChange) onChange(e)
    }

    return <BaseSelect
        onChange={handleChange}
        error={touched ? (clientError || serverError) : ''}
        {...field}
        {...rest}
    />
}
