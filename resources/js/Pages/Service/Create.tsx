import DashboardLayout from '@/Layouts/DashboardLayout'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Create() {
    const props = usePage().props

    console.log(props)
    return (
        <DashboardLayout>
            <div>Crear servicio</div>
        </DashboardLayout>
    )
}
