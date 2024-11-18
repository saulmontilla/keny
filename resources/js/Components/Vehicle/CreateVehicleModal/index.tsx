import React from 'react'
import { Modal, ModalProps } from 'react-bootstrap'
import { Brand } from '@/types/service';
import CreateVehicleForm from './CreateVehicleForm';

export interface CreateVehicleModalProps extends ModalProps {
    brand?: Brand
};

export default function CreateVehicleModal(props: CreateVehicleModalProps) {
    const { service, ...modalProps } = props;
    const isEdit = !!service

    return (
        <Modal {...modalProps} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>
                    {isEdit
                        ? 'Editar Modelo de Vehículo'
                        : 'Crear Modelo de Vehículo'
                    }
                </Modal.Title>
            </Modal.Header>

            <CreateVehicleForm {...props} />
        </Modal>
    )
}
