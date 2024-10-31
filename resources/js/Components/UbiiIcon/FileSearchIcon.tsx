import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function FileSearchIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} id="ver-detalles" xmlns="http://www.w3.org/2000/svg" width="31.174" height="31.932" viewBox="0 0 31.174 31.932">
            <g id="Grupo_3275" data-name="Grupo 3275">
                <rect id="Rectángulo_2272" data-name="Rectángulo 2272" width="14.241" height="2.308" transform="translate(4.312 7.022)" fill={svg.color1} />
                <path id="Trazado_6719" data-name="Trazado 6719" d="M18.948,17.26a5.018,5.018,0,1,0-1.905,1.909l5.645,5.645,1.905-1.907ZM16.685,16.9a3.074,3.074,0,0,1-4.236,0,3,3,0,1,1,4.236,0Z" transform="translate(6.581 7.119)" fill={svg.color2} />
                <path id="Trazado_6720" data-name="Trazado 6720" d="M22.91,28.206H3.053a.569.569,0,0,1-.569-.568V2.834a.569.569,0,0,1,.569-.569H22.91a.567.567,0,0,1,.568.569V15.487a5.935,5.935,0,0,1,2.267,1.033V2.834A2.837,2.837,0,0,0,22.91,0H3.053A2.838,2.838,0,0,0,.219,2.834v24.8a2.838,2.838,0,0,0,2.834,2.833H22.91c1.185,0,1.746-.28,2.168-1.315l-1.028-1.028A2.984,2.984,0,0,1,22.91,28.206Z" transform="translate(-0.219)" fill={svg.color1} />
                <rect id="Rectángulo_2273" data-name="Rectángulo 2273" width="14.241" height="2.308" transform="translate(4.312 13.529)" fill={svg.color1} />
            </g>
        </svg>
    )
}
