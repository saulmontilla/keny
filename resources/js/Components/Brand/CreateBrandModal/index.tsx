import React from 'react'
import { Modal, ModalProps } from 'react-bootstrap'
import { Brand } from '@/types/service';
import CreateBrandForm from './CreateServiceForm';

export interface CreateBrandModalProps extends ModalProps {
    brand?: Brand
};

export default function CreateBrandModal(props: CreateBrandModalProps) {
    const { service, ...modalProps } = props;
    const isEdit = !!service

    return (
        <Modal {...modalProps}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {isEdit
                        ? 'Editar Modelo'
                        : 'Crear Modelo'
                    }
                </Modal.Title>
            </Modal.Header>

            <CreateBrandForm {...props} />
        </Modal>
    )
}
