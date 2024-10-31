import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { Profession } from '@/types/user'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

export default function ProfessionSelect(props: Omit<Select2ControlProps<Profession[]>, 'options'>) {
    const [professions, setProfessions] = useState<Profession[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchProfessions = () => {
        setLoading(true)
        setError(false)

        axios.get('/profession')
            .then(response => {
                setProfessions(response.data)
                setLoading(false)

                props.onLoad && props.onLoad(response.data)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchProfessions()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchProfessions}
                text='Error al cargar profesiones'
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            label='Profesión u ocupación'
            options={professions.map(profession => (
                { name: profession.nombre, value: profession.id }
            ))}
            loading={loading}
            placeholder='Seleccione profesión'
            material
            {...props}
        />
    )
}
