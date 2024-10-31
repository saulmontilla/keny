import React from 'react'
import useSvgHandler from '../../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedPointerIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="35.243" height="37.962" viewBox="0 0 35.243 37.962">
            <g id="Botondepago" transform="translate(-727.612 -361.213)">
                <circle id="Elipse_763" data-name="Elipse 763" cx="8.915" cy="8.915" r="8.915" transform="translate(727.612 361.213)" fill="#615bfb" opacity="0.74" />
                <path id="Trazado_10704" data-name="Trazado 10704" d="M755.483,381.764l5.083-5.573-21.82-9.367,2.809,24.814,6.363-3.729,6.475,8.035,6.424-5.219Z" transform="translate(1.388 2.527)" fill="#00a1fd" stroke="#00a1fd" strokeMiterlimit="10" strokeWidth="1" opacity="0.65" />
            </g>
        </svg>
    )
}
