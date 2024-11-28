import { FieldArray, Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import FormikControl from '../../Forms/Controls/FormikControl'
import { WorkRepository } from '@/Repositories/Dashboard/WorkRepository'
import { CreateWorkSchema } from '@/Schemas/Dashboard/CreateWorkSchema'
import AmountSetction from './AmountSetction'
import VehicleSelect from '@/Components/Forms/Common/VehicleSelect'

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
                            maxLength={15}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                        <FormikControl
                            control='date-picker'
                            name='date'
                            label='Fecha'
                            placeholderText='dd/mm/yyyy'
                            material
                            maxDate={new Date()}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <VehicleSelect
                            name='vehicle'
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

                <FieldArray
                    name='services'
                >
                    {arrayHelpers => (
                        <AmountSetction arrayHelpers={arrayHelpers} />
                    )}
                </FieldArray>

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
