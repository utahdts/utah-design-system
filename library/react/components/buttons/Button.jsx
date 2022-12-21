import PropTypes from 'prop-types';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import RefShape from '../../propTypesShapes/RefShape';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';
import Spinner from '../widgetsIndicators/Spinner';

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

function Button({
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
  size,
  type,
  ...rest
}) {
  return (
    <button
      className={joinClassNames(
        'button',
        size === formElementSizesEnum.MEDIUM ? null : `button--${size}`,
        className,
        // outlined is the 'default' appearance
        (appearance && appearance !== 'outlined') ? `button--${appearance}` : null,
        (color && color !== 'none') ? `button--${color}-color` : null
      )}
      disabled={isDisabled || isBusy}
      id={id}
      onClick={handleEvent((e) => onClick(e))}
      ref={innerRef}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
    >
      {
        iconLeft
          ? <span className="button--icon button--icon-left">{iconLeft}</span>
          : null
      }
      {children}
      {
        iconRight
          ? <span className="button--icon button--icon-right">{iconRight}</span>
          : null
      }
      {
        // How to check if no children? How to center Spinner if empty?
        isBusy
          ? <Spinner value={0.25} size={size === formElementSizesEnum.LARGE1X ? 24 : 22} strokeWidth={size === formElementSizesEnum.LARGE1X ? 14 : 12} className="ml-spacing-xs" /> : null
      }
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
