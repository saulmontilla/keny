
import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { ServiceType } from '@/types/service'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SelectControlProps } from 'ubiionline/form'

export default function ServiceTypeSelect(props: Omit<SelectControlProps, 'options'>) {
    const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchServiceTypes = () => {
        setLoading(true)
        setError(false)

        axios.get('/service/type')
            .then(response => {
                setServiceTypes(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchServiceTypes()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchServiceTypes}
                text='Error al cargar los tipos de servicio'
            />
        )
    }

    return (
        <FormikControl
            control='select'
            label='Tipo de Servicio'
            options={serviceTypes.map(serviceType => (
                { name: serviceType.name, value: serviceType.id }
            ))}
            loading={loading}
            material
            {...props}
        />
    )
}