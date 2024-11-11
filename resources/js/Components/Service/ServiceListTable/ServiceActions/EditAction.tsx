import UbiiIcon from '@/Components/UbiiIcon'
import React, { useState } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ServiceActionsProps } from '.'
import EditServiceModal from '../../EditServiceModal'

export default function EditAction(props: ServiceActionsProps) {
    const [showModal, setShowModal] = useState(false)

    const tooltip = (
        <Tooltip id='tooltip'>
            Editar
        </Tooltip>
    )

    function handleClick() {
        setShowModal(true)
    }

    function handleClose() {
        setShowModal(false)
    }

    return (
        <>
            <OverlayTrigger
                overlay={tooltip}
                placement='top'
            >
                <Button
                    variant='info'
                    size='sm'
                    onClick={handleClick}
                >
                    <UbiiIcon
                        icon="pencil"
                        size='1rem'
                        color1={'#fff'}
                    />
                </Button>
            </OverlayTrigger>

            <EditServiceModal
                show={showModal}
                onHide={handleClose}
                {...props}
            />
        </>
    )
}
