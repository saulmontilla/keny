import { FieldProps, getIn } from 'formik'
import React, { useMemo, useState } from 'react'
import { CurrencyControlProps, CurrencyInputProps } from 'ubiionline/form'
import CurrencyInput from './CurrencyInput'
import ErrorMessageControl from './ErrorMessageControl'
import LabelControl from './LabelControl'
import styles from './CurrencyControl.module.css'
import { formatMonto } from '../../../Helpers'

/**
 * Transforma un valor string o numerico a la representacion 
 * entera utilizada por el componente de moneda 
 * CurrencyInput de botón de pagos
 */
export const ci_fromValue = (_value: string | number) => {
    let value: number

    if (typeof _value === 'string') {
        value = Number(_value) * 100
    } else {
        value = _value * 100
    }

    return Number(value.toFixed(0))
}

/**
 * Transforma la representación entera del componente
 * de moneda CurrencyInput de botón de pagos a su
 * valor real correspondiente
 */
export const ci_toValue = (_value: number) => {
    const value = _value / 100

    return Number(value.toFixed(2))
}

export default function CurrencyControl(props: CurrencyControlProps & FieldProps) {
    const {
        field: { onChange, ...field },
        form,
        meta,
        serverName,
        label,
        id,
        className,
        labelClassName,
        max,
        value,
        name,
        symbol,
        withConversion,
        material,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const handleChange: CurrencyInputProps['onValueChange'] = value => {
        form.setFieldValue(field.name, value, true)
    }

    const convertedValue = useMemo(() => {
        if (!withConversion) return formatMonto(0)

        const value = withConversion.converter(ci_toValue(field.value))

        return formatMonto(value)

    }, [field.value, withConversion])

    return (
        <>
            {(label && !material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

            <div className="position-relative">
                <CurrencyInput
                    name={field.name}
                    id={id || field.name}
                    onValueChange={handleChange}
                    onBlur={field.onBlur}
                    value={Number(field.value)}
                    max={999999999999999}
                    className={`
                    form-control 
                    ${className ? className : ''}
                    ${(touched && (clientError || serverError)) ? 'is-invalid' : ''}
                    ${symbol ? styles.withSymbolPadding : ''}
                    ${material ? 'material material-filled' : ''}
                `}

                    {...rest}
                />

                {(label && material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

                {symbol && (
                    <span
                        className={`
                            ${styles.symbolContainer}
                            ${material ? 'material' : ''}
                        `}
                    >
                        {symbol}
                    </span>
                )}

                {withConversion && (
                    <div className={styles.conversionContainer}>
                        <span className={styles.conversionSymbol}>
                            {withConversion.symbol}
                        </span>
                        {convertedValue}
                    </div>
                )}
            </div>

            <ErrorMessageControl name={field.name} serverName={serverName} />
        </>
    )
}
