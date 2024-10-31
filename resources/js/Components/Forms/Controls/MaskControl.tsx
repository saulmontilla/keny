import { FieldProps, getIn } from 'formik';
import React from 'react'
import { IMaskInput } from 'react-imask';
import { MaskControlProps } from 'ubiionline/form';
import BaseErrorMessage from './Base/BaseErrorMessage';
import LabelControl from './LabelControl';

export default function MaskControl(props: MaskControlProps & FieldProps) {
    const {
        field: { onChange, ...field },
        form,
        meta,
        id,
        serverName,
        className,
        labelClassName,
        label,
        material,
        unmask = true,
        ...rest
    } = props

    const handleChange = (value: any) => {
        form.setFieldValue(field.name, value)
    }

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)
    const showError = !!(touched && (clientError || serverError))

    return (
        <>
            <div className="position-relative">
                {(label && !material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

                <IMaskInput
                    className={`
                        form-control
                        ${showError ? 'is-invalid' : ''}
                        ${className ? className : ''}
                        ${material ? 'material' : ''}
                        ${field.value ? 'material-filled' : ''}
                    `}
                    unmask={unmask}
                    onAccept={(value, mask) => handleChange(value)}
                    id={id || field.name}
                    type="text"
                    {...field}
                    {...rest}
                />

                {(label && material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

                <div className="input-b-border"></div>

            </div>
            {showError && <BaseErrorMessage error={clientError || serverError} />}
        </>
    )
}