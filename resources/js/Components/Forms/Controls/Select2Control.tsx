import { FieldProps, getIn } from 'formik'
import React from 'react'
import { Select2ControlProps } from 'ubiionline/form'
import BaseSelect2 from './Base/BaseSelect2'
import BaseSelect2Creatable from './Base/BaseSelect2Creatable'

export default function Select2Control(props: Select2ControlProps & FieldProps) {
    const {
        field: { onChange: formikOnChange, onBlur, ...field },
        form,
        meta,
        serverName,
        onChange,
        isCreatable,
        ...rest
    } = props

    let clientError = getIn(form.errors, `${field.name}`)

    if (typeof clientError === 'object') {
        clientError = clientError.value
    }

    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const handleChange: Select2ControlProps['onChange'] = (newValue, actionMeta) => {
        if (onChange) onChange(newValue, actionMeta)
        form.setFieldValue(field.name, newValue)
    }

    function handleBlur() {
        form.setFieldTouched(`${field.name}`, true, false)
    }

    if (isCreatable) {
        return <BaseSelect2Creatable
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched ? (clientError || serverError) : ''}
            {...field}
            {...rest}
        />
    }

    return <BaseSelect2
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched ? (clientError || serverError) : ''}
        {...field}
        {...rest}
    />
}
