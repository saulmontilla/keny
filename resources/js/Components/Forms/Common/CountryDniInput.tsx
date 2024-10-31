import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { getIn, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { Col, ColProps, Row } from 'react-bootstrap'
import { RegisterSchema } from '../../../Schemas/RegisterSchema'
import { DniControlProps } from 'ubiionline/form'

interface CountryDniInputProps {
    countryName: string,
    dniName: string,
    col?: ColProps
}

export default function CountryDniInput(props: CountryDniInputProps) {
    const formik = useFormikContext<RegisterSchema['initialValues']>()
    const country = getIn(formik.values, props.countryName)
    const [letters, setLetters] = useState<DniControlProps['letters']>('natural')
    const dni: string = getIn(formik.values, props.dniName)

    useEffect(() => {
        let letter: string

        if (country === 'VE') {
            letter = 'V'
            setLetters('natural')
        } else {
            letter = 'P'
            setLetters('passport')
        }

        const _value = letter + '-' + dni.substring(2)

        formik.setFieldValue(props.dniName, _value)
    }, [country])

    return (
        <>
            <Col {...props.col}>
                <FormikControl
                    control="countries"
                    name={props.countryName}
                    label='Nacionalidad'
                    searchable
                    material
                />
            </Col>
            <Col {...props.col}>
                <FormikControl
                    control='dni'
                    name={props.dniName}
                    letters={letters}
                    material
                    label='Número de documento'
                    autoComplete="off"
                />
            </Col>
        </>
    )
}
