import { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '../../../util/joinClassNames';
import { ICON_BUTTON_APPEARANCE } from '../../../enums/buttonEnums';
import { IconButton } from '../../buttons/IconButton';
import { useAriaMessaging } from '../../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { getFocusableElements } from '../../../util/getFocusableElements';
import { useHandleEscape } from '../../../hooks/useHandleEscape';
import { useHandleTab } from '../../../hooks/useHandleTab';
import { DRAWER_PLACEMENT } from '../../../enums/drawerPlacement';

/** @typedef {import('@utahdts/utah-design-system').DrawerPlacement} DrawerPlacement */
/**
 * @param {object} props
 * @param {string} props.ariaLabelledBy Must match the id of the title of the drawer
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} props.id
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {import('react').KeyboardEventHandler} [props.onEscape]
 * @param {import('react').MouseEventHandler} [props.onClose]
 * @param {DrawerPlacement} [props.position]
 * @returns {React.JSX.Element}
 */
export function Drawer({
  ariaLabelledBy,
  children,
  className,
  id,
  innerRef,
  onClose,
  onEscape,
  position = DRAWER_PLACEMENT.RIGHT,
}) {
  const ref = /** @type {typeof useRef<HTMLDialogElement | null>} */ (useRef)(null);
  const [lastActiveElement] = useImmer(/** @type {HTMLElement | undefined} */(document.activeElement));
  const [firstTabElement, setFirstTabElement] = useImmer(/** @type {HTMLElement | undefined} */(undefined));
  const [lastTabElement, setLastTabElement] = useImmer(/** @type {HTMLElement | undefined} */(undefined));
  const { addAssertiveMessage } = useAriaMessaging();

  const handleEscape = useHandleEscape(onEscape);
  const handleTab = useHandleTab(firstTabElement, lastTabElement);

  useEffect(() => {
    if (ref.current) {
      const list = getFocusableElements(ref.current);
      if (list.length) {
        const firstElement = list[0];
        setFirstTabElement(firstElement);
        const lastElement = list[list.length - 1];
        setLastTabElement(lastElement);
        firstElement?.focus();
      } else {
        // eslint-disable-next-line no-console
        console.warn('No focusable element found. Make sure to include a way to close the drawer.');
      }
    }
  }, []);

  useEffect(() => () => {
    // Unmount component
    addAssertiveMessage('Closing drawer.');
    lastActiveElement?.focus();
  }, []);

  return (
    <div className="drawer-wrapper" ref={innerRef}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="drawer__backdrop backdrop-dark" onClick={onClose}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <dialog
          aria-labelledby={ariaLabelledBy}
          className={joinClassNames('drawer__inner', position, className)}
          id={id}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={handleTab}
          onKeyUp={handleEscape}
          ref={ref}
        >
          {children}
          {
            onClose
              ? (
                <IconButton
                  appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                  className="drawer__close-button"
                  icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                  onClick={onClose}
                  size="small"
                  title="Close"
                />
              )
              : undefined
          }
        </dialog>
      </div>
    </div>
  );
}
