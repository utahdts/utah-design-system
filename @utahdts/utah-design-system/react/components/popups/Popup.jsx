import React, { useCallback, useRef } from 'react';
import { useFloating, autoUpdate, offset as floatingOffset, shift, flip, arrow } from '@floating-ui/react-dom';
import { ICON_BUTTON_APPEARANCE } from '../../enums/buttonEnums';
import { popupPlacement } from '../../enums/popupPlacement';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useGlobalKeyEvent } from '../../hooks/useGlobalKeyEvent';
import { joinClassNames } from '../../util/joinClassNames';
import { IconButton } from '../buttons/IconButton';

/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */

/**
 * @param {object} props
 * @param {string} props.ariaLabelledBy usually the id of the button that controls the popup
 * @param {import('react').ReactNode} props.children The content of the popup
 * @param {string} [props.className] CSS class to apply to the popup
 * @param {boolean} [props.hasCloseButton] the top right `X` close button
 * @param {string} props.id used for hooking up to the button that controls the popup by aria-control
 * @param {import('react').RefObject<HTMLDivElement | null>} [props.innerRef] ref to the popup wrapper
 * @param {boolean} props.isVisible Control the visibility of the popup
 * @param {number | {mainAxis: number, crossAxis: number, alignmentAxis?: number}} [props.offset] offset of popped content from
 * @param {(e: React.UIEvent, isVisible: boolean) => void} props.onVisibleChange popup closed; (e, newVisibility) => { ... do something ... }
 * @param {PopupPlacement} [props.placement] The Popup Placement
 * @param {import('react').RefObject<HTMLElement | null>} props.referenceElement the anchor element around which the popup content will pop
 * @param {'dialog' | 'grid' | 'listbox' | 'menu' | 'tree'} props.role popup must tell its role for accessibility
 * @returns {import('react').JSX.Element}
 */
export function Popup({
  ariaLabelledBy,
  children,
  className,
  hasCloseButton,
  id,
  innerRef: draftInnerRef,
  isVisible,
  offset = {mainAxis: 10, crossAxis: 0},
  onVisibleChange,
  placement = popupPlacement.BOTTOM,
  referenceElement,
  role,
  ...rest
}) {
  const popupRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const arrowRef = useRef(/** @type {HTMLDivElement | null} */(null));

  if (draftInnerRef) {
    // eslint-disable-next-line no-param-reassign
    draftInnerRef.current = popupRef.current;
  }

  const { floatingStyles, middlewareData } = useFloating({
    elements: {
      reference: referenceElement.current,
      floating: popupRef.current,
    },
    middleware: [
      floatingOffset(offset),
      flip(),
      shift(),
      arrow({
        element: arrowRef.current,
      }),
    ],
    open: isVisible,
    placement,
    whileElementsMounted: autoUpdate,
  });

  useGlobalKeyEvent({
    whichKeyCode: 'Escape',
    onKeyUp: (e) => onVisibleChange(e, false),
  });

  const onVisibleChangeCallback = useCallback(
    /** @param {import('react').KeyboardEvent} e */
    (e) => { onVisibleChange(e, false); },
    [onVisibleChange]
  );

  useClickOutside([popupRef, referenceElement], onVisibleChangeCallback, !isVisible);

  return (
    <div
      aria-labelledby={ariaLabelledBy}
      id={id}
      ref={popupRef}
      style={floatingStyles}
      className={joinClassNames(
        'popup__wrapper',
        className,
        hasCloseButton ? 'popup__wrapper--close-button' : null,
        isVisible ? 'popup__wrapper--visible' : 'popup__wrapper--hidden'
      )}
      role={role}
      data-popup-placement={middlewareData?.offset?.placement || placement}
      {...rest}
    >
      <div className="popup__content">
        {
          hasCloseButton
            ? (
              <IconButton
                appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
                className="popup__close-button"
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={(e) => onVisibleChange(e, false)}
                title="Close popup"
                size="small"
              />
            )
            : undefined
        }
        {children}
        <div ref={arrowRef} style={{left: middlewareData.arrow?.x, top: middlewareData.arrow?.y}} className="popup__arrow" />
      </div>
    </div>
  );
}
