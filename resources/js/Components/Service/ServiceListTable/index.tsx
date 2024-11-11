import React from 'react'
import UTableContainer from '../../UTable/Container'
import { TableColumn } from 'react-data-table-component'
import { Service } from '@/types/service'
import ServiceActions from './ServiceActions'
import { formatMonto } from '@/Helpers'

export default function ServiceListTable() {
    const columns: TableColumn<Service>[] = [
        {
            name: 'Servicio',
            selector: row => row.name,
        },
        {
            name: 'Monto Base',
            selector: row => formatMonto(row.base_amount),
        }, {
            name: 'Acciones',
            cell: (row) => (
                <ServiceActions service={row} />
            )
        }
    ]

    return (
        <UTableContainer
            columns={columns}
            showFilter={false}
        />
    )
}
