declare module "ubiionline/datatable" {
    import { FormikContextType } from "formik";
    import { AxiosError } from "axios";
    import React, { Dispatch } from "react";
    import { ButtonProps } from "react-bootstrap";
    import { TableColumn, TableProps } from "react-data-table-component";
    import { DatePickerProps } from "react-datepicker";
    import { DateTime } from "luxon";

    /**
     * Props del datatable omitiendo data
     */
    export interface UtableProps extends Omit<TableProps<any>, 'data'> {
        data?: TableProps<any>['data'];
    }

    /**
     * Props adicionales al datatable
     */
    export interface AditionalTableProps extends Omit<TableProps<any>, 'data' | 'columns'> {
        data?: TableProps<any>['data'];
        columns?: TableProps<any>['columns'];
    }

    export interface UTableContainerProps extends UTableTitleProps, FiltersContainerProps {
        /**
         * Nombre de clase para el card que abarca el datatable
         */
        style?: string;
        /**
         * Columnas del datatable
         */
        columns: TableColumn<any>[];
        /**
         * Muestra los filtros de fecha
         */
        showFilter?: boolean;
        /**
         * Contenido adicional que se muestra debajo de los filtros
         */
        extraActions?: React.ReactElement | React.ReactNode
        /**
         * Props adicionales para el datatable
         */
        tableProps?: AditionalTableProps;
    }

    export interface UTableTitleProps {
        /**
         * Ruta del icono al lado del título. Ruta a partir de /img/svg/
         */
        img?: string;
        /**
         * Título del datatable
         */
        title?: string;
    }

    export interface UTableContextProviderProps {
        /**
         * Endpoint a consultar la data del datatable.
         */
        url: string;
        /**
         * Tipos de exports del datatable
         */
        exports?: ExportConfig;
        children: React.ReactNode,
        /**
         * Key del response en donde viene la data del datatable
         */
        dataKey?: string,
        onError?: (error: AxiosError<any>) => void
    }

    export interface ExportConfig {
        /**
         * Texto del boton
         */
        text: string,
        /**
         * Endpoint para la exportacion
         */
        endpoint: string,
        /**
         * Nombre por defecto del archivo exportado si no
         * se obtiene del backend
         */
        defaultFileName?: string
    }

    export interface ExportButtonProps extends ExportConfig, ButtonProps {
    }

    interface RadioFilterConfig {
        label: string,
        /**
         * Fecha de inicio en formato timestamp
         */
        startDate: DateTime,
        /**
         * Fecha final en formato timestamp
         */
        endDate: DateTime,
    }

    export type DatatableFiltersOnChange = (date: Date, formik: FormikContextType<{
        startDate: Date | string,
        endDate: Date | string
    }>) => void;

    export type DatatableFiltersOnMount = (setDate: (date: Date) => void, existsInQueryString: boolean) => void;

    export interface FiltersContainerProps {
        startDateProps?: Omit<DatePickerProps, 'onChange'> & {
            onChange: DatatableFiltersOnChange,
            onMount?: DatatableFiltersOnMount
        }
        endDateProps?: Omit<DatePickerProps, 'onChange'> & {
            onChange: DatatableFiltersOnChange,
            onMount?: DatatableFiltersOnMount
        };
        /**
         * Filtros adicionales del datatable. Su comportamiento debe ser establecido
         * de forma manual
         */
        extraFilters?: React.ReactElement | React.ReactNode
        radioFilters?: RadioFilterConfig[]
    }

    export interface UTableContextValue {
        /**
         * Data del datatable
         */
        data: any[];
        setData: Dispatch<any[]>;
        /**
         * Filas totales de la consulta
         */
        totalRows: number;
        setTotalRows: Dispatch<number>;
        /**
         * Se esta consultando la data
         */
        loadingTable: boolean;
        /**
         * Número de registros por página a mostrar en la tabla
         */
        perPage: number;
        setPerPage: Dispatch<number>;
        /**
         * Refresca la data del datatable en la pagina indicada
         */
        fetchData: (page: number, newPerPage?: number) => void;
        /**
         * Pagina actual del datatable
         */
        currentPage: number;
        /**
         * Página por defecto a cargar
         */
        defaultPage: number;
        setDefaultPage: Dispatch<number>;
        exports: UTableContextProviderProps['exports'],
        handleExport: (endpoint: string, defaultFileName?: string) => Promise<void>,
        /**
         * Establece el valor para un parametro del filtro 
         * y lo actualiza en la url actual
         */
        setFilterParam: (param: string, value: string) => void,
        /**
         * Objeto URL de los parametros de filtro
         */
        paramsUrl: URL,
        /**
         * Endpoint a consultar la data del datatable
         */
        url: string,
        errorFetchingData: boolean
    }
}