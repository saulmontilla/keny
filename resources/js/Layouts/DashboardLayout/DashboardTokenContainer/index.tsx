import TokenValidator from '@/Components/Dashboard/TokenValidator'
import { useDashboardLayout } from '@/Context/Layouts/DashboardLayoutContext'
import React from 'react'

export default function DashboardTokenContainer({ children }: React.PropsWithChildren) {
    const { showTokenValidation, tokenCallback } = useDashboardLayout()

    return (
        <>
            {showTokenValidation && <TokenValidator onSubmit={tokenCallback} />}

            <div className={showTokenValidation ? 'd-none' : ''}>
                {children}
            </div>
        </>
    )
}
