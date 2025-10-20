import { useEffect, useState } from 'react';
import { useFloating, autoUpdate, offset as floatingOffset, shift, flip, arrow } from '@floating-ui/react-dom';
import { popupPlacement } from '../../enums/popupPlacement';
import { usePopupDelay } from '../../hooks/usePopupDelay';
import { joinClassNames } from '../../util/joinClassNames';

/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */

/**
 * A ToolTip is only in charge of positioning and rendering a tooltip.
 * Pass in a "referenceElement" to have "zero-config" for onMouseEnter and onMouseLeave triggering
 * Pass in a isPopupVisible and setIsPopupVisible to have it be a controlled component
 * @param {object} props
 * @param {import('react').ReactNode} props.children The content of the tool tip
 * @param {string} [props.className] CSS class to apply to the popup
 * @param {import('react').RefObject<HTMLDivElement | null>} [props.innerRef] ref of the popup wrapper
 * @param {boolean} [props.isPopupVisible] controlled value for telling if tool tip is visible
 * @param {number | {mainAxis: number, crossAxis: number, alignmentAxis?: number}} [props.offset] default offset is 5 (see popup documentation
 * for details)
 * @param {PopupPlacement} [props.placement] where to put the tooltip in reference to the referenceElement
 * @param {HTMLElement | null} props.referenceElement the referenceElement from which the tool tip will toggle (first render will most likely be null)
 * @returns {import('react').JSX.Element}
 */
export function Tooltip({
  children,
  className,
  innerRef: draftInnerRef,
  isPopupVisible,
  offset = 5,
  placement = popupPlacement.BOTTOM,
  referenceElement: draftReferenceElement,
}) {
  const [isPopupVisibleInternal, setIsPopupVisibleInternal] = useState(false);
  const [popupElement, setPopupElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const [arrowElement, setArrowElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const { floatingStyles, middlewareData } = useFloating({
    elements: {
      reference: draftReferenceElement,
      floating: popupElement,
    },
    middleware: [
      floatingOffset(offset),
      flip(),
      shift(),
      arrow({
        element: arrowElement,
      }),
    ],
    open: !(isPopupVisible ?? isPopupVisibleInternal),
    placement,
    whileElementsMounted: autoUpdate,
  });

  const { startNoPopupTimer, startPopupTimer } = usePopupDelay();

  const onEscape = (/** @type {KeyboardEvent} */ e) => {
    if (e.code === 'Escape' || e.key === 'Escape') {
      setIsPopupVisibleInternal(false);
      document.removeEventListener('keyup', onEscape);
    }
  };

  useEffect(
    () => {
      // parent is not controlling visibility, so hookup visibility to the `referenceElement`
      if (draftReferenceElement && isPopupVisible === undefined) {
        if (draftReferenceElement.onmouseenter) {
          throw new Error('ToolTip: onMouseEnter previously set');
        }
        if (draftReferenceElement.onmouseleave) {
          throw new Error('ToolTip: onMouseLeave previously set');
        }
        if (draftReferenceElement.onfocus) {
          throw new Error('ToolTip: onfocus previously set');
        }
        if (draftReferenceElement.onblur) {
          throw new Error('ToolTip: onblur previously set');
        }
        draftReferenceElement.onmouseenter = () => (
          startPopupTimer(() => {
            setIsPopupVisibleInternal(true);
          })
        );
        // onfocus and onblur don't wait on the popupTimer to popup
        draftReferenceElement.onfocus = () => {
          setIsPopupVisibleInternal(true);
        };
        draftReferenceElement.onmouseleave = () => {
          startNoPopupTimer();
          setIsPopupVisibleInternal(false);
        };
        draftReferenceElement.onblur = () => setIsPopupVisibleInternal(false);
        document.addEventListener('keyup', onEscape);
      }
      return (
        () => {
          if (draftReferenceElement) {
            draftReferenceElement.onmouseenter = null;
            draftReferenceElement.onmouseleave = null;
            draftReferenceElement.onfocus = null;
            draftReferenceElement.onblur = null;
          }
        }
      );
    },
    [draftReferenceElement, isPopupVisible, startNoPopupTimer, startPopupTimer, onEscape]
  );

  return (
    <div
      ref={(refValue) => {
        setPopupElement(refValue);
        if (draftInnerRef) {
          draftInnerRef.current = refValue;
        }
      }}
      style={floatingStyles}
      className={joinClassNames(
        className,
        'tooltip__wrapper',
        (!(isPopupVisible ?? isPopupVisibleInternal)) && 'tooltip__wrapper--hidden'
      )}
      aria-hidden="true"
      data-popup-placement={middlewareData?.offset?.placement || placement}
    >
      <div className="tooltip__content">
        {children}
        <div ref={setArrowElement} style={{left: middlewareData.arrow?.x, top: middlewareData.arrow?.y}} className="tooltip__arrow" />
      </div>
    </div>
  );
}
