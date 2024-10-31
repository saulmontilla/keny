import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

const CheckIcon = React.forwardRef<SVGSVGElement, UbiiIconCommonProps>((props, ref) => {
    const svg = useSvgHandler(props)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...svg.handlers} ref={ref} width="16.57" height="11.33" viewBox="0 0 16.57 11.33">
            <path d="M353.37,703.457l-8.661,8.672-4.56-4.565a.981.981,0,0,0-1.387,1.389l5.253,5.259a.98.98,0,0,0,1.387,0l9.355-9.366a.981.981,0,0,0-1.387-1.389Z" transform="translate(-338.475 -703.169)" fill={svg.color1} />
        </svg>
    )
})

export default CheckIcon