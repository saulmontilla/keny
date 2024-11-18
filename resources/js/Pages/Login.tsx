import LoginForm from '@/Components/Login/LoginForm'
import { PageProps } from '@/types'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function LoginPage(props: PageProps) {

    return (
        <Container className='loginBg' fluid>
            <Row className='vh-100 align-items-center'>
                <Col md="6" className='mx-auto'>
                    <Card>
                        <Card.Body>
                            <h1 className='text-center text-info'>
                                Inicio de sesión
                            </h1>

                            <LoginForm />
                        </Card.Body>
                        <Card.Footer className='text-center'>
                            Version: {props.native_version}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
