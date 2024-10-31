import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import FormikControl from '../Forms/Controls/FormikControl'
import { LoginSchema } from '@/Schemas/LoginSchema'
import { LoginRepository } from '@/Repositories/LoginRepository'

export default function LoginForm() {
    const Auth = new LoginRepository()

    return (
        <Formik
            initialValues={LoginSchema.initialValues}
            validationSchema={LoginSchema.validationSchema}
            onSubmit={async (values, actions) => {
                await Auth.login(values, actions)
            }}
        >
            {formik => (
                <Form>
                    <Row>
                        <Col>
                            <FormikControl
                                control="text"
                                name='username'
                                label="Usuario"
                                material
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormikControl
                                control="password"
                                name='password'
                                label="Contraseña"
                                material
                            />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col className='text-center'>
                            <Button
                                type='submit'
                                variant='primary'
                                disabled={formik.isSubmitting}
                            >
                                Ingresar
                                {formik.isSubmitting && (
                                    <Spinner
                                        animation='border'
                                        variant='white'
                                        className='ms-1'
                                    />
                                )}
                            </Button>
                        </Col>
                    </Row>
                </Form>

            )}
        </Formik>
    )
}
