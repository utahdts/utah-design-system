// @ts-check
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import popupPlacement from '../../enums/popupPlacement';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import useRefAlways from '../../hooks/useRefAlways';

const propTypes = {
  // The content of the tool tip
  children: PropTypes.node.isRequired,

  // CSS class to apply to the popup
  className: PropTypes.string,

  // ref of the popup wrapper
  innerRef: RefShape,

  // controlled value for telling if tool tip is visible
  isPopperVisible: PropTypes.bool,

  // default offset is [0, 5] (see popper documentation for details)
  offset: PropTypes.arrayOf(PropTypes.number),

  // the referenceElement from which the tool tip will toggle (required, but first render will most likely be null because it's from a ref)
  referenceElement: PropTypes.instanceOf(Element),
};

const defaultProps = {
  className: null,
  innerRef: null,
  isPopperVisible: null,
  offset: [0, 5],
  referenceElement: null,
};

/**
 * A ToolTip is only in charge of positioning and rendering a tooltip.
 * Pass in a "referenceElement" to have "zero-config" for onMouseEnter and onMouseLeave triggering
 * Pass in a isPopperVisible and setIsPopperVisible to have it be a controlled component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.MutableRefObject | null} [props.innerRef]
 * @param {boolean | null} props.isPopperVisible
 * @param {[number, number]} [props.offset]
 * @param {HTMLElement | null} props.referenceElement
 * @returns {JSX.Element}
 */
function ToolTip({
  children,
  className,
  innerRef: draftInnerRef = null,
  isPopperVisible = null,
  offset = [0, 5],
  referenceElement: draftReferenceElement,
}) {
  const [isPopperVisibleInternal, setIsPopperVisibleInternal] = useState(false);
  const [popperElement, setPopperElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const [arrowElement, setArrowElement] = /** @type {typeof useState<HTMLDivElement | null>} */ (useState)(null);
  const { styles, attributes, update } = usePopper(
    draftReferenceElement,
    popperElement,
    {
      placement: popupPlacement.BOTTOM,
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

  useEffect(
    () => {
      // parent is not controlling visibility, so hookup visibility to the `referenceElement`
      if (draftReferenceElement && isPopperVisible === null) {
        if (draftReferenceElement.onmouseenter) {
          throw new Error('ToolTip: onMouseEnter previously set');
        }
        if (draftReferenceElement.onmouseleave) {
          throw new Error('ToolTip: onMouseLeave previously set');
        }
        draftReferenceElement.onmouseenter = () => {
          setIsPopperVisibleInternal(true);
          updateRef.current?.();
        };
        draftReferenceElement.onmouseleave = () => setIsPopperVisibleInternal(false);
      }
      return (
        () => {
          if (draftReferenceElement) {
            draftReferenceElement.onmouseenter = null;
            draftReferenceElement.onmouseleave = null;
          }
        }
      );
    },
    [draftReferenceElement]
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

ToolTip.propTypes = propTypes;
ToolTip.defaultProps = defaultProps;

export default ToolTip;
