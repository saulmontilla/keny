import TryAgain from '@/Components/TryAgain'
import useFetch from '@/Hooks/useFetch'
import React, { useEffect, useState } from 'react'
import FormikControl from '../../Controls/FormikControl'
import { getIn, useFormikContext } from 'formik'
import { ZipCode } from '@/types/address'

interface ZipCodeSelectProps {
    name: string,
    stateName: string,
}

export default function ZipCodeSelect(props: ZipCodeSelectProps) {
    const [zipCodes, loading, error, fetchZipCodes] = useFetch<ZipCode[]>({
        url: '/address/zip-code',
        initialValue: []
    })
    const formik = useFormikContext<any>()
    const state = getIn(formik.values, `${props.stateName}.value`)
    const [stateInitialValue, setStateInitialValue] = useState(state)

    useEffect(() => {
        if (state) {
            fetchZipCodes({ params: { state_id: state } })
        }

        const stateChanged = state !== stateInitialValue

        if (stateChanged || !state) {

            formik.setFieldValue(props.name, { label: 'Seleccione código postal', value: '' })
        }
    }, [state])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar los códigos postales'
                onRetry={() => fetchZipCodes({ params: { state_id: state } })}
            />
        )
    }
    return (
        <FormikControl
            control='select2'
            name={props.name}
            options={zipCodes.map(zipCode => (
                { name: `${zipCode.codigo} ${zipCode.descripcion}`, value: zipCode.id }
            ))}
            loading={loading}
            label='Código postal'
            isDisabled={!!!state}
            material
        />
    )
}
