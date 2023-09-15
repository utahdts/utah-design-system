// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
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

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.label
 * @param {string | number} props.value
 * @returns {JSX.Element}
 */
function TableFilterSelectOption({
  className = null,
  innerRef = null,
  label,
  value,
  ...rest
}) {
  return (
    <SelectOption
      className={className ?? undefined}
      innerRef={innerRef ?? undefined}
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
