import React from 'react'
import { SelectControlProps } from 'ubiionline/form'
import LabelControl from '../LabelControl'
import BaseErrorMessage from './BaseErrorMessage'
import CenteredSpinner from './CenteredSpinner'

export default function BaseSelect(props: SelectControlProps) {
    const {
        name,
        id,
        label,
        className,
        labelClassName,
        error,
        errorClassName,
        options,
        firstOption,
        loading,
        loadingText = 'Cargando...',
        material,
        ...rest
    } = props

    const loadingOption = (
        <option value="">
            {loadingText}
        </option>
    )

    const optionsList = options.map((option, index) => (
        <option value={option.value} key={index}>
            {option.name}
        </option>
    ))

    return (
        <>
            {(label && !material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

            <div className="position-relative">
                <select
                    className={`
                        form-control
                        ${className ? className : ''}
                        ${error ? 'is-invalid' : ''}
                        ${loading ? 'text-black-50' : ''}
                        ${material ? 'material' : ''}
                    `}
                    id={id || name}
                    {...rest}
                >
                    {loading 
                        ? loadingOption 
                        : (
                            <>
                                {firstOption && <option value="">{firstOption}</option>}
                                {optionsList}
                            </>
                        )
                    }
                </select>

                {(label && material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

                {error && <BaseErrorMessage error={error} />}

                {loading && <CenteredSpinner />}
            </div>
        </>
    )
}
