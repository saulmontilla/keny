import React, { Dispatch, useEffect, useState } from 'react'

export type TimerTime = Record<keyof TimerInitialTime, number>;

export type TimerInitialTime = {
    hours?: number,
    minutes?: number,
    seconds?: number
};

export interface BaseTimerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Tiempo inicial del temporizador
     */
    initialTime: TimerInitialTime;
    /**
     * Componente que aparece cuando el contador llega a 0
     */
    TimeOverComponent?: React.FC<TimeOverComponentProps>;
    /**
     * Siempre muestra el componente de "Tiempo finalizado"
     */
    alwaysShowTimeOverComponent?: boolean;
    /**
     * Envia al componente TimeOver una prop onReset
     */
    onResetTimer?: (setTime?: Dispatch<TimerTime>) => void;
    /**
     * Callback al agotarse el tiempo
     */
    onTimeOver?: () => void;
}

export interface TimeOverComponentProps {
    onResetTimer: (setTime?: Dispatch<TimerTime>) => void;
    timeIsOver: boolean;
}

export default function BaseTimer(props: BaseTimerProps) {
    const {
        initialTime: { hours = 0, minutes = 0, seconds = 0 },
        TimeOverComponent,
        onResetTimer,
        onTimeOver,
        alwaysShowTimeOverComponent,
        ...rest
    } = props

    const display = {
        hours: props.initialTime.hasOwnProperty('hours'),
        minutes: props.initialTime.hasOwnProperty('minutes') || props.initialTime.hasOwnProperty('hours'),
        seconds: true
    }

    const [time, setTime] = useState({ hours, minutes, seconds })
    const [timeIsOver, setTimeIsOver] = useState(false)

    /**
     * Resta 1 segundo al tiempo actual del temporizador
     */
    const sustractSeconds = (time: TimerTime) => {
        let hours = time.hours
        let minutes = time.minutes
        let seconds = time.seconds

        seconds = seconds - 1

        if (seconds < 0) {
            seconds = 0
            if (minutes > 0 || hours > 0) seconds = 59

            minutes = minutes - 1

            if (minutes < 0) {
                minutes = 0
                if (hours > 0) minutes = 59

                hours = hours - 1

                if (hours < 0) {
                    hours = 0
                }
            }
        }

        return { hours, minutes, seconds }
    }

    /**
     * El temporizador llego a 0
     */
    const getIsTimeOver = (time: TimerTime) => {
        return time.hours === 0 && time.minutes === 0 && time.seconds === 0
    }

    /**
     * Formatea la unidad de tiempo a 2 digitos
     */
    const formatTimeUnit = (timeUnit: number) => {
        return timeUnit < 10
            ? '0' + timeUnit
            : timeUnit
    }

    /**
     * Reinicia el temporizador a su tiempo inicial
     */
    const resetTimer = async () => {
        setTime({ hours, minutes, seconds })
        setTimeIsOver(false)
        if (onResetTimer) onResetTimer(setTime)
    }

    useEffect(() => {
        let timerInterval = setInterval(() => {
            const newTime = sustractSeconds(time)
            setTime(newTime)
        }, 1000)

        if (getIsTimeOver(time)) {
            setTimeIsOver(true)
            clearInterval(timerInterval)
        }

        return (() => clearInterval(timerInterval))
    })

    useEffect(() => {
        if (timeIsOver) {
            if (onTimeOver) onTimeOver()
        }
    }, [timeIsOver])

    return (
        <>
            <span {...rest}>
                {display.hours && formatTimeUnit(time.hours) + ':'}
                {display.minutes && formatTimeUnit(time.minutes) + ':'}
                {display.seconds && formatTimeUnit(time.seconds)}
            </span>

            {(timeIsOver || alwaysShowTimeOverComponent) && TimeOverComponent && (
                <TimeOverComponent onResetTimer={resetTimer} timeIsOver={timeIsOver} />
            )}
        </>
    )
}
