import React from 'react'
import useSvgHandler from '../../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedPdfIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="44.625" height="51" viewBox="0 0 44.625 51">
            <g transform="translate(-32)">
                <path d="M99.188,0A3.2,3.2,0,0,0,96,3.188V47.813A3.2,3.2,0,0,0,99.188,51h31.875a3.2,3.2,0,0,0,3.188-3.187V12.75L121.5,0Z" transform="translate(-57.625)" fill="#e2e5e7" />
                <path d="M355.188,12.75h9.563L352,0V9.563A3.2,3.2,0,0,0,355.188,12.75Z" transform="translate(-288.125)" fill="#b0b7bd" />
                <path d="M393.563,137.563,384,128h9.563Z" transform="translate(-316.938 -115.25)" fill="#cad1d8" />
                <path d="M70.25,257.531a1.6,1.6,0,0,1-1.594,1.594H33.594A1.6,1.6,0,0,1,32,257.531V241.594A1.6,1.6,0,0,1,33.594,240H68.656a1.6,1.6,0,0,1,1.594,1.594Z" transform="translate(0 -216.094)" fill="#f15642" />
                <g transform="translate(38.947 29.317)">
                    <path d="M101.744,295.2a.877.877,0,0,1,.865-.88h2.944a3.186,3.186,0,0,1,0,6.372h-2.128v1.683a.8.8,0,0,1-.816.878.859.859,0,0,1-.865-.878Zm1.681.725V299.1h2.128a1.588,1.588,0,0,0,0-3.175Z" transform="translate(-101.744 -294.32)" fill="#fff" />
                    <path d="M188.7,304.29a.8.8,0,0,1-.88-.789v-7.239a.867.867,0,0,1,.88-.791h2.918c5.824,0,5.7,8.818.115,8.818Zm.8-7.263v5.709h2.115c3.441,0,3.594-5.709,0-5.709Z" transform="translate(-179.25 -295.357)" fill="#fff" />
                    <path d="M288.8,297.115v2.026h3.25a.986.986,0,0,1,.918.9.886.886,0,0,1-.918.765H288.8v2.676a.755.755,0,0,1-.763.789.809.809,0,0,1-.9-.789v-7.239a.805.805,0,0,1,.9-.791h4.474a.8.8,0,0,1,.892.791.88.88,0,0,1-.892.867H288.8Z" transform="translate(-268.669 -295.343)" fill="#fff" />
                </g>
                <path d="M126.281,417.594H96v1.594h30.281a1.6,1.6,0,0,0,1.594-1.594V416A1.6,1.6,0,0,1,126.281,417.594Z" transform="translate(-57.625 -374.563)" fill="#cad1d8" />
            </g>
        </svg>
    )
}
