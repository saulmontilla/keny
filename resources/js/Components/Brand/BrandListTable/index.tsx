import UTableContainer from '@/Components/UTable/Container'
import { Brand } from '@/types/service'
import React from 'react'
import { TableColumn } from 'react-data-table-component'

export default function BrandListTable() {
    const columns: TableColumn<Brand>[] = [
        {
            name: 'Modelo',
            selector: row => row.name,
        }
    ]

    return (
        <UTableContainer
            columns={columns}
            showFilter={false}
        />
    )
}
