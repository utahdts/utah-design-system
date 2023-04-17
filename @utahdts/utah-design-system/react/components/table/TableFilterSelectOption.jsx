import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import SelectOption from '../forms/SelectOption';

const propTypes = {
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
};
const defaultProps = {
  className: null,
  innerRef: null,
  id: null,
};

function TableFilterSelectOption({
  className,
  innerRef,
  id,
  label,
  value,
  ...rest
}) {
  return (
    <SelectOption
      className={className}
      innerRef={innerRef}
      id={id}
      label={label}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}

TableFilterSelectOption.propTypes = propTypes;
TableFilterSelectOption.defaultProps = defaultProps;

export default TableFilterSelectOption;
