import axios, { AxiosRequestConfig } from 'axios'
import React, { useState } from 'react'

interface Options<T> {
    url: string,
    initialValue: T,

}

export type UseFetchResponse<T> = [
    T,
    boolean,
    boolean,
    FetchRequest,
    boolean
]

type FetchRequest = (config?: AxiosRequestConfig) => void

export default function useFetch<T>(options: Options<T>): UseFetchResponse<T> {
    const { url, initialValue } = options
    const [response, setResponse] = useState<T>(initialValue)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [finished, setFinished] = useState(false)

    const fetchRequest: FetchRequest = (config) => {
        setError(false)
        setLoading(true)
        setFinished(false)

        axios.get<T>(url, config)
            .then(response => {
                setResponse(response.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
            .finally(() => {
                setFinished(true)
            })
    }

    return [
        response as T,
        loading,
        error,
        fetchRequest,
        finished
    ]
}