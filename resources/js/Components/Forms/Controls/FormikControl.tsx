import { Field } from 'formik'
import React from 'react'
import { FormikControlTypes, TextControlProps, RadioControlProps, SelectControlProps, PasswordControlProps, CheckboxControlProps, FileControlProps, DatePickerControlProps, CurrencyControlProps, MaskControlProps, CountriesControlProps, CardControlProps, DniControlProps, PhoneControlProps, Select2ControlProps } from 'ubiionline/form'
import CardControl from './CardControl'
import CheckboxControl from './CheckboxControl'
import CountriesControl from './CountriesControl'
import CurrencyControl from './CurrencyControl'
import DatePickerControl from './DatePickerControl'
import FileControl from './FileControl'
import MaskControl from './MaskControl'
import PasswordControl from './PasswordControl'
import RadioControl from './RadioControl'
import SelectControl from './SelectControl'
import TextControl from './TextControl'
import DniControl from './DniControl'
import PhoneControl from './PhoneControl'
import Select2Control from './Select2Control'

export default function FormikControl<C extends FormikControlTypes>({ control, ...rest }: { control: C } & (C extends 'text' ? TextControlProps : C extends 'select' ? SelectControlProps : C extends 'radio' ? RadioControlProps : C extends 'checkbox' ? CheckboxControlProps : C extends 'password' ? PasswordControlProps : C extends 'file' ? FileControlProps : C extends 'date-picker' ? DatePickerControlProps : C extends 'currency' ? CurrencyControlProps : C extends 'mask' ? MaskControlProps : C extends 'countries' ? CountriesControlProps : C extends 'dni' ? DniControlProps : C extends 'phone' ? PhoneControlProps : C extends 'select2' ? Select2ControlProps : CardControlProps)) {
    let Component

    switch (control) {
        case 'text':
            Component = TextControl
            break;
        case 'select':
            Component = SelectControl
            break;
        case 'select2':
            Component = Select2Control
            break
        case 'radio':
            Component = RadioControl
            break;
        case 'checkbox':
            Component = CheckboxControl
            break;
        case 'file':
            Component = FileControl
            break;
        case 'password':
            Component = PasswordControl
            break;
        case 'date-picker':
            Component = DatePickerControl
            break;
        case 'currency':
            Component = CurrencyControl
            break;
        case 'mask':
            Component = MaskControl
            break
        case 'countries':
            Component = CountriesControl
            break
        case 'card':
            Component = CardControl
            break
        case 'dni':
            Component = DniControl
            break
        case 'phone':
            Component = PhoneControl
            break
    }

    return (
        <Field
            component={Component}
            {...rest}
        />
    )
}