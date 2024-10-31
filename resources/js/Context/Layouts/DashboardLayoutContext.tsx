import React, { useReducer, useContext } from 'react'
import { DashboardLayoutDispatch, dashboardLayoutReducer } from './DashboardLayoutReducer'

export interface DashboardLayoutState {
    sidebarToggled: boolean,
    sidebarCollapsed: boolean,
    showTokenValidation: boolean,
    tokenValidated: boolean,
    tokenCallback?: () => Promise<void>
}

const DashboardLayoutContext = React.createContext<DashboardLayoutState>({} as DashboardLayoutState)
const DashboardLayoutDispatchContext = React.createContext<DashboardLayoutDispatch | null>(null)

const initialValues: DashboardLayoutState = {
    sidebarToggled: false,
    sidebarCollapsed: false,
    showTokenValidation: false,
    tokenValidated: false,
}

export default function DashboardLayoutContextProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = useReducer(dashboardLayoutReducer, initialValues)

    return (
        <DashboardLayoutContext.Provider value={state}>
            <DashboardLayoutDispatchContext.Provider value={dispatch}>
                {children}
            </DashboardLayoutDispatchContext.Provider>
        </DashboardLayoutContext.Provider>
    )
}

export function useDashboardLayout() {
    return useContext(DashboardLayoutContext)
}

export function useDashboardLayoutDispatch() {
    return useContext(DashboardLayoutDispatchContext) as DashboardLayoutDispatch
}
