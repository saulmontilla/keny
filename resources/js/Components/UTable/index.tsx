import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Card, Placeholder } from 'react-bootstrap';
import Datatable, { PaginationOptions, PaginationServerOptions, TableStyles } from 'react-data-table-component';
import { UtableProps } from 'ubiionline/datatable';
import TryAgain from '../TryAgain';
import { UTableContext } from '@/Context/UTable/UTableContext';
import useQuery from '@/Hooks/useQuery';
import { setCurrentUrlParam } from '@/helpers';

/**
 * React Datatable con estilos personalizados (Ubii Table)
 */
export default function UTable(props: UtableProps) {
    const {
        loadingTable,
        data,
        fetchData,
        totalRows,
        perPage,
        defaultPage,
        setDefaultPage,
        url,
        errorFetchingData,
        currentPage
    } = useContext(UTableContext);

    const query = useQuery()
    const cardRef = React.createRef<HTMLDivElement>()
    const [skeletonWidth, setSkeletonWidth] = useState(0)
    const {
        paginationRowsPerPageOptions = [10, 20, 50, 100],
        className,
        ...rest
    } = props
    const defaultPerPage = perPage || paginationRowsPerPageOptions[0]

    const paginationComponentOptions: PaginationOptions = {
        rowsPerPageText: "Filas por pagina",
        rangeSeparatorText: "de",
        selectAllRowsItemText: "Todos",
    }

    const paginationServerOptions: PaginationServerOptions = {
        persistSelectedOnPageChange: true,
        persistSelectedOnSort: true
    }

    const customStyles: TableStyles = {
        table: {
            style: {
                backgroundColor: 'transparent',
            }
        },
        rows: {
            style: {
                backgroundColor: 'transparent',
            }
        },
        headRow: {
            style: {
                background: 'var(--ubii-blue-secondary)'
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                color: "#525252",
                justifyContent: 'center',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
        pagination: {
            style: {
                backgroundColor: 'var(--ubii-blue-secondary)',
            }
        }
    };

    const loadingSkeleton = (
        <Placeholder animation='wave' className="w-100">
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
            <Placeholder xs={12} />
        </Placeholder>
    )

    const handlePageChange = (page: number) => {
        fetchData(page, defaultPerPage);
        setCurrentUrlParam('page', page.toString())
    };

    const handlePerRowsChange = (newPerPage: number, page: number) => {
        fetchData(page, newPerPage)
        setCurrentUrlParam('per_page', newPerPage.toString())
    };

    useEffect(() => {
        const pageParam = Number(query?.page)
        const currentPage = pageParam || 1

        setDefaultPage(currentPage)

        if (defaultPage === currentPage) {
            fetchData(currentPage, defaultPerPage)
        }
    }, [url])

    if (errorFetchingData) {
        return (
            <TryAgain
                text='Error al consultar los datos'
                onRetry={() => fetchData(currentPage)}
            />
        )
    }

    return (
        <Row className={className ? className : ''}>
            <Col>
                <Datatable
                    noHeader={true}
                    customStyles={customStyles}
                    fixedHeader
                    fixedHeaderScrollHeight="400px"
                    progressComponent={loadingSkeleton}
                    noDataComponent="No hay movimientos para mostrarte"
                    // conditionalRowStyles={conditionalRowStyles}
                    //selectableRows
                    progressPending={loadingTable}
                    paginationComponentOptions={paginationComponentOptions}
                    paginationServerOptions={paginationServerOptions}
                    paginationDefaultPage={defaultPage}
                    data={data}
                    pagination
                    paginationServer
                    paginationPerPage={defaultPerPage}
                    paginationRowsPerPageOptions={paginationRowsPerPageOptions}
                    paginationTotalRows={totalRows}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    {...rest}
                />
            </Col>
        </Row>
    )
}