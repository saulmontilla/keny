import React, { forwardRef } from 'react'
import LabelControl from '../LabelControl'
import { TextAreaControlProps } from 'ubiionline/form'
import BaseErrorMessage from './BaseErrorMessage'

const BaseTextArea = forwardRef<HTMLTextAreaElement, TextAreaControlProps>(function BaseText(props, ref) {
    const {
        label,
        id,
        name,
        className,
        labelClassName,
        error,
        material,
        ...rest
    } = props

    return (
        <>
            <div className="position-relative">
                {(label && !material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

                <textarea
                    className={`
                        form-control 
                        ${className ? className : ''}
                        ${error ? 'is-invalid' : ''}
                        ${material ? 'material' : ''}
                        ${props.value ? 'material-filled' : ''}
                    `}
                    id={id || name}
                    ref={ref}
                    {...rest}
                />

                {(label && material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}
            </div>

            {error && <BaseErrorMessage error={error} />}
        </>
    )
})

export default BaseTextArea
