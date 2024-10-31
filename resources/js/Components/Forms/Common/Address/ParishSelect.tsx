import React, { useState, useEffect } from 'react'
import FormikControl from '../../Controls/FormikControl'
import { Parish } from '@/types/address'
import axios from 'axios'
import { getIn, useFormikContext } from 'formik'
import TryAgain from '@/Components/TryAgain'
import { CitySelectProps } from './CitySelect'

interface ParishSelectProps {
    name: string,
    municipalityName: string
}

export default function ParishSelect(props: ParishSelectProps) {
    const [parishes, setparishes] = useState<Parish[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const formik = useFormikContext<any>()
    const municipality = getIn(formik.values, `${props.municipalityName}.value`)
    const [municipalityInitialValue, setMunicipalityInitialValue] = useState(municipality)

    function fetchParishes() {
        setLoading(true)
        setError(false)

        axios.get('/address/parish', { params: { municipality } })
            .then(response => {
                setparishes(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        if (municipality) {
            fetchParishes()
        }

        const municipalityChanged = municipality !== municipalityInitialValue

        if (municipalityChanged || !municipality) {
            formik.setFieldValue(props.name, { label: 'Seleccione parroquia', value: '' })
        }
    }, [municipality])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar las parroquias'
                onRetry={fetchParishes}
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            name={props.name}
            options={parishes.map(parish => (
                { name: parish.parroquia, value: parish.id }
            ))}
            loading={loading}
            label='Parroquia'
            isDisabled={!!!municipality}
            material
        />
    )
}
