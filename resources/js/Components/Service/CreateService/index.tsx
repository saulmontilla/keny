import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import EditServiceModal from '../EditServiceModal'

export default function CreateService() {
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
                        Crear servicio
                    </Button>
                </Col>
            </Row>

            <EditServiceModal show={showModal} onHide={handleClose} />
        </>
    )
}
