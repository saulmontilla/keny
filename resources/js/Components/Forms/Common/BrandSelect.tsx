import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { Brand } from '@/types/service'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

export default function BrandSelect(props: Omit<Select2ControlProps, 'options'>) {
    const [brands, setBrands] = useState<Brand[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchBrands = () => {
        setLoading(true)
        setError(false)

        axios.get('/brand')
            .then(response => {
                setBrands(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchBrands}
                text='Error al cargar los modelos'
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            label='Modelo'
            options={brands.map(brand => (
                { name: brand.name, value: brand.id }
            ))}
            loading={loading}
            placeholder='Seleccione modelo'
            material
            {...props}
        />
    )
}
