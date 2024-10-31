import React, { forwardRef } from 'react'
import LabelControl from '../LabelControl'
import { TextControlProps } from 'ubiionline/form'
import { isAlphabetic, isAlphaNumeric, isNumeric } from '../../../../Helpers'
import BaseErrorMessage from './BaseErrorMessage'
import UbiiIcon from '../../../UbiiIcon'

const BaseText = forwardRef<HTMLInputElement, TextControlProps>(function BaseText(props, ref) {
    const {
        label,
        id,
        name,
        className,
        labelClassName,
        error,
        numeric,
        alpha,
        alphaNumeric,
        onChange,
        icon,
        iconOnClick,
        blockEnter,
        material,
        ...rest
    } = props

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        if (!onChange) return

        if (numeric) {
            isNumeric(e.target.value) && onChange(e)
        } else if (alpha) {
            isAlphabetic(e.target.value) && onChange(e)
        } else if (alphaNumeric) {
            isAlphaNumeric(e.target.value) && onChange(e)
        } else {
            onChange(e)
        }
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (blockEnter) {
            if (e.key === 'Enter') return e.preventDefault()
        }
    }

    return (
        <>
            <div className="position-relative">
                {(label && !material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

                <input
                    type={numeric ? 'tel' : 'text'}
                    className={`
                        form-control 
                        ${className ? className : ''}
                        ${error ? 'is-invalid' : ''}
                        ${icon ? 'with-icon' : ''}
                        ${material ? 'material' : ''}
                        ${props.value ? 'material-filled' : ''}
                    `}
                    id={id || name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={ref}
                    {...rest}
                />

                {(label && material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

                <div className="input-b-border"></div>

                {icon && (
                    <span className='input-icon' onClick={iconOnClick}>
                        <UbiiIcon
                            icon={icon}
                            size='1.5em'
                        />
                    </span>
                )}
            </div>

            {error && <BaseErrorMessage error={error} />}
        </>
    )
})

export default BaseText
