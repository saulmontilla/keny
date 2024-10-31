import { useFormikContext } from 'formik'
import React, { useContext, useEffect } from 'react'
import { Col, Form } from 'react-bootstrap'
import styles from './index.module.css'
import { DatatableFiltersSchema } from './schema'
import { UTableContainerProps } from 'ubiionline/datatable'
import { UTableContext } from '@/Context/UTable/UTableContext'
import useQuery from '@/Hooks/useQuery'
import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { DateTime } from 'luxon'

export default function EndDate(props: Pick<UTableContainerProps, 'endDateProps'>) {
    const formik = useFormikContext<DatatableFiltersSchema['initialValues']>()
    const { setFilterParam } = useContext(UTableContext);
    const query = useQuery()
    const { onChange, onMount, ...rest } = props.endDateProps || {}

    function setEndDate(date: Date) {
        formik.setFieldValue('endDate', date)
        setFilterParam('end_date', DateTime.fromJSDate(date).toSQLDate() || '')
    }

    useEffect(() => {
        const endDate = query?.end_date

        if (endDate) {
            formik.setFieldValue('endDate', new Date(endDate + ' 00:00:00'), true)
            setFilterParam('end_date', endDate.toString())
        }

        onMount && onMount(setEndDate, !!endDate)
    }, [])

    function handleChange(date: Date) {
        onChange && onChange(date, formik)
    }

    return (
        <>
            <Col xs="6" lg="auto">
                <FormikControl
                    control="date-picker"
                    name="endDate"
                    id="end-date"
                    placeholderText="dd/mm/yyyy"
                    popperClassName="custom-datepicker-popper"
                    minDate={typeof formik.values.startDate !== 'string'
                        ? formik.values.startDate
                        : props.endDateProps?.minDate
                    }
                    label="Hasta"
                    material
                    maxDate={new Date()}
                    onChange={handleChange}
                    {...rest}
                />
            </Col>
        </>
    )
}
