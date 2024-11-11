import CreateWorkForm from '@/Components/Work/CreateWorkForm'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import React from 'react'
import { Card } from 'react-bootstrap'

const Create: PageWithLayout<PageProps> = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className='text-center'>
                    Registrar trabajo
                </h3>

                <CreateWorkForm />
            </Card.Body>
        </Card>
    )
}

Create.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default Create
