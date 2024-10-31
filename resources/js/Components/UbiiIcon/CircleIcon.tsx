import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function CircleIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...svg.handlers} width="120" height="120" viewBox="0 0 120 120" version="1.1">
            <circle cx="60" cy="60" r="50" fill={svg.color1} />
        </svg>
    )
}
