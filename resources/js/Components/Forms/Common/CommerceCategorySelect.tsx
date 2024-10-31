import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { CommerceCategory } from '@/types/user'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

export default function CommerceCategorySelect(props: Omit<Select2ControlProps, 'options'>) {
    const [categories, setCategories] = useState<CommerceCategory[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchCategories = () => {
        setLoading(true)
        setError(false)

        axios.get('/commerce-categories')
            .then(response => {
                setCategories(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchCategories}
                text='Error al cargar categorias de comercio'
            />
        )
    }


    return (
        <FormikControl
            control='select2'
            label='Categoría del comercio'
            options={categories.map(category => (
                { name: category.nombre, value: category.id }
            ))}
            loading={loading}
            placeholder='Seleccione categoría'
            material
            {...props}
        />
    )
}
