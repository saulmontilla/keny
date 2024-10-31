import { UTableContext } from '@/Context/UTable/UTableContext';
import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { ExportButtonProps } from 'ubiionline/datatable'

export default function ExportButton(props: ExportButtonProps) {
    const { text, ...rest } = props
    const { handleExport } = useContext(UTableContext);

    return (
        <Button variant="info"
            type="button"
            className="btn-filter ml-3"
            onClick={() => handleExport(props.endpoint, props.defaultFileName)}
            {...rest}
        >
            {text}
        </Button>
    )
}
