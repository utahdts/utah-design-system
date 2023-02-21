import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import popperPlacement from '../../enums/popperPlacement';
import useClickOutside from '../../hooks/useClickOutside';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  // The content of the popup
  children: PropTypes.element.isRequired,

  // CSS class to apply to the popup
  className: PropTypes.string,

  id: PropTypes.string,

  // ref to the popup container
  innerRef: RefShape,

  // Control the visibility of the popup
  isVisible: PropTypes.bool.isRequired,

  // [x, y] offset of popped content from
  offset: PropTypes.arrayOf(PropTypes.number),

  // triggered when popup is closed because of loss of focus; (e, newVisibility) => { ... do something ... }
  onVisibleChange: PropTypes.func.isRequired,

  // The Popper Placement
  placement: PropTypes.oneOf(Object.values(popperPlacement)),

  // the anchor element around which the popup content will pop
  referenceElement: RefShape.isRequired,
};

const defaultProps = {
  className: undefined,
  id: null,
  innerRef: null,
  offset: [0, 8],
  placement: popperPlacement.BOTTOM,
};

function Popup({
  children,
  className,
  id,
  innerRef,
  isVisible,
  offset,
  onVisibleChange,
  placement,
  referenceElement,
}) {
  const popperRef = useRef();
  const arrowRef = useRef();

  if (innerRef) {
    // eslint-disable-next-line no-param-reassign
    innerRef.current = popperRef.current;
  }

  const { styles, attributes, update } = usePopper(referenceElement.current, popperRef.current, {
    placement,
    modifiers: [
      {
        name: 'arrow',
        options: { element: arrowRef.current },
      },
      {
        name: 'offset',
        options: { offset },
      },
    ],
  });

  useEffect(
    () => {
      if (update) {
        update();
      }
    },
    [isVisible]
  );

  useClickOutside(popperRef, (e) => onVisibleChange(e, false));

  return (
    <div
      id={id}
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
      className={joinClassNames(
        'popper-popup__content',
        className,
        isVisible ? 'popper-popup__content--visible' : 'popper-popup__content--hidden'
      )}
    >
      <div className="popper-popup__inner">
        {children}
        <div ref={arrowRef} style={styles.arrow} className="popper-popup__arrow" />
      </div>
    </div>
  );
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

export default Popup;
