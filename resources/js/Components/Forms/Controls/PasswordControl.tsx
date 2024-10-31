import { FieldProps, getIn } from 'formik'
import React, { useState } from 'react'
import { regextPassCar, regextPassMay, regextPassMin, regextPassNum, regexCharacterConsecutive, isNumeric } from '../../../Helpers'
import { PasswordControlProps, PasswordRequirement, PasswordRule } from 'ubiionline/form'
import UbiiIcon from '../../UbiiIcon'
import ErrorMessageControl from './ErrorMessageControl'
import LabelControl from './LabelControl'
import css from './PasswordControl.module.css'
import PasswordRequirementsContainer from './PasswordRequirementsContainer'
import BaseText from './Base/BaseText'

export default function PasswordControl(props: PasswordControlProps & FieldProps) {
    const {
        field: { onChange, ...field },
        form,
        meta,
        withValidation,
        serverName,
        numeric,
        ref,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [requirements, setRequirements] = useState<PasswordRequirement[]>([
        { name: 'length', description: 'Debe contener almenos 8 caracteres', status: false },
        { name: 'lowercase', description: 'Debe contener almenos 1 letra en minúscula', status: false },
        { name: 'uppercase', description: 'Debe contener almenos 1 letra en mayúscula', status: false },
        { name: 'specialCharacter', description: 'Debe contener almenos 1 caracter especial', status: false },
        { name: 'number', description: 'Debe contener almenos 1 número', status: false },
        { name: 'consecutive', description: 'No puede contener 3 caracteres consecutivos iguales', status: false }
    ])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        if (numeric) {
            isNumeric(e.target.value) && onChange(e)
        } else {
            onChange(e)
        }

        if (withValidation) {
            validateThrough(e.currentTarget.value, [
                lengthRule,
                lowercaseRule,
                uppercaseRule,
                specialCharacterRule,
                numberRule,
                consecutiveRule
            ])
        }
    }

    const validateThrough = (password: string, rules: PasswordRule[]) => {
        rules.forEach(rule => {
            const validation = rule(password)

            setRequirements(requirements.map(requirement => {
                if (requirement.name === validation.requirement) {
                    requirement.status = validation.passes
                }

                return requirement
            }))
        })
    }

    const lengthRule: PasswordRule = password => {
        return {
            requirement: 'length',
            passes: password.length >= 8
        }
    }

    const lowercaseRule: PasswordRule = password => {
        return {
            requirement: 'lowercase',
            passes: regextPassMin.test(password)
        }
    }

    const uppercaseRule: PasswordRule = password => {
        return {
            requirement: 'uppercase',
            passes: regextPassMay.test(password)
        }
    }

    const specialCharacterRule: PasswordRule = password => {
        return {
            requirement: 'specialCharacter',
            passes: regextPassCar.test(password)
        }
    }

    const numberRule: PasswordRule = password => {
        return {
            requirement: 'number',
            passes: regextPassNum.test(password)
        }
    }

    const consecutiveRule: PasswordRule = password => {
        return {
            requirement: 'consecutive',
            passes: !regexCharacterConsecutive.test(password)
        }
    }

    return (
        <>
            <BaseText
                numeric={numeric}
                type={isPasswordVisible ? numeric ? 'tel' : 'text' : 'password'}
                onChange={handleChange}
                icon={isPasswordVisible ? 'eye' : 'eye-slash'}
                iconOnClick={() => setIsPasswordVisible(!isPasswordVisible)}
                error={touched ? (clientError || serverError) : ''}
                {...field}
                {...rest}
            />

            {/* <div className={css.inputContainer}>
                <input
                    type={isPasswordVisible ? numeric ? 'tel' : 'text' : 'password'}
                    className={`
                        form-control 
                        ${css.input}
                        ${className ? className : ''}
                        ${(touched && (clientError || serverError)) ? 'is-invalid' : ''}
                    `}
                    id={id || field.name}
                    onChange={handleChange}
                    {...field}
                    {...rest}
                />

                <span
                    className={css.iconContainer}
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    {isPasswordVisible
                        ? <UbiiIcon icon="eye" />
                        : <UbiiIcon icon="eye-slash" />
                    }
                </span>
            </div>

            <ErrorMessageControl name={field.name} serverName={serverName} /> */}

            {withValidation && <PasswordRequirementsContainer requirements={requirements} />}
        </>
    )
}
