import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function CenteredSpinner() {
    return (
        <div style={{
            width:'100%',
            height:'100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Spinner animation="border" variant="u-blue" />
        </div>
    )
}
