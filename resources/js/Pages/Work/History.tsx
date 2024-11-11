import CreateWorkForm from '@/Components/Work/CreateWorkForm'
import WorkHistoryTable from '@/Components/Work/WorkHistory/WorkHistoryTable'
import UTableContextProvider from '@/Context/UTable/UTableContext'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import React from 'react'
import { Card } from 'react-bootstrap'

const History: PageWithLayout<PageProps> = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className='text-center'>
                    Historial de trabajos
                </h3>

                <UTableContextProvider url='/dashboard/work/history/datatable'>
                    <WorkHistoryTable />
                </UTableContextProvider>
            </Card.Body>
        </Card>
    )
}

History.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default History
