import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { PhoneControlProps } from 'ubiionline/form'
import LabelControl from '../LabelControl'
import BaseErrorMessage from './BaseErrorMessage'
import es from 'react-phone-input-2/lang/es.json'

export default function BasePhone(props: PhoneControlProps) {
    const {
        countryCodeEditable = false,
        inputStyle = { width: '100%' },
        country = 've',
        masks = { ve: '(...) ...-....' },
        label,
        name,
        id,
        labelClassName,
        error,
        localization = es
    } = props

    return (
        <>
            {label && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

            <PhoneInput
                countryCodeEditable={countryCodeEditable}
                inputStyle={inputStyle}
                country={country}
                masks={masks}
                localization={localization}
                {...props}
            />

            {error && <BaseErrorMessage error={error} />}
        </>
    )
}
