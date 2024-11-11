import React, { useState } from 'react'
import { WorkHistoryActionsProps } from '.'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import UbiiIcon from '@/Components/UbiiIcon'
import WorkHistoryModal from '../../WorkHistoryModal'

export default function ViewAction(props: WorkHistoryActionsProps) {
    const [showModal, setShowModal] = useState(false)

    const tooltip = (
        <Tooltip id='tooltip'>
            Ver
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
                    size='sm'
                    variant='primary'
                    onClick={handleClick}
                >
                    <UbiiIcon
                        icon='eye'
                        size='1rem'
                        color1={'#fff'}
                    />
                </Button>
            </OverlayTrigger>

            <WorkHistoryModal
                show={showModal}
                onHide={handleClose}
                size='lg'
                {...props}
            />
        </>
    )
}
