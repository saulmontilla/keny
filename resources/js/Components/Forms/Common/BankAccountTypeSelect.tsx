import React from 'react'
import FormikControl from '../Controls/FormikControl'

interface BankAccountTypeSelectProps {
    clientTypeId: number,
    name: string
}

export default function BankAccountTypeSelect(props: BankAccountTypeSelectProps) {
    let juridicAccountLabel: string

    juridicAccountLabel = props.clientTypeId === 2
        ? 'Cuenta de Persona natural / Firma personal'
        : 'Cuenta de Profesional de libre ejercicio'

    let accountTypeOptions = [
        { name: 'Seleccione documento a transferir', value: '' },
        { name: juridicAccountLabel, value: 'juridic' },
        { name: 'Cuenta de persona natural', value: 'natural' },
    ]

    return (
        <FormikControl
            control='select'
            name={props.name}
            options={accountTypeOptions}
            material
            label="Cuenta"
        />
    )
}
