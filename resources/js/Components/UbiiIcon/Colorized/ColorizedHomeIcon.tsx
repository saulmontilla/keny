import React from 'react'
import useSvgHandler from '../../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedHomeIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="32.096" height="28.697" viewBox="0 0 32.096 28.697">
            <g transform="translate(-61.155 -105.546)">
                <path d="M100.812,134.243H76.853a1.6,1.6,0,0,1-1.6-1.6V116.833a2.948,2.948,0,0,1,.469-1.128,2.847,2.847,0,0,1,.25-.309c6.992-5.5,12.13-9.518,12.435-9.713a.879.879,0,0,1,.423-.137.735.735,0,0,1,.394.113l12.484,9.856a1.5,1.5,0,0,1,.229.19,1.77,1.77,0,0,1,.469,1.128v15.812A1.6,1.6,0,0,1,100.812,134.243Z" transform="translate(-9.158)" fill="#00a1fd" opacity="0.74" />
                <circle cx="8.465" cy="8.465" r="8.465" transform="translate(61.155 106.58)" fill="#615bfb" opacity="0.74" />
            </g>
        </svg>
    )
}
