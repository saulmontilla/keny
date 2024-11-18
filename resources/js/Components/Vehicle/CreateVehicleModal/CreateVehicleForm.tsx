import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Modal, Row, Spinner } from 'react-bootstrap'
import { useTable } from '@/Context/UTable/UTableContext'
import BrandSelect from '@/Components/Forms/Common/BrandSelect'
import BrandModelSelect from '@/Components/Forms/Common/BrandModelSelect'
import { CreateVehicleModalProps } from '.'
import { VehicleRepository } from '@/Repositories/Dashboard/VehicleRepository'
import { CreateVehicleSchema } from '@/Schemas/Dashboard/CreateBrandSchema'

export default function CreateVehicleForm(props: CreateVehicleModalProps) {
    const Vehicle = new VehicleRepository()
    const datatable = useTable()

    // if (props.brand) {
    //     CreateVehicleSchema.initialValues.id = props.service.id
    //     CreateVehicleSchema.initialValues.name = props.service.name
    // }

    return (
        <Formik
            initialValues={CreateVehicleSchema.initialValues}
            validationSchema={CreateVehicleSchema.validationSchema}
            onSubmit={async (values) => {
                await Vehicle.preConfirm(() => Vehicle.store(values, props, datatable))
            }}
        >
            {formik => (
                <Form>
                    <Modal.Body>
                        <Row>
                            <Col md="4">
                                <BrandSelect
                                    name="brand"
                                    isCreatable
                                />
                            </Col>
                            <Col md="4">
                                <BrandModelSelect
                                    name="model"
                                    brandName='brand'
                                    isCreatable
                                />
                            </Col>
                            <Col md="4">
                                <FormikControl
                                    name='year'
                                    control="text"
                                    numeric
                                    maxLength={4}
                                    label='Año'
                                    material
                                />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant='primary'
                            disabled={formik.isSubmitting}
                            type='submit'
                        >
                            Guardar
                            {formik.isSubmitting && (
                                <Spinner
                                    animation='border'
                                    variant='light'
                                    className='ms-2'
                                />
                            )}
                        </Button>
                        <Button
                            variant='secondary'
                            disabled={formik.isSubmitting}
                            onClick={props.onHide}
                        >
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Form>
            )}
        </Formik>
    )
}
