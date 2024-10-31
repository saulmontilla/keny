import { PageProps } from '@/types'
import { usePage } from '@inertiajs/react'
import React from 'react'
import styles from './DashboardSidebar.module.css'

export default function UserInfo() {
    const user = usePage<PageProps>().props.auth.user

    return (
        <div className={styles.userInfoContainer}>
            <span className='fw-u-bold fz-u-12'>
                {user.username}
            </span>
        </div>
    )
}
