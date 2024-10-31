import React from 'react'
import { LabelControlProps } from 'ubiionline/form'
import UbiiIcon from '../../UbiiIcon'

export default function LabelControl(props: LabelControlProps) {
    return (
        <label
            htmlFor={props.id ? props.id : props.name}
            className={`
                fw-u-bold fz-u-1
                d-flex
                align-items-baseline
                ${props.className ? props.className : ''}
            `}
        >
            {props.labelIcon && (
                <UbiiIcon
                    icon={props.labelIcon}
                    size="1.5em"
                    className='mr-1'
                />
            )}
            <span className='w-100'>
                {props.text}
            </span>
        </label>
    )
}
