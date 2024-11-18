import React from 'react'
import { WorkHistoryActionsProps } from '.'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import UbiiIcon from '@/Components/UbiiIcon'
import { WorkRepository } from '@/Repositories/Dashboard/WorkRepository'

export default function PrintAction(props: WorkHistoryActionsProps) {
    const Work = new WorkRepository()

    const tooltip = (
        <Tooltip id='print'>
            Imprimir
        </Tooltip>
    )

    function handleClick() {
        Work.print(props.work)
    }

    return (
        <OverlayTrigger
            overlay={tooltip}
            placement='top'
        >
            <Button
                size='sm'
                variant='danger'
                className='ms-1'
                onClick={handleClick}
            >
                <UbiiIcon
                    icon="file-2"
                    size='1rem'
                    color={'#fff'}
                />
            </Button>
        </OverlayTrigger>
    )
}
