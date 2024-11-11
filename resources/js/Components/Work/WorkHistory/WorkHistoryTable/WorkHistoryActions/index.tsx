import { Work } from '@/types/service'
import React from 'react'
import ViewAction from './ViewAction'

export interface WorkHistoryActionsProps {
    work: Work
}

export default function WorkHistoryActions(props: WorkHistoryActionsProps) {
    return (
        <>
            <ViewAction {...props} />
        </>
    )
}
