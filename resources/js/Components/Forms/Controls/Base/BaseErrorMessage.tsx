import React from 'react'
import { BaseErrorControlProps } from 'ubiionline/form'

export default function BaseErrorMessage(props: BaseErrorControlProps) {
    const { error } = props

    if (!error) return null
    
    return (
        <span className="invalid-feedback ubii-invalid">
            {error}
        </span>
    )
}
