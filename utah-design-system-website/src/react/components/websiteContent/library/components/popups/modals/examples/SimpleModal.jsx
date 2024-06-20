import {
  Button, Modal, ModalContent, ModalFooter, ModalTitle
} from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

export function SimpleModal() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), []);
  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mb-spacing">
        Simple Modal
      </Button>
      {showModal
        ? (
          <Modal
            ariaLabelledBy="simple-modal-title"
            id="simple-modal"
            onClose={closeModal}
            onEscape={closeModal}
          >
            <ModalTitle id="simple-modal-title">
              Are you sure?
            </ModalTitle>
            <ModalContent id="simple-modal-content">
              You cannot undo this action.
            </ModalContent>
            <ModalFooter className="flex float-right flex-wrap" id="simple-modal-footer">
              <Button onClick={closeModal} className="mr-spacing">Cancel</Button>
              <Button onClick={closeModal} className="button--solid button--primary-color">Okay</Button>
            </ModalFooter>
          </Modal>
        )
        : ''}
    </>
  );
}
