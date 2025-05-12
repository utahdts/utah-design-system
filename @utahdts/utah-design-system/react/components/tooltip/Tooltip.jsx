import { useEffect, useState } from 'react';
import { useFloating, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/react-dom';
import { popupPlacement } from '../../enums/popupPlacement';
import { usePopupDelay } from '../../hooks/usePopupDelay';
import { joinClassNames } from '../../util/joinClassNames';

/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */

/**
 * A ToolTip is only in charge of positioning and rendering a tooltip.
 * Pass in a "referenceElement" to have "zero-config" for onMouseEnter and onMouseLeave triggering
 * Pass in a isPoppupVisible and setIsPoppupVisible to have it be a controlled component
 * @param {object} props
 * @param {import('react').ReactNode} props.children The content of the tool tip
 * @param {string} [props.className] CSS class to apply to the popup
 * @param {import('react').MutableRefObject<HTMLDivElement | null>} [props.innerRef] ref of the popup wrapper
 * @param {boolean} [props.isPoppupVisible] controlled value for telling if tool tip is visible
 * @param {number | {mainAxis: number, crossAxis: number, alignmentAxis: number}} [props.position] default offset is [0, 5] (see poppup documentation for details)
 * @param {PopupPlacement} [props.placement] where to put the tooltip in reference to the referenceElement
 * @param {HTMLElement | null} props.referenceElement the referenceElement from which the tool tip will toggle (first render will most likely be null)
 * @returns {import('react').JSX.Element}
 */
export function Tooltip({
  children,
  className,
  innerRef: draftInnerRef,
  isPoppupVisible,
  position = 5,
  placement = popupPlacement.BOTTOM,
  referenceElement: draftReferenceElement,
}) {
  const [isPoppupVisibleInternal, setIsPoppupVisibleInternal] = useState(false);
  const [poppupElement, setPoppupElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const [arrowElement, setArrowElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const { floatingStyles, middlewareData } = useFloating({
    elements: {
      reference: draftReferenceElement,
      floating: poppupElement,
    },
    middleware: [
      offset(position),
      flip(),
      shift(),
      arrow({
        element: arrowElement,
      }),
    ],
    open: !(isPoppupVisible ?? isPoppupVisibleInternal),
    placement,
    whileElementsMounted: autoUpdate,
  });

  const { startNoPopupTimer, startPopupTimer } = usePopupDelay();

  useEffect(
    () => {
      // parent is not controlling visibility, so hookup visibility to the `referenceElement`
      if (draftReferenceElement && isPoppupVisible === undefined) {
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
            setIsPoppupVisibleInternal(true);
          })
        );
        // onfocus and onblur don't wait on the popupTimer to popup
        draftReferenceElement.onfocus = () => {
          setIsPoppupVisibleInternal(true);
        };
        draftReferenceElement.onmouseleave = () => {
          startNoPopupTimer();
          setIsPoppupVisibleInternal(false);
        };
        draftReferenceElement.onblur = () => setIsPoppupVisibleInternal(false);
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
    [draftReferenceElement, isPoppupVisible, startNoPopupTimer, startPopupTimer]
  );

  return (
    <div
      ref={(refValue) => {
        setPoppupElement(refValue);
        if (draftInnerRef) {
          draftInnerRef.current = refValue;
        }
      }}
      style={floatingStyles}
      className={joinClassNames(
        className,
        'tooltip__wrapper',
        (!(isPoppupVisible ?? isPoppupVisibleInternal)) && 'tooltip__wrapper--hidden'
      )}
      aria-hidden="true"
      data-poppup-placement={placement}
    >
      <div className="tooltip__content">
        {children}
        <div ref={setArrowElement} style={{left: middlewareData.arrow?.x, top: middlewareData.arrow?.y}} className="tooltip__arrow" />
      </div>
    </div>
  );
}
