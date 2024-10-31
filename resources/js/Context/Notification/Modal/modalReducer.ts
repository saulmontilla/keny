import { ModalContextState } from "@/types/notification"

interface SetStateAction {
    type: 'set_state',
    state: ModalContextState
}

interface AddStateAction {
    type: 'add_state',
    state: ModalContextState
}

interface OpenModalAction {
    type: 'open'
}

interface CloseModalAction {
    type: 'close'
}

type ModalReducerActions = SetStateAction | OpenModalAction | CloseModalAction | AddStateAction

export type ModalDispatch = React.Dispatch<ModalReducerActions>

export function modalReducer(state: ModalContextState, action: ModalReducerActions) {
    switch (action.type) {
        case 'set_state': return setState(state, action.state)
        case 'add_state': return addState(state, action.state)
        case 'open': return openModal(state)
        case 'close': return closeModal(state)
    }
}

function setState(state: ModalContextState, newState: ModalContextState): ModalContextState {
    return {
        ...newState
    }
}

function addState(state: ModalContextState, newState: ModalContextState): ModalContextState {
    return {
        ...state,
        ...newState
    }
}

function openModal(state: ModalContextState): ModalContextState {
    return {
        ...state,
        show: true
    }
}

function closeModal(state: ModalContextState): ModalContextState {
    return {
        ...state,
        show: false
    }
}