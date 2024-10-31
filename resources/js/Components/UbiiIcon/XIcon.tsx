import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function XIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} id="eliminar_1_" data-name="eliminar (1)" xmlns="http://www.w3.org/2000/svg" width="32.725" height="32.725" viewBox="0 0 32.725 32.725">
            <path id="Trazado_6729" data-name="Trazado 6729" d="M16.362,0A16.362,16.362,0,1,0,32.725,16.362,16.362,16.362,0,0,0,16.362,0Zm0,30.68A14.317,14.317,0,1,1,30.68,16.362,14.317,14.317,0,0,1,16.362,30.68Zm0,0" fill={svg.color1} />
            <path id="Trazado_6730" data-name="Trazado 6730" d="M142.888,126.979a1.023,1.023,0,0,0-1.446,0l-6.508,6.508-6.508-6.508a1.023,1.023,0,0,0-1.471,1.421l.025.025,6.508,6.508-6.508,6.508a1.023,1.023,0,1,0,1.421,1.471l.025-.025,6.508-6.508,6.508,6.508a1.023,1.023,0,0,0,1.446-1.446l-6.508-6.508,6.508-6.508a1.023,1.023,0,0,0,0-1.446Zm0,0" transform="translate(-118.57 -118.57)" fill={svg.color1} />
        </svg>
    )
}
