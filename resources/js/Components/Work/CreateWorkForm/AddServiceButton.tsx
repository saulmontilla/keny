import UbiiIcon from '@/Components/UbiiIcon'
import { ArrayHelpers } from 'formik'
import React from 'react'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

interface AddServiceButtonProps {
    arrayHelpers: ArrayHelpers
}

export default function AddServiceButton(props: AddServiceButtonProps) {
    const { arrayHelpers } = props

    const tooltip = (
        <Tooltip id='tooltip'>
            Agregar servicio
        </Tooltip>
    )

    function handleAddService() {
        arrayHelpers.push({
            id: 0,
            name: '',
            amount: 0,
            rendersInPdf: false,
            type: ''
        })
    }

    return (
        <Row className='mt-3'>
            <Col className='text-center'>
                <OverlayTrigger
                    placement='top'
                    overlay={tooltip}
                >
                    <Button
                        size='sm'
                        variant='success'
                        title='Agregar servicio'
                        onClick={handleAddService}
                    >
                        <UbiiIcon
                            icon='plus'
                            size='1rem'
                            color={'#fff'}
                        />
                    </Button>
                </OverlayTrigger>
            </Col>
        </Row>
    )
}
