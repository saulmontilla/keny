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

                            <form method="post" action="/login">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" />
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
