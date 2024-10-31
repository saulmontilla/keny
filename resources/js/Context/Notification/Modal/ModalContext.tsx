import { BaseNotificationModalProps, ModalContextState } from '@/types/notification'
import React, { useReducer, useContext } from 'react'
import { ModalDispatch, modalReducer } from './modalReducer'
import BaseNotificationModal from '@/Components/Modals/BaseNotificationModal'

const ModalContext = React.createContext<BaseNotificationModalProps>({} as BaseNotificationModalProps)
const ModalDispatchContext = React.createContext<null | ModalDispatch>(null)

const initialState: ModalContextState = {
    show: false,
    onHide: () => { }
}

export default function ModalContextProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = useReducer(modalReducer, initialState)

    return (
        <ModalContext.Provider value={state}>
            <ModalDispatchContext.Provider value={dispatch}>
                <BaseNotificationModal {...state} />

                {children}
            </ModalDispatchContext.Provider>
        </ModalContext.Provider>
    )
}

export function useModal() {
    return useContext(ModalContext)
}

export function useModalDispatch() {
    return useContext(ModalDispatchContext) as ModalDispatch
}
