import React, { useState } from "react";
import { UTableContextProviderProps, UTableContextValue } from "ubiionline/datatable";
import axios from "axios";
import { setCurrentUrlParam } from "@/helpers";
import useQuery from "@/hooks/useQuery";
import { getIn } from "formik";

export const UTableContext = React.createContext({} as UTableContextValue)

/**
 * Contenedor y context provider para el datatable UTable
 */
export default function UTableContextProvider(props: UTableContextProviderProps) {
    const [data, setData] = useState<any[]>([]);
    const [totalRows, setTotalRows] = useState(0);
    const [loadingTable, setLoadingTable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [defaultPage, setDefaultPage] = useState(1);
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState<string | string[]>('')
    const [exportErrorCode, setExportErrorCode] = useState<number>()
    const [errorFetchingData, setErrorFetchingData] = useState(false)

    const query = useQuery()

    const perPageParam = Number(query?.per_page || 0)

    const [perPage, setPerPage] = useState(perPageParam);

    const url = new URL('http://127.0.0.1')
    const [paramsUrl, setParamsUrl] = useState(url)

    const setFilterParam: UTableContextValue['setFilterParam'] = (param, value) => {
        setCurrentUrlParam(param, value, paramsUrl)
    }

    /**
     * Obtiene la data del datable con el endpoint especificado
     */
    const fetchData: UTableContextValue['fetchData'] = async (page: number = 1, newPerPage?: number) => {
        paramsUrl.searchParams.set('page', page.toString())
        paramsUrl.searchParams.set('per_page', newPerPage?.toString() || perPage.toString())

        const fetchUrl = props.url + paramsUrl.search

        setLoadingTable(true)
        setErrorFetchingData(false)

        await axios.get(fetchUrl)
            .then(response => {
                const dataKey = props.dataKey || 'data'
                setData(getIn(response.data, dataKey))
                setTotalRows(response.data.meta.total)
            })
            .catch((e) => {
                setErrorFetchingData(true)
                props.onError && props.onError(e)
            })

        setLoadingTable(false)

        setCurrentPage(page)

        if (newPerPage) setPerPage(newPerPage)
    }

    const handleExport: UTableContextValue['handleExport'] = async (endpoint, defaultFileName = 'Archivo.xlsx') => {
        // const url = endpoint + paramsUrl.search

        // const [response, error] = await handleAxiosRequest(() => (
        //     clientAxios.get(url, {
        //         responseType: 'blob'
        //     })
        // ))

        // if (error) {
        //     setAlertMessage(error.list)
        //     setShowAlert(true)
        //     setExportErrorCode(error.code)
        // } else if (response) {
        //     const fileName = getFileNameFromResponse(response) || defaultFileName

        //     const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        //     const anchor = document.createElement('a');
        //     anchor.href = downloadUrl;
        //     anchor.setAttribute('download', fileName);
        //     document.body.appendChild(anchor);
        //     anchor.click();
        //     document.body.removeChild(anchor)
        //     window.URL.revokeObjectURL(downloadUrl)
        // }
    }

    return (
        <UTableContext.Provider
            value={{
                data,
                setData,
                fetchData,
                totalRows,
                loadingTable,
                perPage,
                setPerPage,
                setTotalRows,
                currentPage,
                defaultPage,
                setDefaultPage,
                exports: props.exports,
                handleExport,
                setFilterParam,
                paramsUrl,
                url: props.url,
                errorFetchingData
            }}
        >
            {props.children}
            {/* <BasicAlert 
                show={showAlert}
                setShow={setShowAlert}
                message={alertMessage}
                alertProps={{
                    danger: exportErrorCode !== 400,
                    info: exportErrorCode === 400
                }}
            /> */}
        </UTableContext.Provider>
    )
}