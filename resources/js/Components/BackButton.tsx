import React from 'react'
import { createPortal } from 'react-dom'
import UbiiIcon from './UbiiIcon'

interface BackButtonsProps {
    onClick: React.MouseEventHandler<HTMLDivElement>,
    slot?: string
}
export default function BackButton(props: BackButtonsProps & React.HtmlHTMLAttributes<HTMLDivElement>) {
    const { className, ...rest } = props

    const content = (
        <div className={`${className} text-u-blue cursor-pointer d-inline-block fz-u-12`} {...rest}>
            <UbiiIcon icon='arrow-l-2' color1="var(--ubii-blue)" />
            <span className='ms-3'>
                Atrás
            </span>
        </div>
    )

    if (props.slot) {
        const container = document.getElementById(props.slot)

        if (container) {
            return createPortal(content, container)
        }

        return null
    }

    return content
}
