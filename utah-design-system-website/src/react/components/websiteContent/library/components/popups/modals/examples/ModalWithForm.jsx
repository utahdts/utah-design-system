import {
  Button, Modal, ModalContent, ModalFooter, ModalTitle, TextInput
} from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

export function ModalWithForm() {
  const [showModal, setModal] = useState(false);
  const closeModal = useCallback(() => setModal(false), []);
  return (
    <>
      <Button onClick={() => setModal(true)}>
        Modal with Form
      </Button>
      {showModal
        ? (
          <Modal
            className="modal--small modal--primary"
            id="saimple-modal"
            onClose={closeModal}
            onEscape={closeModal}
          >
            <ModalTitle>
              Create Account
            </ModalTitle>
            <ModalContent>
              <p className="mb-spacing-s">In order to continue, please register.</p>
              <TextInput id="username-input" label="Username" />
              <TextInput id="email-input" label="Email" />
            </ModalContent>
            <ModalFooter className="flex float-right flex-wrap">
              <Button onClick={closeModal} className="mr-spacing">Cancel</Button>
              <Button onClick={closeModal} className="button--solid button--primary-color">Sign Up</Button>
            </ModalFooter>
          </Modal>
        )
        : ''}
    </>
  );
}
