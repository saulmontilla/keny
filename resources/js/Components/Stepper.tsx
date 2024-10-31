import React, { useEffect, useState } from 'react';
import styles from './Stepper.module.css'
import { GetContainerStyle, StepperProps } from 'ubiionline/stepper';
import { useStepperDispatch } from '@/Context/Stepper/StepperContext';

export default function Stepper(props: StepperProps) {
    const { currentStep, steps, noTransition } = props
    const [allowOverflow, setAllowOverflow] = useState(false)
    const dispatch = useStepperDispatch()

    const getContainerStyle: GetContainerStyle = (currentStep, containerPosition) => {
        let _styles: React.CSSProperties = {}

        if (containerPosition === currentStep) {
            _styles = {
                transform: 'none',
                visibility: 'visible',
                height: 'auto'
            }
        } else if (containerPosition > currentStep) {
            _styles = {
                transform: 'translate3d(100%, 0, 0)',
                visibility: 'hidden',
                height: 0
            }
        } else {
            _styles = {
                transform: 'translate3d(-100%, 0, 0)',
                visibility: 'hidden',
                height: 0
            }
        }

        if (noTransition) {
            _styles.transition = 'none'
        }

        return _styles
    }

    useEffect(() => {
        setAllowOverflow(false)
        const timeout = setTimeout(() => {
            setAllowOverflow(true)
        }, 300)

        return () => {
            clearTimeout(timeout)
        }
    }, [currentStep])

    useEffect(() => {
        dispatch({
            type: 'setTotalSteps',
            total: steps.length
        })
    }, [])

    return (
        <div className={`${styles.stepsContainer} ${allowOverflow ? styles.overflow : ''}`}>
            {steps.map((step, index) => (
                <div
                    className={styles.step}
                    style={getContainerStyle(currentStep, index + 1)}
                    key={index}
                >
                    {index + 1 === currentStep ? step : null}
                </div>
            ))}
        </div>
    )
}
