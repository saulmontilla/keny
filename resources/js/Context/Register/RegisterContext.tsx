import { RequiredDocument } from '@/types/documents'
import React, { PropsWithChildren, useReducer, useEffect, useContext, Dispatch } from 'react'
import { RegisterDispatch, registerReducer } from './registerReducer'
import axios from 'axios'

interface RegisterProviderProps {
    registerType: 'cliente' | 'aliado'
}

export interface RegisterState {
    documents: RequiredDocument[],
    loadingDocuments: boolean,
    errorLoadingDocuments: boolean,
    showDocumentsModal: boolean,
    stepTitle: string,
    type: 'natural' | 'juridic',
    registerType: RegisterProviderProps['registerType'],
    shouldRequireDocuments: boolean
}

interface RegisterHelpers {
    fetchDocuments: () => Promise<void>
}

const initialState: RegisterState = {
    documents: [],
    loadingDocuments: false,
    errorLoadingDocuments: false,
    showDocumentsModal: false,
    stepTitle: '',
    type: 'juridic',
    registerType: 'cliente',
    shouldRequireDocuments: true
}

const RegisterContext = React.createContext({} as RegisterState & RegisterHelpers)
const RegisterDispatchContext = React.createContext<RegisterDispatch | null>(null)

export default function RegisterProvider({ children, registerType }: PropsWithChildren<RegisterProviderProps>) {
    initialState.registerType = registerType

    const [state, dispatch] = useReducer(registerReducer, initialState)

    async function fetchDocuments() {
        dispatch({ type: 'setDocumentsLoading', loading: true, error: false })

        axios.get('/documents/required')
            .then(response => {
                dispatch({ type: 'setDocuments', documents: response.data })
                dispatch({ type: 'setDocumentsLoading', loading: false, error: false })
            })
            .catch(() => {
                dispatch({ type: 'setDocumentsLoading', loading: false, error: true })
            })
    }

    useEffect(() => {
        fetchDocuments()
    }, [])

    const contextValue: RegisterState & RegisterHelpers = {
        ...state,
        fetchDocuments
    }

    return (
        <RegisterContext.Provider value={contextValue}>
            <RegisterDispatchContext.Provider value={dispatch}>
                {children}
            </RegisterDispatchContext.Provider>
        </RegisterContext.Provider>
    )
}

export function useRegister() {
    return useContext(RegisterContext)
}

export function useRegisterDispatch() {
    return useContext(RegisterDispatchContext) as RegisterDispatch
}