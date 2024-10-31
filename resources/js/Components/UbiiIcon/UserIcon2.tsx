import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function UserIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 19C23.5625 19 28.5 23.9375 28.5 30C28.5 31.125 27.5625 32 26.5 32H2.5C1.375 32 0.5 31.125 0.5 30C0.5 23.9375 5.375 19 11.5 19H17.5ZM3.5 29H25.4375C24.9375 25.0625 21.5625 22 17.5 22H11.5C7.375 22 4 25.0625 3.5 29ZM14.5 16C10.0625 16 6.5 12.4375 6.5 8C6.5 3.625 10.0625 0 14.5 0C18.875 0 22.5 3.625 22.5 8C22.5 12.4375 18.875 16 14.5 16ZM14.5 3C11.6875 3 9.5 5.25 9.5 8C9.5 10.8125 11.6875 13 14.5 13C17.25 13 19.5 10.8125 19.5 8C19.5 5.25 17.25 3 14.5 3Z" fill={svg.color1} />
        </svg>
    )
}
