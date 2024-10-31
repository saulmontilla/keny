import React from 'react'
import useSvgHandler from '../../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedClipIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="35.022" height="35.171" viewBox="0 0 35.022 35.171">
            <g id="enlace" transform="translate(-1059.596 -719.265)" opacity="0.75">
                <g id="Group_4430" data-name="Group 4430" transform="translate(1060.096 719.265)">
                    <rect id="Rectángulo_2604" data-name="Rectángulo 2604" width="13.647" height="22.582" rx="4.399" transform="matrix(0.661, 0.75, -0.75, 0.661, 25.494, 0)" fill="#00a1fd" opacity="0.75" />
                    <path id="Path_10689" data-name="Path 10689" d="M1090.793,722.77a7.743,7.743,0,0,0-10.948-.007l-.007.007-6.846,6.848a7.718,7.718,0,0,1-4.108,4.1l-6.6,6.611a7.747,7.747,0,0,0,10.954,10.955l6.6-6.6a7.726,7.726,0,0,1,4.108-4.1l6.846-6.857A7.755,7.755,0,0,0,1090.793,722.77Zm-19,16.26a7.8,7.8,0,0,0,2.738,2.739l-5.407,5.407a1.937,1.937,0,0,1-2.739-2.739h0Zm17.629-6.674-6.846,6.848a6.041,6.041,0,0,1-.486.435,7.784,7.784,0,0,0-.249-2.439l6.2-6.213a3.873,3.873,0,0,0-5.477-5.477l-6.841,6.846a3.871,3.871,0,0,0,0,5.474l0,0a1.935,1.935,0,0,1,.208,2.493,5.816,5.816,0,0,1-1.577-9.34l6.846-6.846a5.81,5.81,0,0,1,8.218,8.217Z" transform="translate(-1060.096 -718.799)" fill="#615bfb" stroke="#00a1fd" strokeMiterlimit="10" strokeWidth="1" />
                </g>
            </g>
        </svg>
    )
}
