import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function DotsIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.04688" cy="2.0498" r="1.25" fill="#797E83" />
            <circle cx="7.04688" cy="2.0498" r="1.25" fill="#797E83" />
            <circle cx="12.0469" cy="2.0498" r="1.25" fill="#797E83" />
        </svg>

    )
}
