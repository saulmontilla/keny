import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedUbiiLogo(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20.5" cy="20" r="20" fill="#00A1FD" />
            <path d="M14.5221 13.2096V9H18.9708V13.2096H14.5221ZM22.3068 13.2096V9H26.7555V13.2096H22.3068ZM32.7826 11.4038V25.5956C32.7826 26.7637 32.3386 27.884 31.5484 28.71C30.7582 29.536 29.6864 30 28.5688 30H12.7137C11.5962 30 10.5244 29.536 9.73418 28.71C8.94395 27.884 8.5 26.7637 8.5 25.5956V11.4038H11.1304V25.5956C11.1308 26.0344 11.2977 26.455 11.5946 26.7652C11.8915 27.0753 12.294 27.2497 12.7137 27.2499H28.5688C28.9885 27.2495 29.3908 27.0751 29.6875 26.7649C29.9843 26.4548 30.1511 26.0342 30.1515 25.5956V11.4038H32.7826Z" fill="white" />
        </svg>
    )
}
