import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import FormikControl from '../../Forms/Controls/FormikControl'
import ServicesSelect from '../../Forms/Common/ServicesSelect'
import { WorkRepository } from '@/Repositories/Dashboard/WorkRepository'
import { CreateWorkSchema } from '@/Schemas/Dashboard/CreateWorkSchema'
import AmountSetction from './AmountSetction'
import ServiceSelectSection from './ServiceSelectSection'

export default function CreateWorkForm() {
    const Work = new WorkRepository

    return (
        <Formik
            initialValues={CreateWorkSchema.initialValues}
            validationSchema={CreateWorkSchema.validationSchema}
            onSubmit={async (values, actions) => {
                await Work.preConfirm(() => Work.store(values, actions))
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
                    <Col md="3">
                        <FormikControl
                            control='date-picker'
                            name='date'
                            label='Fecha'
                            placeholderText='dd/mm/yyyy'
                            material
                        />
                    </Col>
                </Row>

                <ServiceSelectSection />

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

                <AmountSetction />

                <Row className="mt-3">
                    <Col md="3" className='mx-md-auto'>
                        <div className="d-grid">
                            <Button type="submit">
                                Guardar
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Formik>
    )
}
