import React from 'react'
import useSvgHandler from '../../Hooks/useSvgHandler'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function QuestionIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} xmlns="http://www.w3.org/2000/svg" width="34.8" height="34.8" viewBox="0 0 34.8 34.8">
            <g id="pregunta_2_" data-name="pregunta (2)" transform="translate(-0.003 0)">
                <g id="Group_4201" data-name="Group 4201" transform="translate(0.003 0)">
                    <g id="Group_4200" data-name="Group 4200" transform="translate(0 0)">
                        <path id="Path_10451" data-name="Path 10451" d="M34.666,31.514l-2.389-6.953A17,17,0,1,0,17.02,34.035h.027a17.07,17.07,0,0,0,7.517-1.761l6.953,2.389a2.5,2.5,0,0,0,.813.137,2.481,2.481,0,0,0,2.337-3.286Zm-2.05,1.1a.4.4,0,0,1-.428.1L24.82,30.18a1.031,1.031,0,0,0-.818.064A14.948,14.948,0,1,1,30.247,24a1.032,1.032,0,0,0-.064.818l2.532,7.367A.4.4,0,0,1,32.616,32.613Z" transform="translate(-0.003 0)" fill={svg.color1} />
                    </g>
                </g>
                <g id="Group_4203" data-name="Group 4203" transform="translate(15.82 24.655)">
                    <g id="Group_4202" data-name="Group 4202">
                        <path id="Path_10452" data-name="Path 10452" d="M233.752,362.748a1.032,1.032,0,1,0,1.032,1.032A1.043,1.043,0,0,0,233.752,362.748Z" transform="translate(-232.719 -362.748)" fill={svg.color1} />
                    </g>
                </g>
                <g id="Group_4205" data-name="Group 4205" transform="translate(11.72 8.678)">
                    <g id="Group_4204" data-name="Group 4204">
                        <path id="Path_10453" data-name="Path 10453" d="M177.528,127.674a5.139,5.139,0,0,0-5.133,5.133,1.032,1.032,0,0,0,2.063,0,3.069,3.069,0,1,1,3.069,3.069,1.032,1.032,0,0,0-1.032,1.032v4.208a1.032,1.032,0,1,0,2.063,0v-3.28a5.133,5.133,0,0,0-1.032-10.161Z" transform="translate(-172.395 -127.674)" fill={svg.color1} />
                    </g>
                </g>
            </g>
        </svg>

    )
}
