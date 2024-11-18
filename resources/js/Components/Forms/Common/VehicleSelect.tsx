import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { Brand, Vehicle } from '@/types/service'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

export default function VehicleSelect(props: Omit<Select2ControlProps, 'options'>) {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchVehicles = () => {
        setLoading(true)
        setError(false)

        axios.get('/dashboard/config/vehicle/all')
            .then(response => {
                setVehicles(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchVehicles()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchVehicles}
                text='Error al cargar los vehiculos'
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            label='Vehiculo'
            options={vehicles.map(vehicule => (
                {
                    name: `${vehicule.brand.name} ${vehicule.model.name} ${vehicule.year}`,
                    value: vehicule.id
                }
            ))}
            loading={loading}
            placeholder='Seleccione vehiculo'
            material
            {...props}
        />
    )
}
