import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ShareIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} id="Grupo_3875" data-name="Grupo 3875" xmlns="http://www.w3.org/2000/svg" width="33.445" height="35.675" viewBox="0 0 33.445 35.675">
            <path id="Trazado_10107" data-name="Trazado 10107" d="M43.174,23.133a6.266,6.266,0,0,0-5.043,2.548l-9.843-5.03a6.271,6.271,0,0,0-.2-4.12l10.317-6.2a6.245,6.245,0,1,0-1.073-1.794L26.985,14.752a6.27,6.27,0,1,0,.384,7.777l9.815,5.016a6.271,6.271,0,1,0,5.99-4.412Zm0-21.043a4.181,4.181,0,1,1-4.181,4.181A4.185,4.185,0,0,1,43.174,2.09Zm-20.9,20.973a4.181,4.181,0,1,1,4.181-4.181A4.185,4.185,0,0,1,22.271,23.063Zm20.9,10.521A4.181,4.181,0,1,1,47.355,29.4,4.185,4.185,0,0,1,43.174,33.585Z" transform="translate(-16)" fill={svg.color1} />
        </svg>
    )
}
