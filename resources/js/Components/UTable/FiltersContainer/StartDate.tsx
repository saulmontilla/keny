import { useFormikContext } from 'formik'
import React, { useContext, useEffect } from 'react'
import { Col, Form } from 'react-bootstrap'
import { UTableContainerProps } from 'ubiionline/datatable'
import css from './index.module.css'
import { DatatableFiltersSchema } from './schema'
import { UTableContext } from '@/Context/UTable/UTableContext'
import useQuery from '@/Hooks/useQuery'
import FormikControl from '@/Components/Forms/Controls/FormikControl'
import { DateTime } from 'luxon'

export default function StartDate(props: Pick<UTableContainerProps, 'startDateProps'>) {
    const formik = useFormikContext<DatatableFiltersSchema['initialValues']>()
    const { setFilterParam } = useContext(UTableContext);
    const query = useQuery()
    const { onChange, onMount, ...rest } = props.startDateProps || {}

    function setStartDate(date: Date) {
        formik.setFieldValue('startDate', date)
        setFilterParam('start_date', DateTime.fromJSDate(date).toSQLDate() || '')
    }

    useEffect(() => {
        const startDate = query?.start_date

        if (startDate) {
            formik.setFieldValue('startDate', new Date(startDate + ' 00:00:00'), true)
            setFilterParam('start_date', startDate.toString())
        }

        onMount && onMount(setStartDate, !!startDate)
    }, [])

    function handleChange(date: Date) {
        onChange && onChange(date, formik)
    }

    return (
        <>
            <Col xs="6" lg="auto">
                <FormikControl
                    control="date-picker"
                    name="startDate"
                    id="start-date"
                    placeholderText="dd/mm/yyyy"
                    className="my-custom-input custom-datepicker datepicker-filter"
                    popperClassName="custom-datepicker-popper"
                    maxDate={typeof formik.values.endDate !== 'string'
                        ? formik.values.endDate
                        : new Date()
                    }
                    material
                    label="Desde"
                    onChange={handleChange}
                    {...rest}
                />
            </Col>
        </>
    )
}
