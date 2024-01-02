import React, {
  useCallback, useEffect, useRef
} from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '../../../util/joinClassNames';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { IconButton } from '../../buttons/IconButton';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';

/**
 * Based on the list from https://api.jqueryui.com/tabbable-selector/
 * Used to get a list of focusable elements within a modal component
 * @param {HTMLDialogElement} element
 * @returns {HTMLElement[]}
 */
function getFocusableElements(element) {
  // @ts-ignore
  return [
    ...element.querySelectorAll('a[href], area[href], button, input, textarea, select, object, [tabindex]:not([tabindex="-1"])'),
  ].filter((item) => !item.hasAttribute('disabled'));
}

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
  const ref = /** @type {typeof useRef<HTMLDialogElement | null>} */ (useRef)(null);
  const [lastActiveElement] = useImmer(/** @type {HTMLElement | undefined} */(document.activeElement));
  const [firstTabElement, setFirstTabElement] = useImmer(/** @type {HTMLElement | undefined} */(undefined));
  const [lastTabElement, setLastTabElement] = useImmer(/** @type {HTMLElement | undefined} */(undefined));
  const { addAssertiveMessage } = useAriaMessaging();

  const handleEscape = useCallback((/** @type {React.KeyboardEvent<HTMLDialogElement>} */ e) => {
    if (e.code === 'Escape' || e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      if (onEscape) { onEscape(e); }
    }
  }, [onEscape]);

  const handleTab = useCallback((/** @type {React.KeyboardEvent<HTMLDialogElement>} */ e) => {
    if (e.code === 'Tab' || e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstTabElement) {
          lastTabElement?.focus();
          e.preventDefault();
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (document.activeElement === lastTabElement) {
          firstTabElement?.focus();
          e.preventDefault();
        }
      }
    }
  }, [firstTabElement, lastTabElement]);

  useEffect(() => {
    if (ref) {
      // @ts-ignore
      const list = getFocusableElements(ref.current);
      if (list.length) {
        const firstElement = list[0];
        setFirstTabElement(firstElement);
        const lastElement = list[list.length - 1];
        setLastTabElement(lastElement);
        firstElement?.focus();
      } else {
        console.warn('No focusable element found. Make sure to include a way to close the modal.');
      }
    }
  }, []);

  useEffect(() => () => {
    // Unmount component
    addAssertiveMessage('Closing dialog');
    lastActiveElement?.focus();
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="modal-backdrop backdrop-dark" onClick={onClose} ref={innerRef}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        aria-modal="true"
        className={joinClassNames('modal__wrapper', className)}
        id={id}
        onClick={(e) => e.stopPropagation()}
        onKeyUp={handleEscape}
        onKeyDown={handleTab}
        ref={ref}
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
      </dialog>
    </div>
  );
}
