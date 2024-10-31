import useSvgHandler from '@/Hooks/useSvgHandler'
import React from 'react'
import { UbiiIconCommonProps } from 'ubiionline/icon'

export default function LogoutIcon(props: UbiiIconCommonProps) {
    const svg = useSvgHandler(props)

    return (
        <svg {...svg.handlers} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.83594 0.666992C2.1729 0.666992 1.53701 0.930384 1.06817 1.39923C0.599329 1.86807 0.335938 2.50395 0.335938 3.16699V14.8337C0.335938 15.4967 0.59933 16.1326 1.06817 16.6014C1.53701 17.0703 2.1729 17.3337 2.83594 17.3337H11.1693C11.8323 17.3337 12.4682 17.0703 12.937 16.6014C13.4059 16.1326 13.6693 15.4967 13.6693 14.8337V14.0003C13.6693 13.5401 13.2962 13.167 12.8359 13.167C12.3757 13.167 12.0026 13.5401 12.0026 14.0003V14.8337C12.0026 15.0547 11.9148 15.2666 11.7585 15.4229C11.6022 15.5792 11.3903 15.667 11.1693 15.667H2.83594C2.61492 15.667 2.40296 15.5792 2.24668 15.4229C2.0904 15.2666 2.0026 15.0547 2.0026 14.8337V3.16699C2.0026 2.94598 2.0904 2.73402 2.24668 2.57774C2.40296 2.42146 2.61492 2.33366 2.83594 2.33366H11.1693C11.3903 2.33366 11.6022 2.42146 11.7585 2.57774C11.9148 2.73402 12.0026 2.94598 12.0026 3.16699V4.00033C12.0026 4.46056 12.3757 4.83366 12.8359 4.83366C13.2962 4.83366 13.6693 4.46056 13.6693 4.00033V3.16699C13.6693 2.50395 13.4059 1.86807 12.937 1.39923C12.4682 0.930384 11.8323 0.666992 11.1693 0.666992H2.83594Z" fill="#D55F5A" />
            <path d="M10.9252 5.91107C10.5998 5.58563 10.0721 5.58563 9.74668 5.91107C9.42124 6.23651 9.42124 6.76414 9.74668 7.08958L10.8241 8.16699H7.0026C6.54237 8.16699 6.16927 8.54009 6.16927 9.00033C6.16927 9.46056 6.54237 9.83366 7.0026 9.83366H10.8241L9.74668 10.9111C9.42124 11.2365 9.42124 11.7641 9.74668 12.0896C10.0721 12.415 10.5998 12.415 10.9252 12.0896L13.4252 9.58958C13.7506 9.26414 13.7506 8.73651 13.4252 8.41107L10.9252 5.91107Z" fill="#D55F5A" />
        </svg>
    )
}