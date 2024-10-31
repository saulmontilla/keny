import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedFileWarning(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="50" height="61" viewBox="0 0 50 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 53.9377C38.8071 53.9377 50 41.9753 50 27.2188C50 12.4624 38.8071 0.5 25 0.5C11.1929 0.5 0 12.4624 0 27.2188C0 41.9753 11.1929 53.9377 25 53.9377Z" fill="url(#paint0_linear_1_2)" />
            <g filter="url(#filter0_d_1_2)">
                <path d="M39.3294 16.5312H10.6628C9.74229 16.5312 8.99609 17.3287 8.99609 18.3125V55.7189C8.99609 56.7026 9.74229 57.5001 10.6628 57.5001H39.3294C40.2499 57.5001 40.9961 56.7026 40.9961 55.7189V18.3125C40.9961 17.3287 40.2499 16.5312 39.3294 16.5312Z" fill="white" />
            </g>
            <path d="M24.8125 41.2451C29.2308 41.2451 32.8125 37.4171 32.8125 32.695C32.8125 27.973 29.2308 24.145 24.8125 24.145C20.3942 24.145 16.8125 27.973 16.8125 32.695C16.8125 37.4171 20.3942 41.2451 24.8125 41.2451Z" fill="#FFD467" />
            <path d="M28.7593 30.2925L23.8921 35.4944L21.6797 33.1299" stroke="#F6F6F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M29.3346 43.6064H20.668C20.1157 43.6064 19.668 44.0849 19.668 44.6752C19.668 45.2655 20.1157 45.744 20.668 45.744H29.3346C29.8869 45.744 30.3346 45.2655 30.3346 44.6752C30.3346 44.0849 29.8869 43.6064 29.3346 43.6064Z" fill="#DFEAFB" />
            <defs>
                <filter id="filter0_d_1_2" x="2.99609" y="7.53125" width="44" height="52.9688" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="-3" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.803922 0 0 0 0 0.85098 0 0 0 0.349 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_2" x1="25" y1="0.5" x2="25" y2="53.9377" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E3ECFA" />
                    <stop offset="1" stopColor="#DAE7FF" />
                </linearGradient>
            </defs>
        </svg>


    )
}
