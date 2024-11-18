import React from 'react'
import styles from './DashboardNavbar.module.css'
import UbiiLogo from './UbiiLogo'
import UserLogo from '../DashboardSidebar/UserLogo'
import UbiiIcon from '@/Components/UbiiIcon'
import { useDashboardLayoutDispatch } from '@/Context/Layouts/DashboardLayoutContext'

export default function DashboardNavbar() {
    const dispatch = useDashboardLayoutDispatch()

    function handleToggle() {
        dispatch({
            type: 'sidebardToggle'
        })
    }

    return (
        <nav className={styles.navbar}>
            {/* <UbiiLogo /> */}
            <div></div>
            <div className={styles.navEnd}>
                <UserLogo className={styles.userLogo} />
                <span
                    className={styles.togglerButton}
                    onClick={handleToggle}
                >
                    <UbiiIcon
                        icon='hamburguer'
                    />
                </span>
            </div>

        </nav>
    )
}
