import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { EconomicActivity } from '@/types/user'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

interface EconomicActivitySelectProps {
    mtCode?: string
}

export default function EconomicActivityTypeSelect(props: Omit<Select2ControlProps, 'options'> & EconomicActivitySelectProps) {
    const [activities, setActivities] = useState<EconomicActivity[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchActivities = () => {
        setLoading(true)
        setError(false)

        axios.get('/economic-activity')
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

    const value = useMemo(() => {
        if (props.mtCode) {
            const activity = activities.find(activity => activity.mt_code === props.mtCode)

            return {
                value: { label: activity?.nombre, value: activity?.mt_code }
            }
        }

        return {}
    }, [props.mtCode, activities])

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
            {...value}
            {...props}
        />
    )
}
