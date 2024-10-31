import TryAgain from '@/Components/TryAgain'
import UbiiIcon from '@/Components/UbiiIcon'
import { Menu } from '@/types/dashboard/menu'
import { Link, usePage } from '@inertiajs/react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Placeholder } from 'react-bootstrap'
import { MenuItem, SubMenu } from 'react-pro-sidebar'

export default function DashboardModules() {
    const [menu, setMenu] = useState<Menu[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const currentUrl = usePage().url

    function fetchMenu() {
        setLoading(true)
        setError(false)
        axios.get('/dashboard/menu')
            .then(response => {
                setMenu(response.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    useEffect(() => {
        fetchMenu()
    }, [])

    const recursiveRender = (module: Menu) => {
        const hasChildrens = module.childrens.length > 0
        const active = currentUrl === module.url

        if (hasChildrens) {
            return (
                <SubMenu
                    label={module.nombre}
                    key={module.id}
                    icon={module.icono && <UbiiIcon icon={module.icono} size="1.5rem" />}
                >
                    {module.childrens.map(recursiveRender)}
                </SubMenu>
            )
        } else {
            return (
                <MenuItem
                    key={module.id}
                    icon={module.icono && <UbiiIcon icon={module.icono} size="1.5rem" />}
                    component={<Link href={module.url} />}
                >

                    {module.nombre}
                </MenuItem>
            )
        }
    }

    if (loading) {
        return (
            <>
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
            </>
        )
    } else if (error) {
        return <TryAgain
            text='Error al cargar los modulos'
            onRetry={fetchMenu}
        />
    } else {
        return (
            <>
                <hr />
                {menu.map(recursiveRender)}
            </>
        )
    }
}
