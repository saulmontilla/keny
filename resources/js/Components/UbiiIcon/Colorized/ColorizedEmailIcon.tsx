import React from 'react'
import useSvgHandler from '../../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedEmailIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="43.383" height="42.105" viewBox="0 0 43.383 42.105">
            <g transform="translate(-1191 -535.713)">
                <g transform="translate(455.915 172.382)">
                    <path d="M744.42,371.245l-7.35,18.315a2.179,2.179,0,0,0,1.149,2.809l29.437,12.884a2.18,2.18,0,0,0,2.9-1.184L778.31,384.8a2.181,2.181,0,0,0-1.214-2.839l-29.844-11.925A2.18,2.18,0,0,0,744.42,371.245Z" fill="#00a1fd" opacity="0.65" />
                    <path d="M745.842,371.444l9.258,16.571,21.929-3.563a.734.734,0,0,0,.177-1.423l-30.7-12.241A.5.5,0,0,0,745.842,371.444Z" fill="#615bfb" opacity="0.74" />
                    <circle cx="6.545" cy="6.545" r="6.545" transform="translate(739.238 363.332)" fill="#615bfb" opacity="0.74" />
                    <circle cx="3.734" cy="3.734" r="3.734" transform="translate(735.085 390.215)" fill="#615bfb" opacity="0.74" />
                </g>
            </g>
        </svg>
    )
}
