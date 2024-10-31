import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedWarningIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="48" height="48" rx="24" fill="#FFF1CF" />
            <path d="M30.3125 33.3438C30.3125 34.8084 29.1209 36 27.6562 36C26.1916 36 25 34.8084 25 33.3438C25 31.8791 26.1916 30.6875 27.6562 30.6875C29.1209 30.6875 30.3125 31.8791 30.3125 33.3438ZM25.3075 19.8367L25.759 28.8679C25.7802 29.292 26.1303 29.625 26.5549 29.625H28.7576C29.1822 29.625 29.5323 29.292 29.5535 28.8679L30.005 19.8367C30.0278 19.3815 29.6649 19 29.2092 19H26.1033C25.6476 19 25.2847 19.3815 25.3075 19.8367Z" fill="#FFD467" />
            <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FFFBEF" strokeWidth="8" />
        </svg>
    )
}
