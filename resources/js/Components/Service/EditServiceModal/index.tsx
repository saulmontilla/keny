import React from 'react'
import { Modal, ModalProps } from 'react-bootstrap'
import EditServiceForm from './EditServiceForm';
import { Service } from '@/types/service';

export interface EditServiceModalProps extends ModalProps {
    service?: Service
};

export default function EditServiceModal(props: EditServiceModalProps) {
    const { service, ...modalProps } = props;
    const isEdit = !!service

    return (
        <Modal {...modalProps}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {isEdit
                        ? 'Editar Servicio'
                        : 'Crear Servicio'
                    }
                </Modal.Title>
            </Modal.Header>

            <EditServiceForm {...props} />
        </Modal>
    )
}
