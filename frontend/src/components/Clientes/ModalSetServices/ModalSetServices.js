import React from "react";
import { Modal } from "semantic-ui-react";

export function ModalSetServices({ show, size, title, children, open, onClose }) {
  return (
    <Modal className="modal-services" open={open} onClose={onClose}>
      {title && <Modal.Header>{ title }</Modal.Header>}
      <Modal.Content>{ children }</Modal.Content>
    </Modal>
  )
}
