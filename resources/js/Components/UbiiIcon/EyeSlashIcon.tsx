import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function EyeSlashIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...svg.handlers} width="34.405" height="26.602" viewBox="0 0 34.405 26.602">
            <g transform="translate(-381.401 -26.018)">
                <g transform="translate(128.008 -65.141)">
                    <path d="M253.393,105.2s15.452,19.254,34.405,0C268.845,86.25,253.393,105.2,253.393,105.2Zm17.021,6.639a6.519,6.519,0,1,1,6.519-6.518A6.518,6.518,0,0,1,270.414,111.842Z" fill={svg.color1} />
                    <path d="M284.775,107.858a4.674,4.674,0,1,0,4.673,4.674A4.673,4.673,0,0,0,284.775,107.858Z" transform="translate(-14.334 -7.228)" fill={svg.color2} />
                </g>
                <g transform="translate(-71.072 -68.141)">
                    <path d="M394.856,111.047a3.387,3.387,0,0,0,3.376-3.808L408.471,97a.429.429,0,0,0,0-.6l-2.113-2.113a.428.428,0,0,0-.6,0L395.687,104.35a3.387,3.387,0,0,0-4.232,3.3,3.43,3.43,0,0,0,.106.83l-9.442,9.442a.429.429,0,0,0,0,.6l2.114,2.113a.426.426,0,0,0,.6,0l9.615-9.615A3.241,3.241,0,0,0,394.856,111.047Z" transform="translate(74)" fill={svg.color3} />
                </g>
            </g>
        </svg>
    )
}
