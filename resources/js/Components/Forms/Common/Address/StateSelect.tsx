import React, { useState, useEffect } from 'react'
import FormikControl from '../../Controls/FormikControl'
import { State } from '@/types/address'
import axios from 'axios'
import TryAgain from '@/Components/TryAgain'
import { FormikControlCommonsProps } from 'ubiionline/form'

export default function StateSelect(props: FormikControlCommonsProps) {
    const [states, setStates] = useState<State[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function fetchStates() {
        setLoading(true)
        setError(false)

        axios.get('/address/state')
            .then(response => {
                setStates(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchStates()
    }, [])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar los estados'
                onRetry={fetchStates}
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            name={props.name}
            options={states.map(state => (
                { name: state.estado, value: state.id }
            ))}
            loading={loading}
            label='Estado'
            material
        />
    )
}
