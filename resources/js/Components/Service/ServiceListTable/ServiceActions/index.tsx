import React from 'react'
import EditAction from './EditAction'
import { Service } from '@/types/service'

export interface ServiceActionsProps {
    service: Service
}

export default function ServiceActions(props: ServiceActionsProps) {
    return (
        <>
            <EditAction {...props} />
        </>
    )
}
