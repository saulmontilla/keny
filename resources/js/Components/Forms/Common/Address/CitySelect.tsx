import React, { useState, useEffect } from 'react'
import FormikControl from '../../Controls/FormikControl'
import { City } from '@/types/address'
import axios from 'axios'
import { getIn, useFormikContext } from 'formik'
import TryAgain from '@/Components/TryAgain'

export interface CitySelectProps {
    name: string,
    stateName: string
}

export default function CitySelect(props: CitySelectProps) {
    const [cities, setCities] = useState<City[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const formik = useFormikContext<any>()
    const state = getIn(formik.values, `${props.stateName}.value`)
    const [stateInitialValue, setStateInitialValue] = useState(state)

    function fetchCities() {
        setLoading(true)
        setError(false)

        axios.get('/address/city', { params: { state } })
            .then(response => {
                setCities(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        if (state) {
            fetchCities()
        }

        const stateChanged = state !== stateInitialValue

        if (stateChanged || !state) {
            formik.setFieldValue(props.name, { label: 'Seleccione ciudad', value: '' })
        }
    }, [state])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar las ciudades'
                onRetry={fetchCities}
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            name={props.name}
            options={cities.map(city => (
                { name: city.ciudad, value: city.id }
            ))}
            loading={loading}
            label='Ciudad'
            isDisabled={!!!state}
            material
        />
    )
}
