import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getIn, useFormikContext } from 'formik'
import TryAgain from '@/Components/TryAgain'
import { BrandYear } from '@/types/service'
import FormikControl from '../Controls/FormikControl'
import { Select2ControlProps } from 'ubiionline/form'

export interface BrandYearSelectProps extends Omit<Select2ControlProps, 'options'> {
    name: string,
    brandModelName: string
}

export default function BrandYearSelect(props: BrandYearSelectProps) {
    const { name, brandModelName, ...select2Props } = props
    const [brandYears, setBrandYears] = useState<BrandYear[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const formik = useFormikContext<any>()
    const brandModel = getIn(formik.values, `${props.brandModelName}.value`)
    const [brandModelInitialValue, setBrandModelInitialValue] = useState(brandModel)

    function fetchBrandYears() {
        setLoading(true)
        setError(false)

        axios.get('/brand/year', { params: { brandModel } })
            .then(response => {
                setBrandYears(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        if (brandModel) {
            fetchBrandYears()
        }

        const brandModelChanged = brandModel !== brandModelInitialValue

        if (brandModelChanged || !brandModel) {
            formik.setFieldValue(props.name, { label: 'Seleccione año', value: '' })
        }
    }, [brandModel])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar los años'
                onRetry={fetchBrandYears}
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            name={props.name}
            options={brandYears.map(year => (
                { name: year.year.toString(), value: year.id }
            ))}
            loading={loading}
            label='Año'
            isDisabled={!!!brandModel}
            material
            {...select2Props}
        />
    )
}
