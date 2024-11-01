import { Form, Formik } from 'formik'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FormikControl from '../Forms/Controls/FormikControl'

export default function CreateServiceForm() {
    return (
        <Formik
            initialValues={{}}
            onSubmit={values => {
                console.log('Form data', values)
            }}
        >
            <Form>
                <Row>
                    <Col md="3">
                        <FormikControl
                            control='text'
                            name="plate"
                            label="Placa"
                            material
                        />
                    </Col>
                    <Col md="3">
                        <FormikControl
                            control='text'
                            name="model"
                            label="Modelo"
                            material
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormikControl
                            control="textarea"
                            name="description"
                            label="Descripción"
                            material
                        />
                    </Col>
                </Row>
            </Form>
        </Formik>
    )
}
