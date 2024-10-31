import { FieldProps, getIn } from 'formik'
import React, { useEffect, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { CardControlProps } from 'ubiionline/form'
import BaseErrorMessage from './Base/BaseErrorMessage'
import LabelControl from './LabelControl'
import css from './CardControl.module.css'
import { getCardLogoPath } from '../../../Helpers'

export default function CardControl(props: CardControlProps & FieldProps) {
    const {
        field: { onChange, ...field },
        form,
        meta,
        name,
        id,
        serverName,
        className,
        labelClassName,
        label,
        ...rest
    } = props

    const [img, setImage] = useState('/img/banks/cards/blank.png')

    const handleChange = (value: any) => {
        form.setFieldValue(field.name, value)
    }

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)
    const showError = !!(touched && (clientError || serverError))

    useEffect(() => {
        setImage(getCardLogoPath(field.value))
    }, [field.value])

    return (
        <>
            {label && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

            <div className={css.container}>
                <IMaskInput
                    className={`
                form-control
                ${showError ? 'is-invalid' : ''}
                ${className ? className : ''}
            `}
                    mask='0000-0000-0000-000000'
                    unmask={true}
                    onAccept={(value, mask) => handleChange(value)}
                    id={id || field.name}
                    type="tel"
                    {...field}
                    {...rest}
                />

                {showError && <BaseErrorMessage error={clientError || serverError} />}

                <span className={css.imgContainer}>
                    <img src={img} alt="logo de tarjeta" />
                </span>
            </div>
        </>
    )
}
