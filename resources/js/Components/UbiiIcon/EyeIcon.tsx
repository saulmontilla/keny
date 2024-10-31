import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function EyeIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 9.27273C2 9.27273 5.63636 2 12 2C18.3636 2 22 9.27273 22 9.27273" stroke={svg.color1} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 9.27344C2 9.27344 5.63636 16.5462 12 16.5462C18.3636 16.5462 22 9.27344 22 9.27344" stroke={svg.color1} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.0007 11.9995C13.5069 11.9995 14.728 10.7784 14.728 9.27219C14.728 7.76596 13.5069 6.54492 12.0007 6.54492C10.4945 6.54492 9.27344 7.76596 9.27344 9.27219C9.27344 10.7784 10.4945 11.9995 12.0007 11.9995Z" stroke={svg.color1} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
