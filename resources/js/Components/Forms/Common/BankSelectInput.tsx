import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import FormikControl from '../Controls/FormikControl'
import { Bank } from '@/types/user'
import useLoading from '@/Hooks/useLoading'
import axios from 'axios'
import TryAgain from '@/Components/TryAgain'
import { getIn, useFormikContext } from 'formik'
import BankAccountTypeSelect from './BankAccountTypeSelect'

interface BankSelectInputProps {
    bankCodeName: string,
    accountName: string,
    accountTypeName: string,
    bankName: string
    bankLabel: string,
    clientTypeId: number
}

export default function BankSelectInput(props: BankSelectInputProps) {
    const [banks, setBanks] = useState<Bank[]>([])
    const { loading, setLoading, error, setError } = useLoading()
    const formik = useFormikContext()
    const bankSelected = getIn(formik.values, `${props.bankCodeName}.value`)
    const accountSelected = getIn(formik.values, props.accountName)

    const canShowAccountType = props.clientTypeId !== 1

    function fetchBanks() {
        setLoading(true)
        setError(false)

        axios.get('/bank')
            .then(response => {
                setBanks(response.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchBanks()
    }, [])

    useEffect(() => {
        if (!bankSelected) return

        const rawNumber = accountSelected.slice(4)
        const accountArranged = bankSelected.concat(rawNumber)

        formik.setFieldValue(props.accountName, accountArranged)

        const validBank = banks.find(bank => bank.codigo === bankSelected)

        if (validBank) {
            formik.setFieldValue(props.bankName, validBank.alias)
        }
    }, [bankSelected])

    useEffect(() => {
        if (accountSelected.length < 4) return

        const code = accountSelected.slice(0, 4)

        const validBank = banks.find(bank => bank.codigo === code)
        const codeIsDifferent = code !== bankSelected

        if (validBank && codeIsDifferent) {
            formik.setFieldValue(props.bankCodeName, { label: validBank.alias, value: validBank.codigo })
            formik.setFieldValue(props.bankName, validBank.alias)
        }

    }, [accountSelected])

    if (error) {
        return (
            <TryAgain
                text='Error al cargar los bancos'
                onRetry={fetchBanks}
            />
        )
    }

    return (
        <Row>
            {canShowAccountType &&
                <Col md="4">
                    <BankAccountTypeSelect
                        name="bank.type"
                        clientTypeId={props.clientTypeId}
                    />
                </Col>
            }
            <Col md={canShowAccountType ? 4 : undefined}>
                <FormikControl
                    control='select2'
                    name={props.bankCodeName}
                    label={props.bankLabel}
                    options={banks.map(bank => (
                        { name: bank.alias, value: bank.codigo }
                    ))}
                    loading={loading}
                    material
                />
            </Col>
            <Col md={canShowAccountType ? 4 : 7}>
                <FormikControl
                    control='mask'
                    name={props.accountName}
                    label='Número de cuenta'
                    mask='0000 0000 00 0000000000'
                    disabled={loading}
                    material
                    autoComplete="off"
                />
            </Col>
        </Row>
    )
}
