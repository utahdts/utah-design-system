// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import Select from '../forms/Select';
import useTableFilterRegistration from './hooks/useTableFilterRegistration';
import useCurrentValuesFromStateContext from './useCurrentValuesFromStateContext';

const propTypes = {
  // if no children (TableFilterSelect) are provided then it will automagically use TableFilterSelectAllOptions
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  exactMatch: PropTypes.bool,
  innerRef: RefShape,
  id: PropTypes.string,
  onChange: PropTypes.func,
  recordFieldPath: PropTypes.string.isRequired,
  value: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: null,
  defaultValue: null,
  exactMatch: false,
  innerRef: null,
  id: null,
  onChange: null,
  value: null,
};

/**
 * @template TableDataT
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | number | null} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string | null} [props.id]
 * @param {((e) => TableDataT) | null} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {string | number | null} [props.value]
 * @returns {JSX.Element}
 */
function TableFilterSelect({
  children = null,
  className = null,
  defaultValue = null,
  exactMatch = false,
  innerRef = null,
  id = null,
  onChange = null,
  recordFieldPath,
  value = null,
  ...rest
}) {
  const {
    currentOnChange,
    currentValue,
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    defaultOnChange: (e) => e.target.value,
    defaultValue,
    // @ts-ignore
    onChange,
    value,
  });

  useTableFilterRegistration(recordFieldPath, exactMatch);

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-select', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      <Select
        id={`table-filter-select-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </Select>
    </th>
  );
}

TableFilterSelect.propTypes = propTypes;
TableFilterSelect.defaultProps = defaultProps;

export default TableFilterSelect;
