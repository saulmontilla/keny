import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function InfoIcon2(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.25C13.957 0.25 18 4.29297 18 9.25C18 14.2422 13.957 18.25 9 18.25C4.00781 18.25 0 14.2422 0 9.25C0 4.29297 4.00781 0.25 9 0.25ZM9 4.75C8.36719 4.75 7.875 5.27734 7.875 5.875C7.875 6.50781 8.36719 7 9 7C9.59766 7 10.125 6.50781 10.125 5.875C10.125 5.27734 9.59766 4.75 9 4.75ZM10.4062 13.75C10.8633 13.75 11.25 13.3984 11.25 12.9062C11.25 12.4492 10.8633 12.0625 10.4062 12.0625H9.84375V8.96875C9.84375 8.51172 9.45703 8.125 9 8.125H7.875C7.38281 8.125 7.03125 8.51172 7.03125 8.96875C7.03125 9.46094 7.38281 9.8125 7.875 9.8125H8.15625V12.0625H7.59375C7.10156 12.0625 6.75 12.4492 6.75 12.9062C6.75 13.3984 7.10156 13.75 7.59375 13.75H10.4062Z" fill={svg.color1} />
        </svg>
    )
}
