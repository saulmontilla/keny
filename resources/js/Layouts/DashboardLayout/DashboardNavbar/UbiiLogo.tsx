import React from 'react'
import styles from './DashboardNavbar.module.css'
import useTheme from '@/Hooks/useTheme'

export default function UbiiLogo() {
    const theme = useTheme()

    return (
        <img
            src={''}
            alt="Logo de la empresa"
            className={styles.ubiiLogo}
        />
    )
}
