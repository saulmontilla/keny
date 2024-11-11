import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Modal, Row, Spinner } from 'react-bootstrap'
import { CreateBrandModalProps } from '.'
import { useTable } from '@/Context/UTable/UTableContext'
import { BrandRepository } from '@/Repositories/Dashboard/BrandRepository'
import { CreateBrandSchema } from '@/Schemas/Dashboard/CreateBrandSchema'

export default function CreateBrandForm(props: CreateBrandModalProps) {
    const Brand = new BrandRepository()
    const datatable = useTable()

    if (props.brand) {
        CreateBrandSchema.initialValues.id = props.service.id
        CreateBrandSchema.initialValues.name = props.service.name
    }

    return (
        <Formik
            initialValues={CreateBrandSchema.initialValues}
            validationSchema={CreateBrandSchema.validationSchema}
            onSubmit={async (values) => {
                await Brand.preConfirm(() => Brand.update(values, props, datatable))
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
                                    maxLength={255}
                                    label="Nombre"
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
