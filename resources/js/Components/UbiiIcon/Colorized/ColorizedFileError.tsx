import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function ColorizedFileError(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="51" height="61" viewBox="0 0 51 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 53.9383C39.3071 53.9383 50.5 41.9758 50.5 27.2192C50.5 12.4626 39.3071 0.5 25.5 0.5C11.6929 0.5 0.5 12.4626 0.5 27.2192C0.5 41.9758 11.6929 53.9383 25.5 53.9383Z" fill="url(#paint0_linear_1241_6067)" />
            <g filter="url(#filter0_d_1241_6067)">
                <path d="M39.8294 16.5303H11.1628C10.2423 16.5303 9.49609 17.3278 9.49609 18.3116V55.7184C9.49609 56.7022 10.2423 57.4997 11.1628 57.4997H39.8294C40.7499 57.4997 41.4961 56.7022 41.4961 55.7184V18.3116C41.4961 17.3278 40.7499 16.5303 39.8294 16.5303Z" fill="#F8F8F8" />
            </g>
            <path d="M25.4961 41.4689C29.9144 41.4689 33.4961 37.6409 33.4961 32.9188C33.4961 28.1967 29.9144 24.3687 25.4961 24.3687C21.0778 24.3687 17.4961 28.1967 17.4961 32.9188C17.4961 37.6409 21.0778 41.4689 25.4961 41.4689Z" fill="#DE0000" />
            <path d="M28.3245 36.9493L25.4961 33.9264L22.6677 36.9493L21.7249 35.9417L24.5533 32.9187L21.7249 29.8958L22.6677 28.8882L25.4961 31.9111L28.3245 28.8882L29.2673 29.8958L26.4389 32.9187L29.2673 35.9417L28.3245 36.9493Z" fill="#F8F8F8" />
            <path d="M29.8346 43.6074H21.168C20.6157 43.6074 20.168 44.0859 20.168 44.6762C20.168 45.2665 20.6157 45.745 21.168 45.745H29.8346C30.3869 45.745 30.8346 45.2665 30.8346 44.6762C30.8346 44.0859 30.3869 43.6074 29.8346 43.6074Z" fill="#DFEAFB" />
            <path d="M32.8268 47.8813H18.1602C17.6079 47.8813 17.1602 48.3599 17.1602 48.9501C17.1602 49.5404 17.6079 50.0189 18.1602 50.0189H32.8268C33.3791 50.0189 33.8268 49.5404 33.8268 48.9501C33.8268 48.3599 33.3791 47.8813 32.8268 47.8813Z" fill="#DFEAFB" />
            <defs>
                <filter id="filter0_d_1241_6067" x="3.49609" y="7.53027" width="44" height="52.9692" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="-3" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.803922 0 0 0 0 0.85098 0 0 0 0.349 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1241_6067" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1241_6067" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1241_6067" x1="25.5" y1="0.5" x2="25.5" y2="53.9383" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E3ECFA" />
                    <stop offset="1" stopColor="#DAE7FF" />
                </linearGradient>
            </defs>
        </svg>

    )
}
