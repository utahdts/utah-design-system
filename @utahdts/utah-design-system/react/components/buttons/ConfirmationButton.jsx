import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './Button';
import RefShape from '../../propTypesShapes/RefShape';
import formElementSizesEnum from '../../enums/formElementSizesEnum';

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
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
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
}) {
  const [isClicked, setIsClicked] = useState(false);
  const buttonClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };
  return (
    <Button
      appearance={appearance}
      className={className}
      color={color}
      innerRef={innerRef}
      isBusy={isBusy}
      iconLeft={iconLeft}
      iconRight={iconRight}
      isDisabled={isDisabled}
      id={id}
      onClick={buttonClick}
      size={size}
      type={type}
    >
      {isClicked ? promptChildren : children}
    </Button>
  );
}

ConfirmationButton.propTypes = propTypes;
ConfirmationButton.defaultProps = defaultProps;

export default ConfirmationButton;
