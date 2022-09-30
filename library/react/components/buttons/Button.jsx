import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';
import Spinner from '../widgetsIndicators/Spinner';

const propTypes = {
  appearance: PropTypes.oneOf(['solid', 'outlined']),
  // if the button is busy then it shows a spinner indicator on it and disables the button
  isBusy: PropTypes.bool,
  // most often is the title of the button, but can also contain most anything
  children: PropTypes.node.isRequired,
  // modify your button via classname like 'button--primary' and other modifiers found in the button.scss
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'accent', 'none']),
  // a ref to attach to the actual DOM <button> element
  innerRef: RefShape,
  // button isDisabled state
  isDisabled: PropTypes.bool,
  // the button id
  id: PropTypes.string,
  // event for when the button is clicked: (e) => { ... do something with e ...}
  onClick: PropTypes.func,
  // button type
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};
const defaultProps = {
  appearance: 'outlined',
  className: null,
  color: 'none',
  innerRef: null,
  isBusy: false,
  isDisabled: false,
  id: null,
  onClick: null,
  type: 'button',
};

function Button({
  appearance,
  children,
  className,
  color,
  innerRef,
  isBusy,
  isDisabled,
  id,
  onClick,
  type,
}) {
  return (
    <button
      className={joinClassNames(
        'button',
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
    >
      {children}
      {
        // One-size-fits-all?
        isBusy ? <Spinner value={0.25} size={22} strokeWidth={12} className="ml-spacing-xs" /> : null
      }
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
