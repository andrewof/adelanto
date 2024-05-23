import React from "react";
import { Modal } from "semantic-ui-react";
import "./FormularioModal.scss";

export function FormularioModal({ showModal, onClose, contenido }) {
  return (
    <Modal className="formulario-modal" open={showModal} onClose={onClose} size="tiny">
      <Modal.Header>Registrar Técnico</Modal.Header>
      <Modal.Content>{ contenido }</Modal.Content>
    </Modal>
  )
}
