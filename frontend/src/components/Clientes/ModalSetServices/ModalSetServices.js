import React from "react";
import { Modal } from "semantic-ui-react";
import  "./ModalSetServices.scss";

export function ModalSetServices({ show, size, title, content, open, onClose }) {
  return (
    <Modal className="modal-services" open={open} onClose={onClose} size="tiny">
      {title && <Modal.Header>{ title }</Modal.Header>}
      <Modal.Content>{ content }</Modal.Content>
    </Modal>
  )
}
