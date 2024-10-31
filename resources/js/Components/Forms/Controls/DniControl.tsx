import { FieldProps, getIn } from 'formik'
import React from 'react'
import { DniControlProps } from 'ubiionline/form'
import BaseText from './Base/BaseText'
import { isNumeric, prependZerosToRif } from '@/Helpers'

export default function DniControl(props: DniControlProps & FieldProps) {
    const {
        field: { onChange: formikOnChange, onBlur: formikOnBlur, ...field },
        form,
        meta,
        serverName,
        onChange,
        ref,
        letters = 'all',
        prependZeros = false,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const naturalLetters = ['V', 'E']
    const juridicLetters = ['J', 'C', 'G']
    const passportLetters = ['P']

    let selectLetters: Array<string>

    if (Array.isArray(letters)) {
        selectLetters = letters
    } else {
        switch (letters) {
            case 'natural':
                selectLetters = naturalLetters
                break
            case 'juridic':
                selectLetters = juridicLetters
                break
            case 'passport':
                selectLetters = passportLetters
                break
            default:
                selectLetters = [
                    ...naturalLetters,
                    ...juridicLetters,
                    ...passportLetters
                ]
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        const value = e.target.value.toUpperCase()
        e.target.value = value

        let pattern = `^[${selectLetters.join('')}]-\\d*$|^[${selectLetters.join('')}]$`

        if (selectLetters.includes('P')) {
            pattern = pattern.concat('|^[P]-[A-Z0-9]*$')
        }

        const regex = new RegExp(pattern)

        if (onChange) onChange(e)

        if (!value) formikOnChange(e)

        if (isNumeric(e.target.value, true)) {
            e.target.value = selectLetters[0] + '-' + value
            formikOnChange(e)
            return
        }

        if (regex.test(value)) {
            const deleting = field.value > value

            if (value.length === 1 && !deleting) {
                e.target.value = value + '-'
            }

            formikOnChange(e)
        }
    }


    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        if (prependZeros && e.target.value.length > 2) {
            e.target.value = prependZerosToRif(e.target.value)
            formikOnBlur(e)
            formikOnChange(e)
        } else {
            formikOnBlur(e)
        }
    }

    return <BaseText
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched ? (clientError || serverError) : ''}
        maxLength={11}
        {...field}
        {...rest}
    />
}