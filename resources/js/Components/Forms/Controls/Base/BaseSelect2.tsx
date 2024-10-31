import React from 'react'
import { Select2ControlProps } from 'ubiionline/form'
import CenteredSpinner from './CenteredSpinner'
import LabelControl from '../LabelControl'
import BaseErrorMessage from './BaseErrorMessage'
import Select from 'react-select';

export default function BaseSelect2(props: Select2ControlProps) {
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
        value,
        material,
        ...rest
    } = props

    const loadingValue = {
        value: '',
        label: loadingText
    }

    let optionsList = options.map(option => (
        {
            value: option.value,
            label: option.name
        }
    ))

    if (firstOption) {
        optionsList = [
            { value: '', label: firstOption },
            ...optionsList
        ]
    }

    return (
        <>
            {(label && !material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

            <div className="position-relative">
                <Select
                    id={id || name}
                    options={optionsList}
                    value={loading ? loadingValue : value}
                    className={`
                        select2 
                        ${className ? className : ''}
                        ${material ? 'material' : ''}
                    `}
                    {...rest}
                />

                {(label && material) && <LabelControl name={name} id={id} text={label} className={labelClassName} />}

                {error && <BaseErrorMessage error={error} />}

                {loading && <CenteredSpinner />}
            </div>
        </>
    )
}
