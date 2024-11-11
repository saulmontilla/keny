import CreateService from '@/Components/Service/CreateService'
import ServiceListTable from '@/Components/Service/ServiceListTable'
import CreateWorkForm from '@/Components/Work/CreateWorkForm'
import UTableContextProvider from '@/Context/UTable/UTableContext'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import React from 'react'
import { Card } from 'react-bootstrap'

const ServicePage: PageWithLayout<PageProps> = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className='text-center'>
                    Configuración de serivicios
                </h3>

                <UTableContextProvider url='/service/datatable'>
                    <CreateService />

                    <ServiceListTable />
                </UTableContextProvider>
            </Card.Body>
        </Card>
    )
}

ServicePage.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default ServicePage
