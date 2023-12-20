import {
  Button,
  joinClassNames,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle
} from '@utahdts/utah-design-system';
import React, { useCallback, useState } from 'react';

/** @typedef {import('utah-design-system-website').ModalExamplePropsShape} ModalExamplePropsShape */
/**
 * @param {object} props
 * @param {React.RefObject<HTMLDivElement>} props.innerRef
 * @param {object} props.state
 * @param {ModalExamplePropsShape} props.state.props
 * @returns {React.JSX.Element}
 */
export function ModalsExampleRender({
  state: {
    props: {
      className,
      title,
      content,
      size,
      isForced,
    },
  },
  innerRef,
}) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), [setShowModal]);
  const openModal = useCallback(() => setShowModal(true), [setShowModal]);
  return (
    <div>
      <Button
        onClick={openModal}
      >
        Display modal
      </Button>
      {showModal
        ? (
          <Modal
            className={joinClassNames(className, size)}
            id="modal-example"
            onClose={isForced ? undefined : closeModal}
            onEscape={isForced ? undefined : closeModal}
          >
            <ModalTitle>
              <h3>{title}</h3>
            </ModalTitle>
            <ModalContent>{content}</ModalContent>
            <ModalFooter className="flex float-right">
              <Button
                className="mr-spacing"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                className="button--solid button--primary-color"
                onClick={closeModal}
              >
                Okay
              </Button>
            </ModalFooter>
          </Modal>
        )
        : undefined}
      <div className="visually-hidden">
        <Modal
          className={joinClassNames(className, size)}
          id="modal-id"
          innerRef={innerRef}
          onClose={isForced ? undefined : closeModal}
          onEscape={isForced ? undefined : closeModal}
        >
          <ModalTitle>
            <h3>{title}</h3>
          </ModalTitle>
          <ModalContent>{content}</ModalContent>
          <ModalFooter className="flex float-right">
            <Button
              className="mr-spacing"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              className="button--solid button--primary-color"
              onClick={closeModal}
            >
              Okay
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
