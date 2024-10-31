import React from 'react'
import styles from './DashboardNavbar.module.css'
import useTheme from '@/hooks/useTheme'

export default function UbiiLogo() {
    const theme = useTheme()

    return (
        <img
            src={theme.register.navbar.logo}
            alt="Logo de Ubii"
            className={styles.ubiiLogo}
        />
    )
}
