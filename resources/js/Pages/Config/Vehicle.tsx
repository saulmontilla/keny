import CreateVehicle from '@/Components/Vehicle/CreateVehicle'
import VehicleListTable from '@/Components/Vehicle/VehicleListTable'
import UTableContextProvider from '@/Context/UTable/UTableContext'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const VehiclePage: PageWithLayout<PageProps> = () => {
    return (
        <Row className='justify-content-center'>
            <Col md={8}>
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
            </Col>
        </Row>
    )
}

VehiclePage.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default VehiclePage
