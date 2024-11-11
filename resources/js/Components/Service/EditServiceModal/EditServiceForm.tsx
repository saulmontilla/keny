import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Modal, Row, Spinner } from 'react-bootstrap'
import { EditServiceModalProps } from '.'
import { EditServiceSchema } from '@/Schemas/Dashboard/EditServiceSchema'
import { ci_fromValue } from '@/Components/Forms/Controls/CurrencyControl'
import { ServiceRepository } from '@/Repositories/Dashboard/ServiceRepository'
import { useTable } from '@/Context/UTable/UTableContext'

export default function EditServiceForm(props: EditServiceModalProps) {
    const Service = new ServiceRepository()
    const datatable = useTable()

    if (props.service) {
        EditServiceSchema.initialValues.id = props.service.id
        EditServiceSchema.initialValues.name = props.service.name
        EditServiceSchema.initialValues.base_amount = ci_fromValue(props.service.base_amount)
    }

    return (
        <Formik
            initialValues={EditServiceSchema.initialValues}
            validationSchema={EditServiceSchema.validationSchema}
            onSubmit={async (values) => {
                await Service.preConfirm(() => Service.update(values, props, datatable))
            }}
        >
            {formik => (
                <Form>
                    <Modal.Body>
                        <Row>
                            <Col md="6">
                                <FormikControl
                                    control='text'
                                    name='name'
                                    maxLength={50}
                                    label="Nombre"
                                    material
                                />
                            </Col>
                            <Col md="6">
                                <FormikControl
                                    control='currency'
                                    name='base_amount'
                                    label="Monto Base"
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
