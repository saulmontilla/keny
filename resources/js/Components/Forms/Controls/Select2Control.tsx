import { FieldProps, getIn } from 'formik'
import React from 'react'
import { Select2ControlProps } from 'ubiionline/form'
import BaseSelect2 from './Base/BaseSelect2'

export default function Select2Control(props: Select2ControlProps & FieldProps) {
    const {
        field: { onChange: formikOnChange, onBlur, ...field },
        form,
        meta,
        serverName,
        onChange,
        ...rest
    } = props

    const clientError = getIn(form.errors, `${field.name}.value`)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const handleChange: Select2ControlProps['onChange'] = (newValue, actionMeta) => {
        if (onChange) onChange(newValue, actionMeta)
        form.setFieldValue(field.name, newValue)
    }

    function handleBlur() {
        form.setFieldTouched(`${field.name}.value`, true, false)
    }

    return <BaseSelect2
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched ? (clientError || serverError) : ''}
        {...field}
        {...rest}
    />
}
