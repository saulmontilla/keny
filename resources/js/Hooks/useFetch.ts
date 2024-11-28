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
    FetchRequest<T>,
    boolean
]

type FetchRequest<T> = (config?: AxiosRequestConfig) => Promise<T>

export default function useFetch<T>(options: Options<T>): UseFetchResponse<T> {
    const { url, initialValue } = options
    const [response, setResponse] = useState<T>(initialValue)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [finished, setFinished] = useState(false)

    const fetchRequest = (config?: AxiosRequestConfig): Promise<T> => {
        setError(false);
        setLoading(true);
        setFinished(false);

        return new Promise((resolve, reject) => {
            axios.get<T>(url, config)
                .then(response => {
                    setResponse(response.data);
                    setLoading(false);
                    resolve(response.data);
                })
                .catch(error => {
                    setLoading(false);
                    setError(true);
                    reject(error);
                })
                .finally(() => {
                    setFinished(true);
                });
        });
    };

    return [
        response as T,
        loading,
        error,
        fetchRequest,
        finished
    ]
}