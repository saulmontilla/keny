import { Work } from '@/types/service'
import React from 'react'
import { Button, Modal, ModalProps } from 'react-bootstrap'
import WorkHistoryDetails from './WorkHistoryDetails';

export interface WorkHistoryModalProps extends ModalProps {
    work: Work
}

export default function WorkHistoryModal(props: WorkHistoryModalProps) {
    const { work, ...modalProps } = props;

    return (
        <Modal {...modalProps}>

            <Modal.Header closeButton>
                <Modal.Title>
                    Detalles del trabajo
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <WorkHistoryDetails {...props} />
            </Modal.Body>

            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={props.onHide}
                >
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
