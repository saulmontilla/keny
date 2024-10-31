import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function TrashIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg id="eliminar" xmlns="http://www.w3.org/2000/svg" {...svg.handlers} width="28.411" height="34.786" viewBox="0 0 28.411 34.786">
            <g id="Icon" transform="translate(0 0)">
                <path id="Path_6725" data-name="Path 6725" d="M28.323,7.775l-.768-2.3A2.142,2.142,0,0,0,25.52,4.007H19.065V1.9A1.907,1.907,0,0,0,17.161,0H11.249A1.907,1.907,0,0,0,9.345,1.9v2.1H2.89A2.142,2.142,0,0,0,.856,5.473l-.768,2.3a1.724,1.724,0,0,0,1.635,2.269h.8l1.767,21.85a3.161,3.161,0,0,0,3.133,2.891H21.344a3.161,3.161,0,0,0,3.132-2.892l1.767-21.85h.445a1.723,1.723,0,0,0,1.635-2.269ZM11.384,2.038h5.643V4.007H11.384ZM22.445,31.73a1.112,1.112,0,0,1-1.1,1.018H7.425a1.112,1.112,0,0,1-1.1-1.018L4.57,10.044H24.2ZM2.16,8.006l.63-1.888a.106.106,0,0,1,.1-.073H25.52a.106.106,0,0,1,.1.073l.63,1.888Zm0,0" transform="translate(0 0)" fill={svg.color1} />
                <path id="Path_6726" data-name="Path 6726" d="M269.262,185.985h.054a1.019,1.019,0,0,0,1.017-.966l.957-18.371a1.019,1.019,0,0,0-2.036-.106l-.957,18.371A1.019,1.019,0,0,0,269.262,185.985Zm0,0" transform="translate(-250.068 -154.327)" fill={svg.color1} />
                <path id="Path_6727" data-name="Path 6727" d="M106.8,185.025a1.019,1.019,0,0,0,1.017.964l.057,0a1.019,1.019,0,0,0,.962-1.073l-1-18.371a1.019,1.019,0,1,0-2.035.111Zm0,0" transform="translate(-98.605 -154.329)" fill={svg.color1} />
                <path id="Path_6728" data-name="Path 6728" d="M195.273,185.988a1.019,1.019,0,0,0,1.019-1.019V166.6a1.019,1.019,0,0,0-2.038,0v18.371A1.019,1.019,0,0,0,195.273,185.988Zm0,0" transform="translate(-181.057 -154.329)" fill={svg.color1} />
            </g>
        </svg>
    )
}
