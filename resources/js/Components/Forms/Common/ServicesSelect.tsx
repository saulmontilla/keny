import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { Service } from '@/types/service'
import axios from 'axios'
import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

export default function ServicesSelect(props: Omit<Select2ControlProps, 'options'>) {
    const [services, setServices] = useState<Service[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const formik = useFormikContext()
    console.log(formik.errors, formik.values)

    const fetchServices = () => {
        setLoading(true)
        setError(false)

        axios.get('/service')
            .then(response => {
                setServices(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchServices()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchServices}
                text='Error al cargar los servicios'
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            label='Servicio'
            options={services.map(service => (
                { name: service.nombre, value: service.id }
            ))}
            loading={loading}
            placeholder='Seleccione servicio'
            material
            {...props}
        />
    )
}
