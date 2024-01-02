import {
  Button, ICON_BUTTON_APPEARANCE, IconButton,
  joinClassNames,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle
} from '@utahdts/utah-design-system';
import { useCallback, useState } from 'react';

/** @typedef {import('utah-design-system-website').ModalExamplePropsShape} ModalExamplePropsShape */
/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @param {object} props.state
 * @param {ModalExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function ModalsExampleRender({
  state: {
    props: {
      className,
      title,
      content,
      size,
      showCloseButton,
      closeOnEsc,
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
            id="modal-example-render"
            onClose={showCloseButton ? closeModal : undefined}
            onEscape={closeOnEsc ? closeModal : undefined}
          >
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{content}</ModalContent>
            <ModalFooter className="flex float-right flex-wrap">
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
        <div className="modal-backdrop backdrop-dark" ref={innerRef}>
          <dialog
            aria-modal="true"
            className={joinClassNames('modal__wrapper', className, size)}
            id="modal-example"
          >
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{content}</ModalContent>
            <ModalFooter className="flex float-right flex-wrap">
              <Button
                className="mr-spacing"
                onClick={() => undefined}
              >
                Cancel
              </Button>
              <Button
                className="button--solid button--primary-color"
                onClick={() => undefined}
              >
                Okay
              </Button>
            </ModalFooter>
            {
              showCloseButton
                ? (
                  <IconButton
                    appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                    className="modal__close-button"
                    icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                    onClick={() => undefined}
                    size="small"
                    title="Close modal"
                  />
                )
                : undefined
            }
          </dialog>
        </div>
      </div>
    </div>
  );
}
