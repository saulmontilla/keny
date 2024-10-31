import { getIn, useFormikContext } from 'formik'
import React from 'react'
import { ErrorMessageControlProps } from 'ubiionline/form'
import BaseErrorMessage from './Base/BaseErrorMessage'

export default function ErrorMessageControl(props: ErrorMessageControlProps) {
    const formik = useFormikContext<any>()
    const clientError = getIn(formik.errors, props.name)
    const serverError = props.serverName && getIn(formik.status.errors, props.serverName)
    const touched = getIn(formik.touched, props.name)
    const shouldRenderError = touched && (clientError || serverError)
    const errorMessage = clientError || serverError

    return shouldRenderError
        ? (
            <BaseErrorMessage error={errorMessage} />
        ) : null
}
