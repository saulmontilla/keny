import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ArrowRigthIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 227.096 227.096" xmlSpace="preserve">
            <g>
                <g>
                    <polygon points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 
			146.933,181.902 152.835,187.811 227.096,113.55" fill={svg.color1} />
                </g>
            </g>
        </svg>
    )
}
