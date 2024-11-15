import LoginForm from '@/Components/Login/LoginForm'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function LoginPage() {
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
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
