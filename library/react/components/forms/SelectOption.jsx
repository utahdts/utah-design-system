import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';

const propTypes = {
  className: PropTypes.string,
  innerRef: RefShape,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
};
const defaultProps = {
  className: null,
  innerRef: null,
  isDisabled: false,
};

function SelectOption({
  className,
  innerRef,
  isDisabled,
  label,
  value,
  ...rest
}) {
  return (
    <option
      className={className}
      disabled={isDisabled}
      ref={innerRef}
      value={value}
      {...rest}
    >
      {label}
    </option>
  );
}

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;

export default SelectOption;
