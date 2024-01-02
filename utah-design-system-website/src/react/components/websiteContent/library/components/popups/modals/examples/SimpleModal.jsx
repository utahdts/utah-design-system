import {
  Button, Modal, ModalContent, ModalFooter, ModalTitle
} from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

export function SimpleModal() {
  const [showModal, setModal] = useState(false);
  const closeModal = useCallback(() => setModal(false), []);
  return (
    <>
      <Button onClick={() => setModal(true)} className="mb-spacing">
        Simple Modal
      </Button>
      {showModal
        ? (
          <Modal
            id="saimple-modal"
            onClose={closeModal}
            onEscape={closeModal}
          >
            <ModalTitle>
              Are you sure?
            </ModalTitle>
            <ModalContent>
              You cannot undo this action.
            </ModalContent>
            <ModalFooter className="flex float-right flex-wrap">
              <Button onClick={closeModal} className="mr-spacing">Cancel</Button>
              <Button onClick={closeModal} className="button--solid button--primary-color">Okay</Button>
            </ModalFooter>
          </Modal>
        )
        : ''}
    </>
  );
}
