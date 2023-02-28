import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { ICON_BUTTON_APPEARANCE } from '../../enums/buttonEnums';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import popperPlacement from '../../enums/popperPlacement';
import useClickOutside from '../../hooks/useClickOutside';
import useGlobalKeyEvent from '../../hooks/useGlobalKeyEvent';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import IconButton from '../buttons/IconButton';

const propTypes = {
  // usually the id of the button that controls the popup
  ariaLabelledBy: PropTypes.string.isRequired,

  // The content of the popup
  children: PropTypes.node.isRequired,

  // CSS class to apply to the popup
  className: PropTypes.string,

  // the top right `X` close button
  hasCloseButton: PropTypes.bool,

  // used for hooking up to the button that controls the popup by aria-control
  id: PropTypes.string.isRequired,

  // ref to the popup wrapper
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

  // popup must tell its role for accessibility
  role: PropTypes.oneOf(['dialog', 'grid', 'listbox', 'menu', 'tree']).isRequired,
};

const defaultProps = {
  className: null,
  hasCloseButton: false,
  innerRef: null,
  offset: [0, 10],
  placement: popperPlacement.AUTO,
};

function Popup({
  ariaLabelledBy,
  children,
  className,
  hasCloseButton,
  id,
  innerRef,
  isVisible,
  offset,
  onVisibleChange,
  placement,
  referenceElement,
  role,
  ...rest
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

  useGlobalKeyEvent({
    whichKeyCode: 'Escape',
    onKeyUp: (e) => onVisibleChange(e, false),
  });

  const onVisibleChangeCallback = useCallback((e) => onVisibleChange(e, false));
  useClickOutside(popperRef, onVisibleChangeCallback, !isVisible);

  return (
    <div
      aria-labelledby={ariaLabelledBy}
      id={id}
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
      className={joinClassNames(
        'popup__wrapper',
        className,
        hasCloseButton ? 'popup__wrapper--close-button' : null,
        isVisible ? 'popup__wrapper--visible' : 'popup__wrapper--hidden'
      )}
      role={role}
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
                title="Close Popup"
                size={formElementSizesEnum.SMALL}
              />
            )
            : undefined
        }
        {children}
        <div ref={arrowRef} style={styles.arrow} className="popup__arrow" />
      </div>
    </div>
  );
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

export default Popup;
