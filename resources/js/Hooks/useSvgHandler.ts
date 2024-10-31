import React, { useEffect, useState } from "react";
import { SvgColorOnHover, UbiiIconCommonProps } from "ubiionline/icon";

function getSvgColorFromProp(colorProp: string | SvgColorOnHover | undefined) {
    return Array.isArray(colorProp) ? colorProp[0] : colorProp
}

export default function useSvgHandler(props: UbiiIconCommonProps) {
    const {
        color, 
        color1, 
        color2, 
        color3,
        style,
        pointer,
        size,
        ...rest
    } = props
    
    const propsColor1 = getSvgColorFromProp(color1) || getSvgColorFromProp(color)
    const propsColor2 = getSvgColorFromProp(color2) || getSvgColorFromProp(color)
    const propsColor3 = getSvgColorFromProp(color3) || getSvgColorFromProp(color)
    const initialColor1 = propsColor1 || "#a0a2b3"
    const initialColor2 = propsColor2 || "#a0a2b3"
    const initialColor3 = propsColor3 || "#a0a2b3"
    const hoverColor1 = Array.isArray(color1) ? color1[1] : Array.isArray(color) && color[1]
    const hoverColor2 = Array.isArray(color2) ? color2[1] : Array.isArray(color) && color[1]
    const hoverColor3 = Array.isArray(color3) ? color3[1] : Array.isArray(color) && color[1]
    const [_color1, setColor1] = useState(initialColor1)
    const [_color2, setColor2] = useState(initialColor2)
    const [_color3, setColor3] = useState(initialColor3)

    const _style = {
        width: size,
        height: size,
        cursor: pointer ? 'pointer' : undefined,
    }

    useEffect(() => {
        setColor1(initialColor1)
        setColor2(initialColor2)
        setColor3(initialColor3)
    }, [initialColor1, initialColor2, initialColor3])

    const handleMouseEnter = () => {
        hoverColor1 && setColor1(hoverColor1)
        hoverColor2 && setColor2(hoverColor2)
        hoverColor3 && setColor2(hoverColor3)
    }

    const handleMouseLeave = () => {
        hoverColor1 && setColor1(initialColor1)
        hoverColor2 && setColor2(initialColor2)
        hoverColor3 && setColor3(initialColor3)
    }

    const handlers: React.SVGProps<SVGSVGElement> = {
        style: _style,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...rest
    }

    return {
        initialColor1,
        initialColor2,
        initialColor3,
        hoverColor1,
        hoverColor2,
        hoverColor3,
        color1: _color1,
        color2: _color2,
        color3: _color3,
        handlers,
        setColor1,
        setColor2,
        setColor3
    }
}