import { DashboardLayoutState } from "./DashboardLayoutContext"

interface SidebarToggleAction {
    type: 'sidebardToggle',
}

interface SidebarCollapseAction {
    type: 'sidebardCollapse',
}

interface ValidateTokenAction {
    type: 'validateToken',
    callback?: () => Promise<void>,
}

interface TokenValidatedAction {
    type: 'tokenValidated'
}

interface TokenCallbackCompletedAction {
    type: 'tokenCallbackCompleted'
}

type DashboardLayoutReducerActions = SidebarToggleAction
    | SidebarCollapseAction
    | ValidateTokenAction
    | TokenValidatedAction
    | TokenCallbackCompletedAction;

export type DashboardLayoutDispatch = React.Dispatch<DashboardLayoutReducerActions>

export function dashboardLayoutReducer(
    state: DashboardLayoutState,
    actions: DashboardLayoutReducerActions
): DashboardLayoutState {
    switch (actions.type) {
        case 'sidebardToggle': return toggleSidebar(state)
        case 'sidebardCollapse': return collapseSidebar(state)
        case 'validateToken': return validateToken(state, actions.callback)
        case 'tokenValidated': return tokenValidated(state)
        case 'tokenCallbackCompleted': return tokenCallbackCompleted(state)
    }
}

function toggleSidebar(state: DashboardLayoutState): DashboardLayoutState {
    return {
        ...state,
        sidebarToggled: !state.sidebarToggled
    }

}

function collapseSidebar(state: DashboardLayoutState): DashboardLayoutState {
    return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
    }
}

function validateToken(
    state: DashboardLayoutState,
    callback: ValidateTokenAction['callback'],
): DashboardLayoutState {
    return {
        ...state,
        showTokenValidation: true,
        tokenCallback: callback
    }
}

function tokenValidated(state: DashboardLayoutState): DashboardLayoutState {
    return {
        ...state,
        tokenValidated: true
    }
}
function tokenCallbackCompleted(state: DashboardLayoutState): DashboardLayoutState {
    return {
        ...state,
        showTokenValidation: false,
        tokenCallback: undefined,
        tokenValidated: false
    }
}