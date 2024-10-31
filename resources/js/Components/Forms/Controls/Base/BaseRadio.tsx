import React from 'react'
import { RadioControlProps } from 'ubiionline/form'
import LabelControl from '../LabelControl'

export default function BaseRadio(props: RadioControlProps) {
    const {
        serverName,
        label,
        className,
        labelClassName,
        labelPosition = 'left',
        inline,
        ...rest
    } = props

    return (
        <div
            className={`
                form-check ${inline ? 'form-check-inline' : ''} 
                label-${labelPosition}
                ${className ? className : ''}
            `}
            style={{ position: 'relative' }}
        >
            <input
                type="radio"
                style={{ position: 'absolute' }}
                className={`
                form-check-input m-0
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
