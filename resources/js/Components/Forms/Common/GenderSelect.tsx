import FormikControl from '@/Components/Forms/Controls/FormikControl'
import React from 'react'
import { SelectControlProps } from 'ubiionline/form'

export default function GenderSelect(props: Omit<SelectControlProps, 'options'>) {
    return (
        <FormikControl
            control='select'
            label='Género'
            options={[
                { name: 'Hombre', value: 'm' },
                { name: 'Mujer', value: 'f' },
                { name: 'Otro', value: 'o' },
            ]}
            firstOption='Seleccione género'
            material
            {...props}
        />
    )
}
