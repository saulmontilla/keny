import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ArrowRigthIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="24px" height="24px" viewBox="0 0 24 24" id="_24x24_On_Light_Arrow-Left" data-name="24x24/On Light/Arrow-Left" xmlns="http://www.w3.org/2000/svg">
            <rect id="view-box" width="24" height="24" fill="none" />
            <path id="Shape" d="M.22,10.22A.75.75,0,0,0,1.28,11.28l5-5a.75.75,0,0,0,0-1.061l-5-5A.75.75,0,0,0,.22,1.28l4.47,4.47Z" transform="translate(10.75 7.75) rotate(0)" fill={svg.color1} />
        </svg>
    )
}
