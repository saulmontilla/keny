import { Row, Col, Form as BForm, Button } from 'react-bootstrap';
import { Formik, FormikHelpers } from 'formik';
import React, { useContext } from 'react';
import { DateTime, Duration } from 'luxon'
import styles from './index.module.css'
import { FiltersContainerProps } from 'ubiionline/datatable';
import { DatatableFiltersSchema, datatableFiltersSchema } from './schema'
import StartDate from './StartDate';
import EndDate from './EndDate';
import ExportButton from './ExportButton';
import { UTableContext } from '@/Context/UTable/UTableContext';

/**
 * Contenedor de los filtros del datatable
 */
export default function FiltersContainer(props: FiltersContainerProps) {
    const { fetchData, setFilterParam, exports } = useContext(UTableContext);
    const today = DateTime.now()
    const startOfCurrentMonth = today.startOf('month')
    const endOfCurrentMonth = today.endOf('month')
    const threeMonths = Duration.fromObject({ months: 3 })
    const sixMonths = Duration.fromObject({ months: 6 })

    const { radioFilters = [
        { label: 'Este mes', startDate: startOfCurrentMonth, endDate: endOfCurrentMonth },
        { label: 'Últimos tres meses', startDate: today.minus(threeMonths), endDate: today },
        { label: 'Últimos seis meses', startDate: today.minus(sixMonths), endDate: today }
    ] } = props

    const handledRadioFilter = (startDate: DateTime, endDate: DateTime, actions: FormikHelpers<DatatableFiltersSchema['initialValues']>) => {
        setFilterParam('start_date', startDate.toSQLDate() || '')
        setFilterParam('end_date', endDate.toSQLDate() || '')

        actions.setValues({
            startDate: startDate.toJSDate(),
            endDate: endDate.toJSDate()
        }, true)

        fetchData(1);
    }

    const handleSubmit = (values: DatatableFiltersSchema['initialValues']) => {
        if (typeof values.startDate !== 'string') {
            const start_date = DateTime.fromJSDate(values.startDate)
            setFilterParam('start_date', start_date.toSQLDate() || '')
        }

        if (typeof values.endDate !== 'string') {
            const end_date = DateTime.fromJSDate(values.endDate)
            setFilterParam('end_date', end_date.toSQLDate() || '')
        }

        fetchData(1);
    }

    return (
        <>
            <Formik
                initialValues={datatableFiltersSchema.initialValues}
                validationSchema={datatableFiltersSchema.schema}
                onSubmit={(values) => {
                    handleSubmit(values);
                    // Reiniciar los radios
                    const radios = document.getElementsByClassName('radio-filter')

                    for (let i = 0; i < radios.length; i++) {
                        const input: HTMLInputElement = radios[i].firstChild as HTMLInputElement
                        input.checked = false
                    }
                }}
            >
                {formik => (
                    <>
                        <BForm onSubmit={formik.handleSubmit} className={styles.form}>
                            <Row>
                                <StartDate startDateProps={props.startDateProps} />
                                <EndDate endDateProps={props.endDateProps} />

                                {props.extraFilters}

                                <Col className={styles.buttonContainer}>
                                    <div className="d-none d-lg-block">
                                        <Button variant="u-blue"
                                            type="submit"
                                            className="px-4"
                                            disabled={formik.dirty ? !formik.isValid : true}
                                        >
                                            Procesar
                                        </Button>

                                        {exports && (
                                            <ExportButton
                                                disabled={formik.dirty ? !formik.isValid : true}
                                                {...exports}
                                            />
                                        )}
                                    </div>
                                </Col>
                            </Row>


                            {radioFilters.length > 0 && (
                                <div className={styles.radioWrapper}>
                                    <Row className="mt-0 mb-3 mt-md-4 mb-md-6">
                                        {radioFilters.map((radio, index) => (
                                            <Col key={index} xs="auto">
                                                <BForm.Check
                                                    type="radio"
                                                    name="filter-radio"
                                                    value="1"
                                                    id={`radio-filter-${index}`}
                                                    aria-label={radio.label}
                                                    className="radio-filter"
                                                    label={radio.label}
                                                    onChange={() => handledRadioFilter(radio.startDate, radio.endDate, formik)}
                                                />
                                            </Col>

                                        ))}
                                    </Row>
                                </div>
                            )}

                            {/**------- Mobile ------ */}
                            <Row className="d-flex d-lg-none justify-content-center mt-3">
                                <Col xs="6" sm="4">
                                    <div className="d-grid">

                                        <Button
                                            variant="u-blue"
                                            type="submit"
                                            className="btn-filter mt-0"
                                            disabled={formik.dirty ? !formik.isValid : true}
                                        >
                                            Procesar
                                        </Button>
                                    </div>
                                </Col>

                                {exports && (
                                    <Col xs="6" sm="4">
                                        <ExportButton
                                            disabled={formik.dirty ? !formik.isValid : true}
                                            {...exports}
                                        />
                                    </Col>
                                )}
                            </Row>
                            {/**------- Mobile ------ */}
                        </BForm>
                    </>
                )}

            </Formik>
        </>
    )
}