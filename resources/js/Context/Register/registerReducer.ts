import { RequiredDocument } from "@/types/documents";
import { RegisterState } from "./RegisterContext";

interface SetDocumentsAction {
    type: 'setDocuments',
    documents: RequiredDocument[]
}

interface ShowDocumentsModalAction {
    type: 'showDocumentsModal',
    show: boolean
}

interface SetDocumentsLoadingAction {
    type: 'setDocumentsLoading',
    loading: boolean,
    error: boolean
}

interface SetStepTtitleAction {
    type: 'setStepTitle',
    title: string
}

interface setTypeAction {
    type: 'setType',
    clientType: RegisterState['type']
}

interface setShouldRequireDocumentsAction {
    type: 'setShouldRequireDocuments',
    shouldRequireDocuments: boolean
}

type RegisterActions = SetDocumentsAction
    | SetDocumentsLoadingAction
    | ShowDocumentsModalAction
    | SetStepTtitleAction
    | setTypeAction
    | setShouldRequireDocumentsAction;

export type RegisterDispatch = React.Dispatch<RegisterActions>

export function registerReducer(state: RegisterState, action: RegisterActions): RegisterState {
    switch (action.type) {
        case 'setDocuments': return setDocuments(state, action.documents)
        case 'setDocumentsLoading': return setDocumentsLoading(state, action.loading, action.error)
        case 'showDocumentsModal': return setShowDocumentsModal(state, action.show)
        case 'setStepTitle': return setStepTitleAction(state, action.title)
        case 'setType': return setType(state, action.clientType)
        case 'setShouldRequireDocuments': return setShouldRequireDocuments(state, action.shouldRequireDocuments)
    }
}

function setDocuments(state: RegisterState, documents: RequiredDocument[]): RegisterState {
    return {
        ...state,
        documents
    }
}

function setDocumentsLoading(state: RegisterState, loading: boolean, error: boolean): RegisterState {
    return {
        ...state,
        loadingDocuments: loading,
        errorLoadingDocuments: error
    }
}

function setShowDocumentsModal(state: RegisterState, show: boolean): RegisterState {
    return {
        ...state,
        showDocumentsModal: show
    }
}

function setStepTitleAction(state: RegisterState, title: string): RegisterState {
    return {
        ...state,
        stepTitle: title
    }
}

function setType(state: RegisterState, type: RegisterState['type']): RegisterState {
    return {
        ...state,
        type
    }
}

function setShouldRequireDocuments(state: RegisterState, shouldRequireDocuments: boolean): RegisterState {
    return {
        ...state,
        shouldRequireDocuments
    }
}