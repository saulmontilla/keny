import CreateVehicle from '@/Components/Vehicle/CreateVehicle'
import VehicleListTable from '@/Components/Vehicle/VehicleListTable'
import UTableContextProvider from '@/Context/UTable/UTableContext'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import React from 'react'
import { Card } from 'react-bootstrap'

const VehiclePage: PageWithLayout<PageProps> = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className='text-center'>
                    Configuración de modelos de vehículos
                </h3>

                <UTableContextProvider url='/dashboard/config/vehicle/datatable'>
                    <CreateVehicle />

                    <VehicleListTable />
                </UTableContextProvider>
            </Card.Body>
        </Card>
    )
}

VehiclePage.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default VehiclePage
