import { CreateWorkSchema } from '@/Schemas/Dashboard/CreateWorkSchema'
import { useFormikContext, ArrayHelpers } from 'formik'
import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import useFetch from '@/Hooks/useFetch'
import TryAgain from '@/Components/TryAgain'
import { Service } from '@/types/service'
import ServiceItem from './ServiceItem'
import ErrorMessageControl from '@/Components/Forms/Controls/ErrorMessageControl'
import AddServiceButton from './AddServiceButton'

interface AmountSectionProps {
    arrayHelpers: ArrayHelpers;
}

export default function AmountSetction(props: AmountSectionProps) {
    const formik = useFormikContext<CreateWorkSchema['initialValues']>()
    const { services } = formik.values
    const [servicesList, loadingServicesList, error, fetchServicesList] = useFetch<Service[]>({
        url: '/service',
        initialValue: []
    })

    useEffect(() => {
        fetchServicesList()
            .then(data => {
                formik.setFieldValue('services', data.map(service => ({
                    id: service.id,
                    amount: 0,
                    name: service.name,
                    rendersInPdf: false,
                    type: service.service_type_id.toString()
                })))
            })
    }, [])

    if (loadingServicesList) {
        return (
            <Spinner animation='border' variant='primary' />
        )
    }

    if (error) {
        return (
            <TryAgain
                onRetry={() => fetchServicesList()}
                text='Ocurrió un error al cargar los servicios'
            />
        )
    }

    return (
        <>
            <Row className='my-3'>
                <Col>
                    <h4>
                        Montos
                    </h4>
                </Col>
            </Row>

            {services.map((service, index, servicesArray) => (
                <ServiceItem
                    key={service.id}
                    index={index}
                    arrayHelpers={props.arrayHelpers}
                    servicesArray={servicesArray}
                />
            ))}

            {services.length === 0 && (
                <>
                    <AddServiceButton arrayHelpers={props.arrayHelpers} />
                    <ErrorMessageControl name='services' />
                </>

            )}
        </>
    )
}
