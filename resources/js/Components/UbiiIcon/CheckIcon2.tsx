import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function CheckIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} id="mapas-y-banderas" xmlns="http://www.w3.org/2000/svg" width="32.725" height="32.725" viewBox="0 0 32.725 32.725">
            <g id="Grupo_3272" data-name="Grupo 3272">
                <g id="Grupo_3271" data-name="Grupo 3271">
                    <path id="Trazado_6717" data-name="Trazado 6717" d="M16.362,0A16.362,16.362,0,1,0,32.725,16.362,16.353,16.353,0,0,0,16.362,0Zm0,30.543A14.181,14.181,0,1,1,30.543,16.362,14.2,14.2,0,0,1,16.362,30.543Z" fill={svg.color1} />
                </g>
            </g>
            <g id="Grupo_3274" data-name="Grupo 3274" transform="translate(7.381 10.031)">
                <g id="Grupo_3273" data-name="Grupo 3273">
                    <path id="Trazado_6718" data-name="Trazado 6718" d="M133.13,157.25a1.091,1.091,0,0,0-1.543,0l-9.711,9.711-4.527-4.526a1.091,1.091,0,1,0-1.543,1.543l5.3,5.3a1.091,1.091,0,0,0,1.543,0l10.483-10.483A1.091,1.091,0,0,0,133.13,157.25Z" transform="translate(-115.487 -156.93)" fill={svg.color1} />
                </g>
            </g>
        </svg>
    )
}
