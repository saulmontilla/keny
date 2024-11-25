import React from 'react'
import styles from './DashboardNavbar.module.css'
import useTheme from '@/Hooks/useTheme'

type UbiiLogoProps = React.ImgHTMLAttributes<HTMLImageElement>

export default function UbiiLogo(props: UbiiLogoProps) {
    const theme = useTheme()

    return (
        <img
            src={'/images/logo.jpg'}
            alt="Logo de la empresa"
            className={styles.ubiiLogo}
            {...props}
        />
    )
}
