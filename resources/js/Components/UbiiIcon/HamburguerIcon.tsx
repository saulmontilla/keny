import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function HamburguerIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1H21.5" stroke="#486284" strokeWidth="2" strokeLinecap="round" />
            <path d="M1.5 8H21.5" stroke="#486284" strokeWidth="2" strokeLinecap="round" />
            <path d="M1.5 15H21.5" stroke="#486284" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}
