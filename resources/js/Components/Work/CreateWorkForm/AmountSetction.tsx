import { CreateWorkSchema } from '@/Schemas/Dashboard/CreateWorkSchema'
import { useFormikContext } from 'formik'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { ci_toValue } from '@/Components/Forms/Controls/CurrencyControl'

export default function AmountSetction() {
    const formik = useFormikContext<CreateWorkSchema['initialValues']>()
    const { servicesWithAmount } = formik.values
    const totalAmount = servicesWithAmount.reduce((accumulator, service) => {
        accumulator += ci_toValue(service.base_amount)

        return accumulator
    }, 0)

    if (servicesWithAmount.length === 0) return null

    return (
        <>
            <Row className='my-3'>
                <Col>
                    <h4>
                        Monto
                    </h4>
                </Col>
            </Row>

            {servicesWithAmount.map((service, index) => (
                <Row>
                    <Col md="3" className='d-flex align-items-center' style={{ borderBottom: '1px solid black' }}>
                        {service.name}
                    </Col>
                    <Col md="3" style={{ borderBottom: '1px solid black' }}>
                        <FormikControl
                            control='currency'
                            name={`servicesWithAmount.${index}.base_amount`}
                            label="Monto"
                            material
                        />
                    </Col>
                </Row>
            ))}

            {servicesWithAmount.length > 1 && (
                <Row className='mt-2'>
                    <Col md="3" style={{ borderBottom: '1px solid black' }}>
                        <strong>
                            Total en servicios
                        </strong>
                    </Col>
                    <Col md="3" style={{ borderBottom: '1px solid black' }}>
                        <strong>
                            {totalAmount}
                        </strong>
                    </Col>
                </Row>
            )}

            <Row className="mt-3">
                <Col md="3" style={{ borderBottom: '1px solid black' }}>
                    Materiales
                </Col>
                <Col md="3" style={{ borderBottom: '1px solid black' }}>
                    <FormikControl
                        control='currency'
                        name='materials'
                        label="Materiales"
                        material
                    />
                </Col>
            </Row>
            <Row className="mt-3" >
                <Col md="3" style={{ borderBottom: '1px solid black' }}>
                    Mano de obra
                </Col>
                <Col md="3" style={{ borderBottom: '1px solid black' }}>
                    <FormikControl
                        control='currency'
                        name='labour'
                        label="Materiales"
                        material
                    />
                </Col>
            </Row>
        </>
    )
}
