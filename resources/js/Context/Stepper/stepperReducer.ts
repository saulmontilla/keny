import { StepperAction, StepperState } from "ubiionline/stepper/context"

export default function stepperReducer(state: StepperState, action: StepperAction) {
    switch (action.type) {
        case 'go': return goToStep(state, action.step)
        case 'next': return nextStep(state)
        case 'back': return previousStep(state)
        case 'setTotalSteps': return setTotalSteps(state, action.total)
    }
}

function goToStep(state: StepperState, step: number): StepperState {
    return {
        ...state,
        currentStep: step
    }
}

function nextStep(state: StepperState): StepperState {
    return {
        ...state,
        currentStep: state.currentStep + 1
    }
}

function previousStep(state: StepperState): StepperState {
    return {
        ...state,
        currentStep: state.currentStep - 1
    }
}

function setTotalSteps(state: StepperState, total: number): StepperState {
    return {
        ...state,
        totalSteps: total
    }
}