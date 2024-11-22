import React from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { ChangePasswordSchema } from '@/Schemas/Dashboard/ChangePasswordSchema'

const PasswordPage: PageWithLayout<PageProps> = () => {
    return (
        <Row className='justify-content-center'>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <h3 className='text-center'>Cambiar Contraseña</h3>
                        <Formik
                            initialValues={ChangePasswordSchema.initialValues}
                            validationSchema={ChangePasswordSchema.validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                                setSubmitting(false)
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Row>
                                        <Col>
                                            <FormikControl
                                                control='password'
                                                name='currentPassword'
                                                label='Contraseña Actual'
                                                material
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormikControl
                                                control='password'
                                                name='newPassword'
                                                label='Nueva Contraseña'
                                                material
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormikControl
                                                control='password'
                                                name='confirmNewPassword'
                                                label='Confirmar Nueva Contraseña'
                                                material
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='text-center'>
                                            <Button
                                                variant='primary'
                                                type='submit'
                                                className='mt-3'
                                                disabled={isSubmitting}
                                            >
                                                Cambiar Contraseña
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

PasswordPage.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default PasswordPage
