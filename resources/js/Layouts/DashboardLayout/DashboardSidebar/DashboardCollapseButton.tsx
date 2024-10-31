import UbiiIcon from '@/Components/UbiiIcon'
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './DashboardSidebar.module.css'
import { useDashboardLayout, useDashboardLayoutDispatch } from '@/Context/Layouts/DashboardLayoutContext'

export default function DashboardCollapseButton() {
    const dispatch = useDashboardLayoutDispatch()
    const { sidebarCollapsed } = useDashboardLayout()

    function handleClick() {
        dispatch({
            type: 'sidebardCollapse'
        })
    }

    return (
        <Button
            variant='u-blue'
            className={styles.collapseButton}
            onClick={handleClick}
        >
            <UbiiIcon
                icon={sidebarCollapsed ? 'arrow-r' : 'arrow-l'}
                color1="#fff"
            />
        </Button>
    )
}
