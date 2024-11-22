import React from 'react'
import { WorkHistoryModalProps } from '.'
import { Col, Row } from 'react-bootstrap'
import { DateTime } from 'luxon'
import { formatMonto } from '@/Helpers'

export default function WorkHistoryDetails(props: WorkHistoryModalProps) {
    const { work } = props
    const totalAmount = work.total_service_amount + work.labour + work.materials

    return (
        <>
            <Row>
                <Col md="3">
                    <strong>Fecha</strong>
                    <div className="d-block">
                        {DateTime.fromISO(props.work.date).toFormat('dd-MM-yyyy')}
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md="3">
                    <strong>Placa</strong>
                    <div className="d-block">
                        {props.work.plate}
                    </div>
                </Col>
                <Col md="3">
                    <strong>Marca</strong>
                    <div className="d-block">
                        {props.work.vehicle.brand.name}
                    </div>
                </Col>
                <Col md="3">
                    <strong>Modelo</strong>
                    <div className="d-block">
                        {props.work.vehicle.model.name}
                    </div>
                </Col>
                <Col md="3">
                    <strong>Año</strong>
                    <div className="d-block">
                        {props.work.vehicle.year}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <strong>Descripción</strong>
                    <div className="d-block">
                        {props.work.description}
                    </div>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col>
                    <strong>Gastos</strong>

                    {props.work.services.map(service => (
                        <Row key={service.id}>
                            <Col md="4" style={{ borderBottom: '1px solid black' }}>
                                {service.name}
                            </Col>
                            <Col md="2" className='text-end' style={{ borderBottom: '1px solid black' }}>
                                {formatMonto(service.pivot.amount)}
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>

            <Row className="mt-3">
                <Col md="4" style={{ borderBottom: '1px solid black' }}>
                    Gasto de materiales
                </Col>
                <Col md="2" className='text-end' style={{ borderBottom: '1px solid black' }}>
                    {formatMonto(props.work.materials)}
                </Col>
            </Row>

            <Row className="mt-3">
                <Col md="4" style={{ borderBottom: '1px solid black' }}>
                    Gasto de repuestos
                </Col>
                <Col md="2" className='text-end' style={{ borderBottom: '1px solid black' }}>
                    {formatMonto(props.work.labour)}
                </Col>
            </Row>

            <Row className="mt-3">
                <Col md="4">
                    <strong>Total</strong>
                </Col>
                <Col md="2" className='text-end'>
                    {formatMonto(totalAmount)}
                </Col>
            </Row>
        </>
    )
}
