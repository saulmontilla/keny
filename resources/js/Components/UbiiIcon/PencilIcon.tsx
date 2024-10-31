import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function PencilIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg id="editar" xmlns="http://www.w3.org/2000/svg" {...svg.handlers} width="31.739" height="31.738" viewBox="0 0 31.739 31.738">
            <g id="Group_3278" data-name="Group 3278" transform="translate(0 2.268)">
                <g id="Group_3277" data-name="Group 3277">
                    <path id="Path_6723" data-name="Path 6723" d="M26.07,47.739a1.133,1.133,0,0,0-1.133,1.133V60.207A1.133,1.133,0,0,1,23.8,61.34H3.4a1.133,1.133,0,0,1-1.133-1.133V37.537A1.133,1.133,0,0,1,3.4,36.4H17a1.133,1.133,0,1,0,0-2.267H3.4a3.4,3.4,0,0,0-3.4,3.4V60.207a3.4,3.4,0,0,0,3.4,3.4H23.8a3.4,3.4,0,0,0,3.4-3.4V48.872A1.133,1.133,0,0,0,26.07,47.739Z" transform="translate(0 -34.137)" fill={svg.color1} />
                </g>
            </g>
            <g id="Group_3280" data-name="Group 3280" transform="translate(6.803 0)">
                <g id="Group_3279" data-name="Group 3279" transform="translate(0 0)">
                    <path id="Path_6724" data-name="Path 6724" d="M126.074,1.275a4.339,4.339,0,0,0-6.137,0L105.007,16.2a1.146,1.146,0,0,0-.273.443l-2.267,6.8a1.134,1.134,0,0,0,1.075,1.492,1.151,1.151,0,0,0,.358-.058l6.8-2.267a1.134,1.134,0,0,0,.443-.274l14.93-14.93A4.339,4.339,0,0,0,126.074,1.275Zm-1.6,4.535L109.736,20.544l-4.4,1.47,1.466-4.4L121.54,2.883a2.071,2.071,0,1,1,2.931,2.927Z" transform="translate(-102.409 -0.004)" fill={svg.color1} />
                </g>
            </g>
        </svg>

    )
}
