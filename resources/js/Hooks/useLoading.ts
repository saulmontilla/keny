import { useState } from 'react'

export default function useLoading() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    return {
        loading,
        setLoading,
        error,
        setError
    }
}