import UTableContainer from '@/Components/UTable/Container'
import { formatMonto } from '@/Helpers'
import { Work } from '@/types/service'
import { DateTime } from 'luxon'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TableColumn } from 'react-data-table-component'
import WorkHistoryActions from './WorkHistoryActions'

export default function WorkHistoryTable() {
    const columns: TableColumn<Work>[] = [
        {
            name: 'Fecha',
            selector: row => DateTime.fromISO(row.date).toFormat('dd-MM-yyyy')
        },
        {
            name: 'Placa',
            selector: row => row.plate
        },
        {
            name: 'Marca',
            selector: row => row.vehicle.brand.name
        },
        {
            name: 'Modelo',
            selector: row => row.vehicle.model.name
        },
        {
            name: 'Año',
            selector: row => row.vehicle.year
        },
        {
            name: 'Costo',
            selector: row => formatMonto(row.total_service_amount + row.labour + row.materials)
        },
        {
            name: 'Acciones',
            cell: row => (
                <WorkHistoryActions work={row} />
            )
        }
    ]

    return (
        <Row>
            <Col>
                <UTableContainer
                    columns={columns}
                />
            </Col>
        </Row>
    )
}
