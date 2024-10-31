import { FieldProps, getIn } from 'formik'
import React, { useEffect, useState } from 'react'
import { FileControlProps } from 'ubiionline/form'
import LabelControl from './LabelControl'
import css from './FileControl.module.css'
import ErrorMessageControl from './ErrorMessageControl'
import UbiiIcon from '../../UbiiIcon'
import { UbiiIcon as UbiiIconType } from 'ubiionline/icon'

export default function FileControl(props: FileControlProps & FieldProps) {
    const {
        field: { onChange, value, ...field },
        form,
        meta,
        serverName,
        label,
        id,
        className = 'u-pos-file-input',
        labelClassName,
        style,
        text,
        icon,
        iconProps,
        rightIcon,
        rightIconProps,
        notClickable,
        beforeChange,
        ...rest
    } = props

    const clientError = getIn(form.errors, field.name)
    const serverError = serverName && getIn(form.status.errors, serverName)
    const touched = getIn(form.touched, field.name)
    const defaultText = 'Seleccionar archivo'
    const [displayedText, setDisplayedText] = useState(defaultText)
    const inputRef = React.createRef<HTMLInputElement>()

    const IconContainer = (iconProps: Pick<FileControlProps, 'iconProps'> & { icon: UbiiIconType }) => (
        <span className="mr-2">
            <UbiiIcon {...iconProps} />
        </span>
    )

    useEffect(() => {
        if (!value) {
            setDisplayedText(text || defaultText)
        } else {
            setDisplayedText(value.name)
        }
    }, [value])

    /**
     * Restablece el valor del input para prevenir el error 
     * net::ERR_UPLOAD_FILE_CHANGED
     * @see https://stackoverflow.com/questions/61916331/re-uploading-a-file-with-ajax-after-it-was-changed-causes-neterr-upload-file-c
     */
    const handleClick: React.MouseEventHandler<HTMLInputElement> = e => {
        form.setFieldValue(field.name, '', false)

        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    /**
     * Ejecuta el evento click cuando se hace focus al label con el teclado
     * y se presiona espacio o enter
     */
    const handleKeyPress: React.KeyboardEventHandler<HTMLLabelElement> = e => {
        e.preventDefault()
        inputRef.current?.click()
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        const files = e.currentTarget.files

        if (files && files.length > 0) {
            beforeChange && beforeChange(e)
            form.setFieldValue(field.name, files[0], true)
        }
        form.setFieldTouched(field.name, true, false)
    }

    return (
        <>
            {label && <LabelControl name={field.name} id={id} text={label} className={labelClassName} />}

            <label
                className={`
                    ${css.inputContainer}
                    ${notClickable ? css.notClickable : ''}
                    ${className ? className : ''}
                    ${(touched && (clientError || serverError)) ? 'is-invalid' : ''}
                `}
                style={style}
                tabIndex={0}
                onKeyPress={handleKeyPress}
            >
                {icon && <IconContainer icon={icon} {...iconProps} />}

                <span className={css.text} title={displayedText}>
                    {displayedText}
                </span>

                {rightIcon && <IconContainer icon={rightIcon} {...rightIconProps} />}

                {!notClickable && (
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        onClick={handleClick}
                        onChange={handleChange}
                        ref={inputRef}
                        id={id || field.name}
                        {...field}
                        {...rest}
                    />
                )}
            </label>

            <ErrorMessageControl name={field.name} serverName={serverName} />
        </>
    )
}
