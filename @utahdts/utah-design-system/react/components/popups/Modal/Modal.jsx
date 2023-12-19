// @ts-check
import React, { useCallback, useEffect, useRef } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import IconButton from '../../buttons/IconButton';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {import('react').MouseEventHandler} [props.onClose]
 * @returns {JSX.Element}
 */
export function Modal({
  children,
  className,
  id,
  onClose,
}) {
  const ref = /** @type {typeof useRef<HTMLDialogElement>} */ (useRef)(null);

  const escListener = useCallback((e) => {
    if (e.code === 'Escape' || e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      if (onClose) { onClose(e); }
    }
  }, [onClose]);

  const resetFocus = useCallback(() => ref?.current?.focus(), []);

  useEffect(() => {
    // set initial focus
    resetFocus();
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="modal-backdrop backdrop-dark" onClick={onClose}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        aria-modal="true"
        className={joinClassNames('modal__wrapper', className)}
        id={id}
        onClick={useCallback((e) => e.stopPropagation(), [])}
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
