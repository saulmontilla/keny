import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

const CopyIcon = React.forwardRef<SVGSVGElement, UbiiIconCommonProps>((props, ref) => {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} ref={ref} id="Grupo_4424" data-name="Grupo 4424" xmlns="http://www.w3.org/2000/svg" width="28.118" height="35.115" viewBox="0 0 28.118 35.115">
            <path id="Trazado_10671" data-name="Trazado 10671" d="M67.75,85.4H51.426a2.778,2.778,0,0,0-2.776,2.776V111.6a2.778,2.778,0,0,0,2.776,2.776H67.75a2.778,2.778,0,0,0,2.776-2.776V88.176A2.787,2.787,0,0,0,67.75,85.4Zm.827,26.191a.835.835,0,0,1-.834.834H51.419a.835.835,0,0,1-.834-.834V88.176a.835.835,0,0,1,.834-.834H67.743a.835.835,0,0,1,.834.834Z" transform="translate(-48.65 -79.259)" fill={svg.color1} />
            <path id="Trazado_10672" data-name="Trazado 10672" d="M154.55,0H138.226a2.778,2.778,0,0,0-2.776,2.776.971.971,0,0,0,1.942,0,.835.835,0,0,1,.834-.834H154.55a.835.835,0,0,1,.834.834V26.2a.835.835,0,0,1-.834.834.971.971,0,1,0,0,1.942,2.778,2.778,0,0,0,2.776-2.776V2.776A2.778,2.778,0,0,0,154.55,0Z" transform="translate(-129.208 0)" fill={svg.color1} />
        </svg>
    )
})

export default CopyIcon
