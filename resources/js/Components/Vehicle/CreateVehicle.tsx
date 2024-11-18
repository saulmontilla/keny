import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import CreateVehicleModal from './CreateVehicleModal'

export default function CreateVehicle() {
    const [showModal, setShowModal] = useState(false)

    function handleClick() {
        setShowModal(true)
    }

    function handleClose() {
        setShowModal(false)
    }

    return (
        <>
            <Row className='mb-3'>
                <Col className='text-end'>
                    <Button
                        variant='primary'
                        onClick={handleClick}
                    >
                        Crear modelo
                    </Button>
                </Col>
            </Row>

            <CreateVehicleModal
                show={showModal}
                onHide={handleClose}
            />
        </>
    )
}
