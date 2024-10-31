import FormikControl from '@/Components/Forms/Controls/FormikControl'
import React from 'react'
import { Col, ColProps, Row } from 'react-bootstrap'

interface NameInputProps {
    name: string,
    lastName: string,
    col?: ColProps
}

export default function NameInput(props: NameInputProps) {
    return (
        <>
            <Col {...props.col}>
                <FormikControl
                    control='text'
                    name={props.name}
                    label='Nombres'
                    maxLength={30}
                    alpha
                    material
                    autoComplete="off"
                />
            </Col>
            <Col {...props.col}>
                <FormikControl
                    control='text'
                    name={props.lastName}
                    label='Apellidos'
                    maxLength={30}
                    alpha
                    material
                    autoComplete="off"
                />
            </Col>
        </>
    )
}
