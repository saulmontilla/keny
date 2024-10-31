import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ArrowUpIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4.99985L4.29289 1.70696C4.68342 1.31643 5.31658 1.31643 5.70711 1.70696L9 4.99985M5 1.99985L5 15.9999" stroke={svg.color1} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

    )
}
