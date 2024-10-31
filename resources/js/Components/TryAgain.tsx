import React from 'react'
import { Button } from 'react-bootstrap'
import UbiiIcon from './UbiiIcon'

interface TryAgainProps {
    onRetry: React.MouseEventHandler<HTMLButtonElement>,
    text: string
}

export default function TryAgain(props: TryAgainProps) {
    return (
        <div className='d-flex flex-column'>
            <span className='text-center'>
                {props.text}
            </span>
            <div className='text-center'>
                <Button variant='white' size='sm' onClick={props.onRetry}>
                    <UbiiIcon icon="arrow-reload" color="var(--ubii-blue)" size='2rem'/>
                    <span className='d-block'>
                        Reintentar
                    </span>
                </Button>
            </div>
        </div>
    )
}
