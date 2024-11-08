import ServicesSelect from '@/Components/Forms/Common/ServicesSelect'
import { ci_fromValue } from '@/Components/Forms/Controls/CurrencyControl'
import TryAgain from '@/Components/TryAgain'
import useFetch from '@/Hooks/useFetch'
import { CreateWorkSchema } from '@/Schemas/Dashboard/CreateWorkSchema'
import { Service } from '@/types/service'
import { useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'

export default function ServiceSelectSection() {
    const [allServices, loading, error, fetchServices] = useFetch<Service[]>({
        url: '/service',
        initialValue: []
    })
    const formik = useFormikContext<CreateWorkSchema['initialValues']>()
    const { services: selectedServices, servicesWithAmount } = formik.values

    useEffect(() => {
        fetchServices()
    }, [])

    useEffect(() => {
        const arrangedSelectedServices = selectedServices.map(selecedService => {
            const service = allServices.find(allService => allService.id == selecedService.value)

            if (!service) return null

            const serviceExistInAmount = servicesWithAmount.find(serviceWithAmount => serviceWithAmount.id == service.id)

            const data = { ...service }

            if (serviceExistInAmount) {
                data.base_amount = serviceExistInAmount.base_amount
            } else {
                data.base_amount = ci_fromValue(service.base_amount)
            }

            return data
        })

        formik.setFieldValue('servicesWithAmount', [...arrangedSelectedServices])
    }, [selectedServices])

    if (loading) {
        return (
            <Row>
                <Col>
                    <Spinner variant='primary' />
                </Col>
            </Row>
        )
    }

    if (error) {
        return (
            <TryAgain
                text='Error al cargar los servicios'
                onRetry={() => fetchServices()}
            />
        )
    }

    return (
        <Row>
            <Col>
                <ServicesSelect
                    name='services'
                    label='Servicios'
                    isMulti
                />
            </Col>
        </Row>
    )
}
