import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function LockIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg id="candado_4_" data-name="candado (4)" xmlns="http://www.w3.org/2000/svg" {...svg.handlers} width="25.662" height="34.216" viewBox="0 0 25.662 34.216">
            <path id="Path_10815" data-name="Path 10815" d="M25.455,30.385H6.208A3.212,3.212,0,0,1,3,27.178V12.208A3.212,3.212,0,0,1,6.208,9H25.455a3.212,3.212,0,0,1,3.208,3.208v14.97A3.212,3.212,0,0,1,25.455,30.385ZM6.208,11.139a1.071,1.071,0,0,0-1.069,1.069v14.97a1.071,1.071,0,0,0,1.069,1.069H25.455a1.071,1.071,0,0,0,1.069-1.069V12.208a1.071,1.071,0,0,0-1.069-1.069Z" transform="translate(-3 3.831)" fill={svg.color1} />
            <path id="Path_10816" data-name="Path 10816" d="M22.039,14.97A1.07,1.07,0,0,1,20.97,13.9V8.554a6.416,6.416,0,0,0-12.831,0V13.9A1.069,1.069,0,1,1,6,13.9V8.554a8.554,8.554,0,0,1,17.108,0V13.9A1.07,1.07,0,0,1,22.039,14.97Z" transform="translate(-1.723)" fill={svg.color1} />
            <path id="Path_10817" data-name="Path 10817" d="M12.851,18.7A2.851,2.851,0,1,1,15.7,15.851,2.854,2.854,0,0,1,12.851,18.7Zm0-3.564a.713.713,0,1,0,.713.713A.714.714,0,0,0,12.851,15.139Z" transform="translate(-0.021 5.533)" fill={svg.color1} />
            <path id="Path_10818" data-name="Path 10818" d="M12.319,21.809A1.07,1.07,0,0,1,11.25,20.74V16.819a1.069,1.069,0,1,1,2.139,0V20.74A1.07,1.07,0,0,1,12.319,21.809Z" transform="translate(0.512 6.704)" fill={svg.color1} />
        </svg>
    )
}
