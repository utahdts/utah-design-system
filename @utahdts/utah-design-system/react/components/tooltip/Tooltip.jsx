import { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import { popupPlacement } from '../../enums/popupPlacement';
import { usePopupDelay } from '../../hooks/usePopupDelay';
import { useRefAlways } from '../../hooks/useRefAlways';
import { joinClassNames } from '../../util/joinClassNames';

/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */

/**
 * A ToolTip is only in charge of positioning and rendering a tooltip.
 * Pass in a "referenceElement" to have "zero-config" for onMouseEnter and onMouseLeave triggering
 * Pass in a isPopperVisible and setIsPopperVisible to have it be a controlled component
 * @param {object} props
 * @param {import('react').ReactNode} props.children The content of the tool tip
 * @param {string} [props.className] CSS class to apply to the popup
 * @param {import('react').MutableRefObject<HTMLDivElement | null>} [props.innerRef] ref of the popup wrapper
 * @param {boolean} [props.isPopperVisible] controlled value for telling if tool tip is visible
 * @param {[number, number]} [props.offset] default offset is [0, 5] (see popper documentation for details)
 * @param {PopupPlacement} [props.placement] where to put the tooltip in reference to the referenceElement
 * @param {HTMLElement | null} props.referenceElement the referenceElement from which the tool tip will toggle (first render will most likely be null)
 * @returns {import('react').JSX.Element}
 */
export function Tooltip({
  children,
  className,
  innerRef: draftInnerRef,
  isPopperVisible,
  offset = [0, 5],
  placement = popupPlacement.BOTTOM,
  referenceElement: draftReferenceElement,
}) {
  const [isPopperVisibleInternal, setIsPopperVisibleInternal] = useState(false);
  const [popperElement, setPopperElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const [arrowElement, setArrowElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const { styles, attributes, update } = usePopper(
    draftReferenceElement,
    popperElement,
    {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: { offset },
        },
        {
          name: 'arrow',
          options: { element: arrowElement },
        },
      ],
    }
  );
  const updateRef = useRefAlways(update);

  const { startNoPopupTimer, startPopupTimer } = usePopupDelay();

  // When the children update recalculate the popper position
  useEffect(() => {
    updateRef.current?.();
  }, [children, updateRef]);

  useEffect(
    () => {
      // parent is not controlling visibility, so hookup visibility to the `referenceElement`
      if (draftReferenceElement && isPopperVisible === undefined) {
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
            setIsPopperVisibleInternal(true);
            updateRef.current?.();
          })
        );
        // onfocus and onblur don't wait on the popupTimer to popup
        draftReferenceElement.onfocus = () => {
          setIsPopperVisibleInternal(true);
          updateRef.current?.();
        };
        draftReferenceElement.onmouseleave = () => {
          startNoPopupTimer();
          setIsPopperVisibleInternal(false);
        };
        draftReferenceElement.onblur = () => setIsPopperVisibleInternal(false);
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
    [draftReferenceElement, isPopperVisible, startNoPopupTimer, startPopupTimer, updateRef]
  );

  return (
    <div
      ref={(refValue) => {
        setPopperElement(refValue);
        if (draftInnerRef) {
          draftInnerRef.current = refValue;
        }
      }}
      style={styles.popper}
      {...attributes.popper}
      className={joinClassNames(
        className,
        'tooltip__wrapper',
        (!(isPopperVisible ?? isPopperVisibleInternal)) && 'tooltip__wrapper--hidden'
      )}
      aria-hidden="true"
    >
      <div className="tooltip__content">
        {children}
        <div ref={setArrowElement} style={styles.arrow} className="tooltip__arrow" />
      </div>
    </div>
  );
}
