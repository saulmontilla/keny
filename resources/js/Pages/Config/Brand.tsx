import BrandListTable from '@/Components/Brand/BrandListTable'
import CreateBrand from '@/Components/Brand/CreateBrand'
import UTableContextProvider from '@/Context/UTable/UTableContext'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import React from 'react'
import { Card } from 'react-bootstrap'

const BrandPage: PageWithLayout<PageProps> = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className='text-center'>
                    Configuración de modelos
                </h3>

                <UTableContextProvider url='/brand/datatable'>
                    <CreateBrand />

                    <BrandListTable />
                </UTableContextProvider>
            </Card.Body>
        </Card>
    )
}

BrandPage.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default BrandPage
