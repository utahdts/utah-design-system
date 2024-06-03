import { Button, Modal, ModalContent, ModalFooter, ModalTitle } from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

export function LargeModal() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), []);
  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mb-spacing">
        Large Modal
      </Button>
      {showModal
        ? (
          <Modal
            ariaLabelledBy="modal-large-title"
            className="modal--large modal--primary"
            id="saimple-modal"
            onClose={closeModal}
            onEscape={closeModal}
          >
            <ModalTitle id="modal-large-title">
              <div className="flex items-center">
                <span className="utds-icon-before-warning mr-spacing-s" aria-hidden="true" />
                <span>Are you sure?</span>
              </div>
            </ModalTitle>
            <ModalContent id="modal-large-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur lacus non lobortis volutpat.
              In suscipit accumsan aliquam. Curabitur sodales semper tellus, eu scelerisque neque semper posuere.
              Aenean quam odio, pretium vitae mollis rhoncus, commodo nec orci. Morbi porta vel lorem consectetur efficitur.
              Phasellus neque lectus, laoreet vel ipsum ac, egestas sollicitudin libero. Fusce eu imperdiet lacus, a cursus felis.
            </ModalContent>
            <ModalFooter className="flex float-right flex-wrap" id="modal-large-footer">
              <Button onClick={closeModal} className="mr-spacing">Cancel</Button>
              <Button onClick={closeModal} className="button--solid button--primary-color">Okay</Button>
            </ModalFooter>
          </Modal>
        )
        : ''}
    </>
  );
}
