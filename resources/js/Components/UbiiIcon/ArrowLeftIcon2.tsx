import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ArrowLeftIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2L2.66939 8.21905C2.2842 8.66844 2.2842 9.33156 2.66939 9.78095L8 16" stroke={svg.color1} strokeWidth="3" strokeLinecap="round" />
        </svg>

    )
}
