import {
  Button,
  joinClassNames,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle
} from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

/** @typedef {import('../../../../../../../typedefs.d').ModalExamplePropsShape} ModalExamplePropsShape */

/**
 * @param {Object} props
 * @param {React.RefObject} props.innerRef
 * @param {Object} props.state
 * @param {ModalExamplePropsShape} props.state.props
 * @returns {JSX.Element}
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
            onClose={isForced ? null : closeModal}
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
          onClose={isForced ? null : closeModal}
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
