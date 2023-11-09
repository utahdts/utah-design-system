// @ts-check
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import joinClassNames from '../../util/joinClassNames';
import Spinner from '../widgetsIndicators/Spinner';
import handleEvent from '../../util/handleEvent';
import { handleKeyPress } from '../../../index';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';

const propTypes = {
  appearance: PropTypes.oneOf(['solid', 'outlined']),
  // most often is the title of the button, but can also contain most anything
  children: PropTypes.node.isRequired,
  // modify your button via classname like 'button--primary' and other modifiers found in the button.scss
  className: PropTypes.string,
  // the base color of the button
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'none']),
  // a ref to attach to the actual DOM <button> element
  innerRef: RefShape,
  iconLeft: PropTypes.shape({
    initial: PropTypes.node,
    prompt: PropTypes.node,
  }),
  iconRight: PropTypes.shape({
    initial: PropTypes.node,
    prompt: PropTypes.node,
  }),
  // if the button is busy then it shows a spinner indicator on it and disables the button
  isBusy: PropTypes.bool,
  // button isDisabled state
  isDisabled: PropTypes.bool,
  // the button id
  id: PropTypes.string,
  // event for when the button is clicked: (e) => { ... do something with e ...}
  onClick: PropTypes.func.isRequired,
  promptChildren: PropTypes.node.isRequired,
  size: PropTypes.oneOf([formElementSizesEnum.SMALL, formElementSizesEnum.MEDIUM, formElementSizesEnum.LARGE, formElementSizesEnum.LARGE1X]),
  // button type
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};
const defaultProps = {
  appearance: 'outlined',
  className: null,
  color: 'none',
  innerRef: null,
  isBusy: false,
  iconLeft: null,
  iconRight: null,
  isDisabled: false,
  id: null,
  size: formElementSizesEnum.MEDIUM,
  type: 'button',
};
/** @typedef {import('../../jsDocTypes').EventAction} EventAction */
/**
 * @param {Object} props
 * @param {ButtonAppearance} [props.appearance]
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {ComponentColors} [props.color]
 * @param {React.RefObject} [props.innerRef]
 * @param {IconConfirmationButton} [props.iconLeft]
 * @param {IconConfirmationButton} [props.iconRight]
 * @param {boolean} [props.isBusy]
 * @param {boolean} [props.isDisabled]
 * @param {string} [props.id]
 * @param {EventAction} props.onClick
 * @param {React.ReactNode} props.promptChildren
 * @param {FormElementSizes} [props.size]
 * @param {ButtonTypes} [props.type]
 * @returns {JSX.Element}
 */
function ConfirmationButton({
  appearance,
  children,
  className,
  color,
  innerRef,
  isBusy,
  iconLeft,
  iconRight,
  isDisabled,
  id,
  onClick,
  promptChildren,
  size,
  type,
  ...rest
}) {
  const [isClicked, setIsClicked] = useState(false);
  const timer = useRef(NaN);
  const { addAssertiveMessage } = useAriaMessaging();

  const clearTimer = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = NaN;
    }
  }, []);

  const resetButton = useCallback(() => {
    clearTimer();
    setIsClicked(false);
    addAssertiveMessage(children);
  }, [addAssertiveMessage, children, clearTimer]);

  const handleOnClick = useCallback((e) => {
    if (!isBusy) {
      if (isClicked) {
        onClick?.(e);
        resetButton();
      } else {
        clearTimer();
        setIsClicked(true);
        addAssertiveMessage(promptChildren);
        timer.current = setTimeout(resetButton, 3500);
      }
    }
  }, [addAssertiveMessage, clearTimer, isBusy, isClicked, onClick, promptChildren, resetButton]);

  const renderLeftIcon = useCallback(() => {
    let icon = null;
    if (iconLeft?.initial && !isClicked) {
      icon = <span className="button--icon button--icon-left">{iconLeft.initial}</span>;
    } if (iconLeft?.prompt && isClicked) {
      icon = <span className="button--icon button--icon-left">{iconLeft.prompt}</span>;
    }
    return icon;
  }, [iconLeft, isClicked]);

  const renderRightIcon = useCallback(() => {
    let icon = null;
    if (iconRight?.initial && !isClicked) {
      icon = <span className="button--icon button--icon-right">{iconRight.initial}</span>;
    } if (iconRight?.prompt && isClicked) {
      icon = <span className="button--icon button--icon-right">{iconRight.prompt}</span>;
    }
    return icon;
  }, [iconRight, isClicked]);

  return (
    <button
      className={joinClassNames(
        'button',
        className,
        `button--${appearance}`,
        // default color is none
        (color && color !== 'none') ? `button--${color}-color` : null,
        // default size is medium
        (size && size !== formElementSizesEnum.MEDIUM) ? `button--${size}` : null,
        isClicked ? 'button--confirm' : null
      )}
      disabled={isDisabled || isBusy}
      id={id}
      ref={innerRef}
      onClick={handleEvent(handleOnClick)}
      onKeyUp={handleKeyPress('Escape', resetButton)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
    >
      {renderLeftIcon()}
      {isClicked ? promptChildren : children}
      {
        isBusy
          ? (
            <Spinner
              className="ml-spacing-xs"
              size={size === formElementSizesEnum.LARGE1X ? 24 : 22}
              strokeWidth={size === formElementSizesEnum.LARGE1X ? 14 : 12}
            />
          )
          : null
      }
      {renderRightIcon()}
    </button>
  );
}

ConfirmationButton.propTypes = propTypes;
ConfirmationButton.defaultProps = defaultProps;

export default ConfirmationButton;
