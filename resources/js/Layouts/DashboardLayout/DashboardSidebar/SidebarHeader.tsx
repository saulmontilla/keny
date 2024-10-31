import React from 'react'
import UserLogo from './UserLogo'
import UserInfo from './UserInfo'
import styles from './DashboardSidebar.module.css'

export default function SidebarHeader() {
    return (
        <div className={styles.sidebarHeader}>
            <UserLogo />
            <UserInfo />
        </div>
    )
}
