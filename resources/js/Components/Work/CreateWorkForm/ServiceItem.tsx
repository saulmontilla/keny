import FormikControl from '@/Components/Forms/Controls/FormikControl'
import UbiiIcon from '@/Components/UbiiIcon'
import { CreateWorkSchema } from '@/Schemas/Dashboard/CreateWorkSchema'
import { ArrayHelpers } from 'formik'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import AddServiceButton from './AddServiceButton'
import ServiceTypeSelect from '@/Components/Forms/Common/ServiceTypeSelect'

interface ServiceItemProps {
    index: number,
    arrayHelpers: ArrayHelpers,
    servicesArray: CreateWorkSchema['initialValues']['services']
}

export default function ServiceItem(props: ServiceItemProps) {
    const { index, servicesArray, arrayHelpers } = props

    const isLastItem = index === servicesArray.length - 1


    function handleRemoveService() {
        arrayHelpers.remove(index)
    }

    return (
        <>
            <Row>
                <Col md='4'>
                    <FormikControl
                        control='text'
                        name={`services.${index}.name`}
                        label='Nombre'
                        material
                    />
                </Col>
                <Col md='2'>
                    <FormikControl
                        control='currency'
                        name={`services.${index}.amount`}
                        label='Monto'
                        material
                    />
                </Col>
                <Col md='2' className='d-flex align-items-center'>
                    <FormikControl
                        control='checkbox'
                        name={`services.${index}.rendersInPdf`}
                        label='Reflejar en PDF'
                        id={`services.${index}.rendersInPdf`}
                    />
                </Col>
                <Col md='3' >
                    <ServiceTypeSelect
                        name={`services.${index}.type`}
                        firstOption='Seleccione un tipo de servicio'
                    />
                </Col>
                <Col md='1' className='d-flex align-items-center'>
                    <Button
                        variant='danger'
                        size='sm'
                        title='Eliminar servicio'
                        onClick={handleRemoveService}
                    >
                        <UbiiIcon
                            icon='trash'
                            size='1rem'
                            color1={'#fff'}
                        />
                    </Button>
                </Col>
            </Row>

            {isLastItem && (
                <AddServiceButton arrayHelpers={arrayHelpers} />
            )}
        </>
    )
}
