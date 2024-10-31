import React from 'react'
import styles from './DashboardSidebar.module.css'
import { usePage } from '@inertiajs/react'
import { PageProps } from '@/types'

interface UserLogoProps {
    className?: string
}

export default function UserLogo(props: UserLogoProps) {
    const username = usePage<PageProps>().props.auth.user.username

    const acronym = username.split(/\s/)
        .reduce((accumulator, value, index) => {
            if (index > 1) {
                return accumulator
            }

            return accumulator += value.slice(0, 1)
        }, '')

    return (
        <div>
            <div className={`${styles.userLogo} ${props.className ? props.className : ''}`}>
                {acronym}
            </div>
        </div>
    )
}
