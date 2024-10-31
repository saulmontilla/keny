import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function QuestionIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="25.779" height="25.776" viewBox="0 0 25.779 25.776">
            <g id="Pregunta" transform="translate(-947.084 -526.711)">
                <path id="Path_10453" data-name="Path 10453" d="M959.981,526.711a12.888,12.888,0,1,0,12.882,12.9A12.892,12.892,0,0,0,959.981,526.711Z" fill="#fff" />
                <path id="Path_10454" data-name="Path 10454" d="M959.981,526.711a12.888,12.888,0,1,1-12.9,12.888A12.89,12.89,0,0,1,959.981,526.711Zm3.861,10.333a3.869,3.869,0,1,0-7.737,0,1.286,1.286,0,0,0,2.553.2c.023-.128.028-.259.042-.389a1.285,1.285,0,0,1,2.479-.284,1.062,1.062,0,0,1-.492,1.4c-.389.269-.8.515-1.159.816a2.19,2.19,0,0,0-.837,2.25,1.261,1.261,0,0,0,1.326,1.1,1.33,1.33,0,0,0,1.235-1.231.527.527,0,0,1,.187-.334c.295-.225.621-.411.921-.63A3.427,3.427,0,0,0,963.842,537.044Zm-2.586,7.7a1.283,1.283,0,1,0-1.271,1.3A1.28,1.28,0,0,0,961.256,544.744Z" fill="#00263a" />
                <path id="Path_10455" data-name="Path 10455" d="M963.842,537.044a3.427,3.427,0,0,1-1.482,2.891c-.3.219-.626.405-.921.63a.527.527,0,0,0-.187.334,1.33,1.33,0,0,1-1.235,1.231,1.261,1.261,0,0,1-1.326-1.1,2.19,2.19,0,0,1,.837-2.25c.362-.3.77-.547,1.159-.816a1.062,1.062,0,0,0,.492-1.4,1.285,1.285,0,0,0-2.479.284c-.014.13-.019.261-.042.389a1.286,1.286,0,0,1-2.553-.2,3.869,3.869,0,1,1,7.737,0Z" fill="#fff" />
                <path id="Path_10456" data-name="Path 10456" d="M961.256,544.744a1.283,1.283,0,1,1-1.294-1.276A1.285,1.285,0,0,1,961.256,544.744Z" fill="#fff" />
            </g>
        </svg>
    )
}
