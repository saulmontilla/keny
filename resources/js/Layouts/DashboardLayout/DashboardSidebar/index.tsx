import React from 'react'
import { Sidebar, Menu, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import SidebarHeader from './SidebarHeader';
import SidebarBottom from './SidebarBottom';
import DashboardModules from './DashboardModules';
import styles from './DashboardSidebar.module.css'
import DashboardCollapseButton from './DashboardCollapseButton';
import { useDashboardLayout, useDashboardLayoutDispatch } from '@/Context/Layouts/DashboardLayoutContext';

export default function DashboardSidebar() {
    const { sidebarCollapsed, sidebarToggled } = useDashboardLayout()
    const dispatch = useDashboardLayoutDispatch()
    const activeButtonClasses = `.${menuClasses.button}:hover, .${menuClasses.button}.${menuClasses.active}`
    const activeSubmenuButtonClasses = `
        .${menuClasses.subMenuRoot} .${menuClasses.menuItemRoot} .${menuClasses.button}:hover,
        .${menuClasses.subMenuRoot} .${menuClasses.menuItemRoot} .${menuClasses.button}.${menuClasses.active}
    `
    const iconClases = `.${menuClasses.button} svg *`
    const activeIconClases = `.${menuClasses.button}:hover svg *, .${menuClasses.button}.${menuClasses.active} svg *`

    function handleToggle() {
        dispatch({ type: 'sidebardToggle' })
    }

    return (
        <>
            <Sidebar
                breakPoint='md'
                width='300px'
                className={styles.sidebar}
                toggled={sidebarToggled}
                collapsed={sidebarCollapsed}
                onBackdropClick={handleToggle}
                rootStyles={{
                    border: 'none',
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 10px 0px #0000002E',
                        borderRight: '1px solid #0000001A',
                        borderRadius: '12px',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        paddingTop: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                    [`.${menuClasses.root}`]: {
                        backgroundColor: '#fff',
                        marginTop: '2rem'
                    },
                }}>
                <SidebarHeader />
                <Menu
                    rootStyles={{

                        [`.${menuClasses.button}`]: {
                            borderRadius: '8px',
                        },
                        [activeButtonClasses]: {
                            backgroundColor: 'var(--ubii-blue)',
                            color: '#fff'
                        },
                        [activeSubmenuButtonClasses]: {
                            backgroundColor: '#fff',
                            color: '#000000'
                        },
                        [iconClases]: {
                            fill: '#757575',
                        },
                        [activeIconClases]: {
                            fill: '#fff',
                        },
                        [`.${menuClasses.subMenuRoot} .${menuClasses.menuItemRoot} .${menuClasses.button} > span`]: {
                            padding: '1rem'
                        },
                        [`.${menuClasses.subMenuRoot} .${menuClasses.menuItemRoot} .${menuClasses.button}:hover > span`]: {
                            backgroundColor: 'var(--ubii-light-blue)',
                            color: '#000000',
                        },
                        [`.${menuClasses.subMenuRoot} .${menuClasses.subMenuContent}`]: {
                            marginTop: '1rem'
                        },
                        [`.${menuClasses.subMenuRoot} .${menuClasses.menuItemRoot} .${menuClasses.button}:before`]: {
                            content: "''",
                            width: '20px',
                            height: '130%',
                            position: 'absolute',
                            transform: 'translate(-1rem, -30px)',
                            borderLeft: '4px solid blue',
                            borderBottom: '4px solid blue',
                            borderRadius: '0 0 0 15px',
                            borderColor: 'var(--ubii-dark-blue)'
                        }

                    }}
                >
                    <DashboardModules />
                </Menu>
                <SidebarBottom />
            </Sidebar>
            <DashboardCollapseButton />
        </>
    )
}
