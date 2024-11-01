import CreateServiceForm from '@/Components/Service/CreateServiceForm'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { PageProps, PageWithLayout } from '@/types'
import { usePage } from '@inertiajs/react'
import React from 'react'
import { Card } from 'react-bootstrap'

const Create: PageWithLayout<PageProps> = () => {
    return (
        <Card>
            <Card.Body>
                <h3 className='text-center'>
                    Crear servicio
                </h3>

                <CreateServiceForm />
            </Card.Body>
        </Card>
    )
}

Create.layout = page => <DashboardLayout>{page}</DashboardLayout>

export default Create
