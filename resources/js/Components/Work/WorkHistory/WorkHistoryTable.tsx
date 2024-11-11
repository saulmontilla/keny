import UTableContainer from '@/Components/UTable/Container'
import { formatMonto } from '@/Helpers'
import { Work } from '@/types/service'
import { DateTime } from 'luxon'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TableColumn } from 'react-data-table-component'

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
            name: 'Modelo',
            selector: row => row.brand.name
        },
        {
            name: 'Materiales',
            selector: row => formatMonto(row.materials)
        },
        {
            name: 'Mano de obra',
            selector: row => formatMonto(row.labour)
        },
        {
            name: 'Acciones',
            cell: row => null
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
