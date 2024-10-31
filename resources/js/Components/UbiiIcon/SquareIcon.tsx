import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function SquareIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(5.16,5.16), scale(0.57)">
                <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="0" fill={svg.color1} strokeWidth="0">
                </rect>
            </g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g id="Shape / Square">
                    <path id="Vector" d="M3 6.2002V17.8002C3 18.9203 3 19.4796 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2837 20.7822 19.9074C21 19.48 21 18.921 21 17.8031V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z" stroke={svg.color2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </g>
        </svg>
    )
}

