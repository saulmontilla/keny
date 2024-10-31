import React from 'react'
import { CheckboxControlProps } from 'ubiionline/form'
import LabelControl from '../LabelControl'

export default function BaseCheckbox(props: CheckboxControlProps) {
    const {
        label,
        className,
        labelClassName,
        inline = true,
        switchMode,
        ...rest
    } = props

    if (switchMode) {
        return (
            <div className="form-check form-switch">
                <input type="checkbox" className={`form-check-input ${className}`} {...rest} />
                <label className={`form-check-label fz-u-12 mb-0 cursor-pointer ${labelClassName}`} htmlFor={props.id || props.name}>
                    {label}
                </label>
            </div>
        )
    }

    return (
        <div className={`form-check ${inline ? 'form-check-inline' : ''}`}>
            <input
                type="checkbox"
                className={`
                    form-check-input
                    ${className ? className : ''}
                `}
                {...rest}
            />

            {label && (
                <LabelControl
                    name={props.name}
                    id={props.id}
                    text={label}
                    className={`form-check-label cursor-pointer ${labelClassName}`}
                />
            )}
        </div>
    )
}
