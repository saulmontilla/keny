import React, { PropsWithChildren, useContext, useReducer } from "react";
import { StepperDispatch, StepperState } from "ubiionline/stepper/context";
import stepperReducer from "./stepperReducer";

export const StepperContext = React.createContext({} as StepperState)
export const StepperDispatchContext = React.createContext<StepperDispatch | null>(null)

const initialState: StepperState = {
    currentStep: 1,
    totalSteps: 1
}

export default function StepperProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(stepperReducer, initialState)

    return (
        <StepperContext.Provider value={state}>
            <StepperDispatchContext.Provider value={dispatch}>
                {children}
            </StepperDispatchContext.Provider>
        </StepperContext.Provider>
    )
}

export function useStepper() {
    return useContext(StepperContext)
}

export function useStepperDispatch() {
    return useContext(StepperDispatchContext) as StepperDispatch
}