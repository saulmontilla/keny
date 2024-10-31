import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function UsersIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="47.849" height="26.755" viewBox="0 0 47.849 26.755">
            <g id="usuarios-icon" transform="translate(18113.742 12189.164)">
                <g id="miperfil" transform="translate(-18099.984 -12189.164)">
                    <circle id="Ellipse_761" data-name="Ellipse 761" cx="7.517" cy="7.517" r="7.517" transform="translate(2.323 0)" fill="#615bfb" opacity="0.5" />
                    <path id="Path_10703" data-name="Path 10703" d="M679.607,214.786H659.926a9.84,9.84,0,0,1,19.681,0Z" transform="translate(-659.926 -195.594)" fill="#00a1fd" opacity="0.65" />
                </g>
                <g id="miperfil-2" data-name="miperfil" transform="translate(-18085.574 -12183.289)">
                    <circle id="Ellipse_761-2" data-name="Ellipse 761" cx="7.517" cy="7.517" r="7.517" transform="translate(2.323 0)" fill="#615bfb" opacity="0.5" />
                    <path id="Path_10703-2" data-name="Path 10703" d="M679.607,216.475H659.926c0-6.366,4.405-11.528,9.839-11.528S679.607,210.108,679.607,216.475Z" transform="translate(-659.926 -195.594)" fill="#00a1fd" opacity="0.65" />
                </g>
                <g id="miperfil-3" data-name="miperfil" transform="translate(-18113.742 -12183.289)">
                    <circle id="Ellipse_761-3" data-name="Ellipse 761" cx="7.517" cy="7.517" r="7.517" transform="translate(2.323 0)" fill="#615bfb" opacity="0.5" />
                    <path id="Path_10703-3" data-name="Path 10703" d="M679.607,216.321H659.926c0-6.281,4.405-11.374,9.839-11.374S679.607,210.04,679.607,216.321Z" transform="translate(-659.926 -195.594)" fill="#00a1fd" opacity="0.65" />
                </g>
            </g>
        </svg>
    )
}
