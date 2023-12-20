// @ts-check
import React, { useCallback, useEffect, useRef } from 'react';
import { joinClassNames } from '../../../util/joinClassNames';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { IconButton } from '../../buttons/IconButton';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';

/**
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {React.Ref<HTMLDivElement>} [props.innerRef]
 * @param {import('react').KeyboardEventHandler} [props.onEscape]
 * @param {import('react').MouseEventHandler} [props.onClose]
 * @returns {React.JSX.Element}
 */
export function Modal({
  children,
  className,
  id,
  innerRef,
  onEscape,
  onClose,
}) {
  const ref = /** @type {typeof useRef<HTMLDialogElement>} */ (useRef)(null);

  const { addAssertiveMessage } = useAriaMessaging();

  const escListener = useCallback((/** @type {React.KeyboardEvent<HTMLDialogElement>} */ e) => {
    if (e.code === 'Escape' || e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      if (onEscape) { onEscape(e); }
    }
  }, [onEscape]);

  const resetFocus = useCallback(() => ref?.current?.focus(), []);

  useEffect(() => {
    // set initial focus
    resetFocus();
  }, []);

  useEffect(() => () => {
    // unmount component
    addAssertiveMessage('Closing dialog');
  }, [addAssertiveMessage]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="modal-backdrop backdrop-dark" onClick={onClose} ref={innerRef}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        aria-modal="true"
        className={joinClassNames('modal__wrapper', className)}
        id={id}
        onClick={useCallback((/** @type {{ stopPropagation: () => any; }} */ e) => e.stopPropagation(), [])}
        onKeyUp={escListener}
        ref={ref}
        tabIndex={-1}
      >
        {children}
        {
          onClose
            ? (
              <IconButton
                appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                className="modal__close-button"
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={onClose}
                size="small"
                title="Close modal"
              />
            )
            : undefined
        }
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div aria-hidden tabIndex={0} className="modal__hidden-last-focusable visually-hidden" onFocus={resetFocus}>
          end of modal
          {/* we want to keep the user within the modal, we use this to loop them back at the beginning when they tab through */}
        </div>
      </dialog>
    </div>
  );
}
