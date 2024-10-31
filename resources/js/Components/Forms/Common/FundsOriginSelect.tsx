import FormikControl from '@/Components/Forms/Controls/FormikControl'
import TryAgain from '@/Components/TryAgain'
import { FundOrigin } from '@/types/user'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Select2ControlProps } from 'ubiionline/form'

export default function FundsOriginSelect(props: Omit<Select2ControlProps<FundOrigin[]>, 'options'>) {
    const [funds, setFunds] = useState<FundOrigin[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchFunds = () => {
        setLoading(true)
        setError(false)

        axios.get('/fund')
            .then(response => {
                setFunds(response.data)
                setLoading(false)
                props.onLoad && props.onLoad(response.data)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchFunds()
    }, [])

    if (error) {
        return (
            <TryAgain
                onRetry={fetchFunds}
                text='Error al cargar origen de fondos'
            />
        )
    }

    return (
        <FormikControl
            control='select2'
            label='¿De donde provienen los fondos?'
            options={funds.map(fund => (
                { name: fund.nombre, value: fund.id }
            ))}
            loading={loading}
            placeholder='Seleccione origen de sus fondos'
            material
            {...props}
        />
    )
}
