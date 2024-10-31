import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { EconomicActivity } from '@/types/user'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

interface EconomicActivitySelectProps {
    clientType: 'juridic' | 'natural'
}

export default function EconomicActivitySelect(props: Omit<Select2ControlProps, 'options'> & EconomicActivitySelectProps) {
    const [activities, setActivities] = useState<EconomicActivity[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchActivities = () => {
        setLoading(true)
        setError(false)

        const typeId = props.clientType === 'juridic'
            ? 1
            : 2

        axios.get('/economic-activity', { params: { clientType: typeId } })
            .then(response => {
                setActivities(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchActivities()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchActivities}
                text='Error al cargar actividades economicas'
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            label='Actividad económica'
            options={activities.map(activity => (
                { name: activity.nombre, value: activity.id }
            ))}
            loading={loading}
            placeholder='Seleccione actividad'
            material
            {...props}
        />
    )
}
