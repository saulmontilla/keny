import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PasswordRequirementsContainerProps } from 'ubiionline/form'
import UbiiIcon from '../../UbiiIcon'

export default function PasswordRequirementsContainer(props: PasswordRequirementsContainerProps) {
    return (
        <Container className="mt-3">
            {props.requirements.map((requirement, index) => (
                <Row key={index} className="align-items-baseline">
                    <Col xs="auto" className="p-0">
                        {requirement.status 
                            ? <UbiiIcon icon="check" color="#33d753" size="10px" />
                            : <UbiiIcon icon="circle" color="#00dcff" size="10px" />}
                    </Col>
                    <Col>
                        <p className="fz-u-09 m-0">
                            {requirement.description}
                        </p>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}
