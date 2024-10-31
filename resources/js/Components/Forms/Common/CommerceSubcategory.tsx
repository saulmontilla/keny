import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { CommerceCategory } from '@/types/user'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

export default function CommerceSubcategorySelect(props: Omit<Select2ControlProps, 'options'>) {
    const [categories, setCategories] = useState<CommerceCategory[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchSubcategories = () => {
        setLoading(true)
        setError(false)

        axios.get(`/commerce-categories/all/subcategories`)
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
        fetchSubcategories()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={() => fetchSubcategories()}
                text='Error al cargar subcategorias de comercio'
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            label='Subcategoría del comercio'
            options={categories.map(category => (
                { name: category.nombre, value: category.id }
            ))}
            loading={loading}
            placeholder='Seleccione subcategoría'
            material
            {...props}
        />
    )
}
