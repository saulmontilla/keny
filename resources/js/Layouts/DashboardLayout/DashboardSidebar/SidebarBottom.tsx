import React, { useState } from 'react'
import styles from './DashboardSidebar.module.css'
import UbiiIcon from '@/Components/UbiiIcon'
import axios from 'axios'
import { router } from '@inertiajs/react'
import { Spinner } from 'react-bootstrap'
import { Menu, MenuItem } from 'react-pro-sidebar'
import { useDashboardLayout } from '@/Context/Layouts/DashboardLayoutContext'

export default function SidebarBottom() {
    const [loading, setLoading] = useState(false)
    const { sidebarCollapsed } = useDashboardLayout()

    function handleLogout() {
        if (loading) return

        setLoading(true)
        router.post('/dashboard/logout')
    }

    const logoutIcon = <UbiiIcon icon='logout' size="1.5rem" />
    const loadingIcon = <Spinner animation='border' className='text-danger' />

    return (
        <Menu className={styles.bottomContainer}>
            <hr className='text-black' />
            <MenuItem
                icon={(loading && sidebarCollapsed) ? loadingIcon : logoutIcon}
                onClick={handleLogout}
            >
                {loading
                    ? loadingIcon
                    : 'Cerrar sesión'
                }
            </MenuItem>

        </Menu>
    )

    return (
        <div
            className={styles.bottomContainer}
            onClick={handleLogout}
        >
            <hr className='text-black' />
            <UbiiIcon
                icon='logout'
            />
            <span className='ms-3'>
                Cerrar sesión
            </span>
            {loading && (
                <Spinner animation='border' className='ms-3 text-secondary' />
            )}
        </div>
    )
}
