
declare module "ubiionline/form" {
    import React from "react";
    import { DatePickerProps } from "react-datepicker";
    import { UbiiIcon, UbiiIconProps } from "ubiionline/icon";
    import type { CountryCodes, CustomLabels, OnSelect } from "react-flags-select/build/types";
    import { PhoneInputProps } from "react-phone-input-2";
    import { Props as ReactSelectProps } from "react-select";
    import { IMaskInputProps } from "react-imask";

    type FormikControlTypes = 'text'
        | 'select'
        | 'select2'
        | 'radio'
        | 'checkbox'
        | 'file'
        | 'password'
        | 'date-picker'
        | 'currency'
        | 'mask'
        | 'countries'
        | 'card'
        | 'dni'
        | 'phone'

    interface ErrorMessageControlProps {
        /**
         * Nombre del campo
         */
        name: string;
        /**
         * Nombre del campo en la respuesta del backend
         */
        serverName?: string,
    }

    interface BaseErrorControlProps {
        /**
         * Mensaje de error
         */
        error?: string | null;
    }

    interface LabelControlProps {
        /**
         * Clase css del label
         */
        className?: string;
        /**
         * ID del campo al que hace referencia
         */
        id?: string;
        /**
         * Nombre del campo al que hace referencia.
         * Si no se establece id, sera tomado en 
         * su lugar
         */
        name: string;
        /**
         * Texto del label
         */
        text: string | React.ReactNode;
        labelIcon?: UbiiIcon;
    }

    interface FormikControlCommonsProps {
        label?: string | React.ReactNode;
        labelClassName?: string;
        labelIcon?: UbiiIcon;
        error?: string | null;
        errorClassName?: string;
        /**
         * Nombre del campo dentro del valores de formik
         */
        name: string;
        /**
         * Nombre del error devuelto por el backend
         * al que hace referencia
         */
        serverName?: string;
        id?: string;
        /**
         * Estilo material ui
         */
        material?: boolean
    }

    type TextControlProps = {
        /**
         * Solo caracteres alfabéticos
         */
        alpha?: boolean,
        /**
         * Solo caracteres numéricos 
         */
        numeric?: boolean;
        /**
         * Solo caracteres alfanumericos
         */
        alphaNumeric?: boolean;
        /**
         * Icono del input
         */
        icon?: UbiiIcon;
        iconOnClick?: () => void,
        /**
         * Bloquea la tecla enter
         */
        blockEnter?: boolean;
    } & FormikControlCommonsProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    type SelectControlProps = {
        options: { name: string, value: string | number }[];
        /**
         * Primera opción con valor vacío
         */
        firstOption?: string;
        /**
         * Genera un spinner centrado
         */
        loading?: boolean;
        /**
         * Texto a mostrar mientras carga
         */
        loadingText?: string;
    } & FormikControlCommonsProps & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

    type RadioControlProps = {
        /**
         * Los radios tienen estilo en línea
         */
        inline?: boolean;
        /**
         * Position del label respecto al radio
         */
        labelPosition?: 'up' | 'right' | 'down' | 'left'
    } & FormikControlCommonsProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    type CheckboxControlProps = {
        /**
         * Los checkbox tienen estilo en línea
         */
        inline?: boolean;
        switchMode?: boolean
    } & FormikControlCommonsProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    type FileControlProps = {
        icon?: UbiiIcon,
        iconProps?: Omit<UbiiIconProps, 'icon'> & React.RefAttributes<SVGSVGElement>,
        rightIcon?: UbiiIcon,
        rightIconProps?: Omit<UbiiIconProps, 'icon'> & React.RefAttributes<SVGSVGElement>,
        notClickable?: boolean,
        /**
         * Texto que se muestra mientras no se ha
         * seleccionado algún archivo
         */
        text?: string,
        beforeChange?: React.ChangeEventHandler<HTMLInputElement>
    } & FormikControlCommonsProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    type PasswordControlProps = {
        /**
         * Muestra los requerimientos de contraseña
         * según sudeban 641-10
         * @see http://www.sudeban.gob.ve/wp-content/uploads/N_Prudenciales/26-LA-ADECUADA-TECNOLOGIA-DE-LA-INFORMACION/26-5-RES-641-10.pdf
         */
        withValidation?: boolean;
        numeric?: boolean;
    } & FormikControlCommonsProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    /**
     * Valida una regla de contraseña RES 641-10.
     * Si no la cumple, establece el error
     */
    type PasswordRule = (password: string) => PasswordRuleShape

    interface PasswordRuleShape {
        passes: boolean,
        requirement: string
    }

    /**
     * Requerimiento de contraseña según sudeban
     * en la resolución 641-10
     * @see http://www.sudeban.gob.ve/wp-content/uploads/N_Prudenciales/26-LA-ADECUADA-TECNOLOGIA-DE-LA-INFORMACION/26-5-RES-641-10.pdf
     */
    interface PasswordRequirement {
        /**
         * Nombre del requerimiento
         */
        name: string,
        /**
         * Descripción del requerimiento
         */
        description: string,
        /**
         * La contraseña cumple con el requerimiento
         */
        status: boolean
    }

    interface PasswordRequirementsContainerProps {
        requirements: PasswordRequirement[]
    }

    type DatePickerControlProps = {
        className?: string;
        onChange?: DatePickerProps['onChange'],
    } & FormikControlCommonsProps & Omit<DatePickerProps, 'onChange'>;

    type CurrencyControlProps = {
        /**
         * Simbolo de la moneda
         */
        symbol?: string;
        /**
         * Conversion a otra moneda
         */
        withConversion?: {
            /**
             * Simbolo de la moneda a convertir
             */
            symbol: string;
            /**
             * Funcion conversora
             */
            converter: (value: number) => number
        }
    } & FormikControlCommonsProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    type CurrencyInputProps = {
        /**
         * Cantidad máxima de digitos permitida
         */
        max: number,
        /**
         * Evento al cambiar el valor del input
         */
        onValueChange: (value: number) => void,
        /**
         * Valor numérico del input
         */
        value: number,
        /**
         * Nombre del input
         */
        name: string,
        /**
         * ID del input
         */
        id: string,
        /**
         * El input está deshabilitado
         */
        disabled?: boolean,
        /**
         * Nombre de clase css del input
         */
        className: string
    } & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value' | 'max'>;

    type MaskControlProps = {
    } & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> & FormikControlCommonsProps & IMaskInputProps<any>;

    type CardControlProps = Omit<MaskControlProps, 'mask'>;

    interface ReactFlagsSelectProps {
        className?: string;
        selected: string;
        onSelect: OnSelect;
        selectButtonClassName?: string;
        showSelectedLabel?: boolean;
        showSecondarySelectedLabel?: boolean;
        showOptionLabel?: boolean;
        showSecondaryOptionLabel?: boolean;
        selectedSize?: number;
        optionsSize?: number;
        customLabels?: CustomLabels;
        placeholder?: React.ReactNode;
        searchable?: boolean;
        searchPlaceholder?: string;
        alignOptionsToRight?: boolean;
        countries?: CountryCodes;
        blacklistCountries?: boolean;
        fullWidth?: boolean;
        disabled?: boolean;
        id?: string;
    }

    type CountriesControlProps = Omit<ReactFlagsSelectProps, 'selected' | 'onSelect'> & FormikControlCommonsProps

    type DniControlProps = {
        letters?: 'natural' | 'juridic' | 'passport' | 'all' | Array<'V' | 'E' | 'J' | 'P' | 'G' | 'C'>,
        prependZeros?: boolean,
    } & TextControlProps

    type PhoneControlProps = PhoneInputProps & FormikControlCommonsProps;

    export type Select2ControlProps<T = any> = {
        options: { name: string, value: string | number }[];
        /**
         * Primera opción con valor vacío
         */
        firstOption?: string;
        /**
         * Genera un spinner centrado
         */
        loading?: boolean;
        /**
         * Texto a mostrar mientras carga
         */
        loadingText?: string;
        onLoad?: (value: T) => void;
    } & FormikControlCommonsProps & ReactSelectProps

    export type Select2Option = {
        value: any,
        label: string
    }
}