import UTableContainer from '@/Components/UTable/Container'
import { Brand, Vehicle } from '@/types/service'
import React from 'react'
import { TableColumn } from 'react-data-table-component'

export default function VehicleListTable() {
    const columns: TableColumn<Vehicle>[] = [
        {
            name: 'Marca',
            selector: row => row.brand.name,
        },
        {
            name: 'Modelo',
            selector: row => row.model.name,
        },
        {
            name: 'Año',
            selector: row => row.year,
        }
    ]

    return (
        <UTableContainer
            columns={columns}
            showFilter={false}
        />
    )
}
