import React, { useState, useEffect } from 'react'
import FormikControl from '../../Controls/FormikControl'
import { Municipality } from '@/types/address'
import axios from 'axios'
import { getIn, useFormikContext } from 'formik'
import TryAgain from '@/Components/TryAgain'
import { CitySelectProps } from './CitySelect'

export default function MunicipalitySelect(props: CitySelectProps) {
    const [municipalities, setMunicipalities] = useState<Municipality[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const formik = useFormikContext<any>()
    const state = getIn(formik.values, `${props.stateName}.value`)
    const [stateInitialValue, setStateInitialValue] = useState(state)

    function fetchMunicipalities() {
        setLoading(true)
        setError(false)

        axios.get('/address/municipality', { params: { state } })
            .then(response => {
                setMunicipalities(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        if (state) {
            fetchMunicipalities()
        }

        const stateChanged = state !== stateInitialValue

        if (stateChanged || !state) {
            formik.setFieldValue(props.name, { label: 'Seleccione municipio', value: '' })
        }
    }, [state])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar los municipios'
                onRetry={fetchMunicipalities}
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            name={props.name}
            options={municipalities.map(municipality => (
                { name: municipality.municipio, value: municipality.id }
            ))}
            loading={loading}
            label='Municipio'
            isDisabled={!!!state}
            material
        />
    )
}
