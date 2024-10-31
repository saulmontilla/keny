import { FieldProps, getIn } from 'formik'
import React, { useEffect, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { CountriesControlProps, ReactFlagsSelectProps } from 'ubiionline/form';
import ErrorMessageControl from './ErrorMessageControl';
import LabelControl from './LabelControl';
import { Country } from '@/types/address';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import TryAgain from '@/Components/TryAgain';

export default function CountriesControl(props: CountriesControlProps & FieldProps) {
    const {
        field: { onChange: formikOnChange, ...field },
        form,
        meta,
        id,
        serverName,
        label,
        labelClassName,
        selectButtonClassName,
        material,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)
    const [countries, setCountries] = useState<Country[]>([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    function fetchCountries() {
        setError(false)
        setLoading(true)

        axios.get('/ubiiapp/country')
            .then(response => {
                setCountries(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    const handleSelect: ReactFlagsSelectProps['onSelect'] = code => {
        form.setFieldValue(field.name, code)
    }

    if (error) {
        return <TryAgain
            onRetry={fetchCountries}
            text='Error al consultar los paises'
        />
    }

    return (
        <div className={`flags-select-container ${material ? 'material' : ''}`}>
            {(label && !material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

            <ReactFlagsSelect
                selected={field.value}
                onSelect={handleSelect}
                selectButtonClassName={`
                    btn-flags-u 
                    ${selectButtonClassName ? selectButtonClassName : ''}
                    ${(touched && (clientError || serverError)) ? 'is-invalid' : ''}
                `}
                placeholder="Seleccione el país"
                searchPlaceholder='Buscar'
                customLabels={{
                    'ES': { primary: 'España' },
                    'US': { primary: 'Estados Unidos' },
                    'VE': { primary: 'Venezuela' }
                }}
                className='flags-select'
                countries={countries.map(country => country.lugar_alph_2)}
                disabled={loading}
                {...rest}
            />

            {(label && material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

            {loading && (
                <div className="loading-container">
                    <Spinner animation='border' variant='u-blue' />
                </div>
            )}

            <ErrorMessageControl name={field.name} serverName={serverName} />
        </div>
    )
}
