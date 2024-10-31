import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedUserIconBlue(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="66" height="74" viewBox="0 0 66 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.75 37C42.9684 37 51.25 28.7184 51.25 18.5C51.25 8.28164 42.9684 0 32.75 0C22.5316 0 14.25 8.28164 14.25 18.5C14.25 28.7184 22.5316 37 32.75 37ZM45.7 41.625H43.2863C40.0777 43.0992 36.5078 43.9375 32.75 43.9375C28.9922 43.9375 25.4367 43.0992 22.2137 41.625H19.8C9.07578 41.625 0.375 50.3258 0.375 61.05V67.0625C0.375 70.8926 3.48242 74 7.3125 74H58.1875C62.0176 74 65.125 70.8926 65.125 67.0625V61.05C65.125 50.3258 56.4242 41.625 45.7 41.625Z" fill="url(#paint0_linear_17_3565)" />
            <defs>
                <linearGradient id="paint0_linear_17_3565" x1="32.75" y1="0" x2="32.75" y2="74" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00A1FD" />
                    <stop offset="1" stopColor="#37CBE4" />
                </linearGradient>
            </defs>
        </svg>
    )
}
