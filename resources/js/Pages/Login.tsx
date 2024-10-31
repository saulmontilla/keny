import LoginForm from '@/Components/Login/LoginForm'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Login() {
    return (
        <Container>
            <Row>
                <Col md="6" className='mx-auto'>
                    <Card>
                        <Card.Body>
                            <h1>Login</h1>

                            <LoginForm />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
