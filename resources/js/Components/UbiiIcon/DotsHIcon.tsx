import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function DotsHIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M7 15.5C7 14.3954 6.10457 13.5 5 13.5C3.89543 13.5 3 14.3954 3 15.5C3 16.6046 3.89543 17.5 5 17.5C6.10457 17.5 7 16.6046 7 15.5Z" fill={svg.color1}></path>
                <path d="M7 8.5C7 7.39543 6.10457 6.5 5 6.5C3.89543 6.5 3 7.39543 3 8.5C3 9.60457 3.89543 10.5 5 10.5C6.10457 10.5 7 9.60457 7 8.5Z" fill={svg.color1}></path>
                <path d="M12 13.5C13.1046 13.5 14 14.3954 14 15.5C14 16.6046 13.1046 17.5 12 17.5C10.8954 17.5 10 16.6046 10 15.5C10 14.3954 10.8954 13.5 12 13.5Z" fill={svg.color1}></path>
                <path d="M14 8.5C14 7.39543 13.1046 6.5 12 6.5C10.8954 6.5 10 7.39543 10 8.5C10 9.60457 10.8954 10.5 12 10.5C13.1046 10.5 14 9.60457 14 8.5Z" fill={svg.color1}></path>
                <path d="M19 13.5C20.1046 13.5 21 14.3954 21 15.5C21 16.6046 20.1046 17.5 19 17.5C17.8954 17.5 17 16.6046 17 15.5C17 14.3954 17.8954 13.5 19 13.5Z" fill={svg.color1}></path>
                <path d="M21 8.5C21 7.39543 20.1046 6.5 19 6.5C17.8954 6.5 17 7.39543 17 8.5C17 9.60457 17.8954 10.5 19 10.5C20.1046 10.5 21 9.60457 21 8.5Z" fill={svg.color1}></path>
            </g>
        </svg>
    )
}
