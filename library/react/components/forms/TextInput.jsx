import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
};
const defaultProps = {
};

function Button({
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
      disabled={isDisabled}
      id={id}
      onClick={handleEvent((e) => onClick(e))}
      ref={innerRef}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
      {
        isBusy ? 'TODO:SPINNER!' : null
      }
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
