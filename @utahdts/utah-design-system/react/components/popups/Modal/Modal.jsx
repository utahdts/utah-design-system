import { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { joinClassNames } from '../../../util/joinClassNames';
import { IconButton } from '../../buttons/IconButton';
import { getFocusableElements } from '../../../util/getFocusableElements';
import { useHandleEscape } from '../../../hooks/useHandleEscape';
import { useHandleTab } from '../../../hooks/useHandleTab';

/**
 * @param {object} props
 * @param {string} props.ariaLabelledBy Must match the id of the title of the modal
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {import('react').KeyboardEventHandler} [props.onEscape]
 * @param {import('react').MouseEventHandler} [props.onClose]
 * @returns {import('react').JSX.Element}
 */
export function Modal({
  ariaLabelledBy,
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

  const handleEscape = useHandleEscape(onEscape);
  const handleTab = useHandleTab(firstTabElement, lastTabElement);

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
        // eslint-disable-next-line no-console
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
        aria-labelledby={ariaLabelledBy}
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
