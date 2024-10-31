import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { UTableContainerProps, UtableProps } from "ubiionline/datatable";
import UTable from ".";
import Title from "./Title";
import FiltersContainer from "./FiltersContainer";
import styles from "./FiltersContainer/index.module.css"

/**
 * Contenedor del datatable personalizado UTable.
 */
export default function UTableContainer(props: UTableContainerProps) {
    const {
        showFilter = true,
        extraFilters = null,
        extraActions,
        startDateProps,
        endDateProps,
        radioFilters,
        ...rest
    } = props

    const datatableProps: UtableProps = {
        columns: props.columns,
        ...rest.tableProps
    }

    return (
        <div>
            {props.title && (
                <Title img={props.img} title={props.title} />
            )}

            {showFilter &&
                <FiltersContainer
                    extraFilters={extraFilters}
                    startDateProps={startDateProps}
                    endDateProps={endDateProps}
                    radioFilters={radioFilters}
                />
            }

            {extraActions && extraActions}

            <UTable
                className="mt-3 mt-lg-4"
                {...datatableProps}
            />
        </div>
    );
}