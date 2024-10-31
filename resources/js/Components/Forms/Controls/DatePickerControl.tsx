import { FieldProps, getIn } from 'formik'
import React from 'react'
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker'
import { DatePickerControlProps } from 'ubiionline/form'
import LabelControl from './LabelControl'
import es from 'date-fns/locale/es';
import ErrorMessageControl from './ErrorMessageControl'
import UbiiIcon from '@/Components/UbiiIcon'

const esMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
if (es.localize) es.localize.month = n => esMonths[n]
registerLocale('es', es)

export default function DatePickerControl(props: DatePickerControlProps & FieldProps) {
    const {
        field,
        form,
        meta,
        serverName,
        label,
        id,
        name,
        className,
        labelClassName,
        onChange,
        material,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)

    const handleChange: ReactDatePickerProps['onChange'] = (date, e) => {
        form.setFieldValue(field.name, date, true)
        if (onChange) onChange(date, e)
    }

    const handleBlur: ReactDatePickerProps['onBlur'] = e => {
        field.onBlur(e)
    }

    return (
        <div className={`date-picker-container ${material ? 'material' : ''}`}>
            {(label && !material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

            <ReactDatePicker
                className={`
                    form-control 
                    ${className ? className : ''}
                    ${(touched && (clientError || serverError)) ? 'is-invalid' : ''}
                    ${material ? 'material' : ''}
                `}
                dateFormat="dd/MM/yyyy"
                id={id || field.name}
                name={field.name}
                locale="es"
                autoComplete="off"
                selected={field.value}
                showMonthDropdown={true}
                showYearDropdown={true}
                scrollableYearDropdown={true}
                timeFormat="hh:mm a"
                timeCaption="Hora"
                onChange={handleChange}
                onBlur={handleBlur}
                {...rest}
            />


            {(label && material) && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

            {material && (
                <label htmlFor={field.name}>
                    <UbiiIcon
                        icon='calendar'
                        className='material-calendar'
                    />
                </label>
            )}

            <ErrorMessageControl name={field.name} serverName={serverName} />
        </div>
    )
}
