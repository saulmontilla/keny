declare module "ubiionline/stepper" {
    import React from "react";

    interface StepperProps {
        currentStep: number;
        steps: Array<React.ReactElement | React.ReactNode>;
        noTransition?: boolean;
    }

    type GetContainerStyle = (currentStep: number, containerPosition: number) => React.CSSProperties
}

declare module "ubiionline/stepper/context" {
    import React from "react";

    interface StepperState {
        currentStep: number,
        totalSteps: number
    }

    interface GoStepAction {
        type: 'go',
        step: number
    }

    interface NextStepAction {
        type: 'next'
    }

    interface PreviousStepAction {
        type: 'back'
    }

    interface SetTotalStepsAction {
        type: 'setTotalSteps',
        total: number
    }

    type StepperAction = GoStepAction | NextStepAction | PreviousStepAction | SetTotalStepsAction

    type StepperDispatch = React.Dispatch<StepperAction>
}