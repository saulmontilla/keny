import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getIn, useFormikContext } from 'formik'
import TryAgain from '@/Components/TryAgain'
import { BrandModel } from '@/types/service'
import FormikControl from '../Controls/FormikControl'
import { Select2ControlProps } from 'ubiionline/form'

export interface BrandModelSelectProps extends Omit<Select2ControlProps, 'options'> {
    name: string,
    brandName: string
}

export default function BrandModelSelect(props: BrandModelSelectProps) {
    const { name, brandName, ...select2Props } = props
    const [brandModels, setBrandModels] = useState<BrandModel[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const formik = useFormikContext<any>()
    const brand = getIn(formik.values, `${props.brandName}.value`)
    const [brandInitialValue, setBrandInitialValue] = useState(brand)

    function fetchBrandModels() {
        setLoading(true)
        setError(false)

        axios.get('/brand/model', { params: { brand } })
            .then(response => {
                setBrandModels(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        if (brand) {
            fetchBrandModels()
        }

        const brandChanged = brand !== brandInitialValue

        if (brandChanged || !brand) {
            formik.setFieldValue(props.name, { label: 'Seleccione modelo', value: '' })
        }
    }, [brand])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar los modelos'
                onRetry={fetchBrandModels}
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            name={props.name}
            options={brandModels.map(model => (
                { name: model.name, value: model.id }
            ))}
            loading={loading}
            label='Modelo'
            isDisabled={!!!brand}
            material
            {...select2Props}
        />
    )
}
