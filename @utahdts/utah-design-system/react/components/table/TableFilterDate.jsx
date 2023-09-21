// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TextInput from '../forms/TextInput';
import useCurrentValuesFromStateContext from './useCurrentValuesFromStateContext';

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
  onChange: PropTypes.func,
  recordFieldPath: PropTypes.string.isRequired,
  value: PropTypes.string,
};
const defaultProps = {
  className: null,
  defaultValue: null,
  innerRef: null,
  id: null,
  onChange: null,
  value: null,
};

/**
 * @template TableDataT
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {TableDataT | null} [props.defaultValue]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string | null} [props.id]
 * @param {((param: { recordFieldPath: string, value: TableDataT }) => TableDataT) | null} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {TableDataT | null} [props.value]
 * @returns {JSX.Element}
 */
function TableFilterDate({
  className = null,
  defaultValue = null,
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
    // @ts-ignore
    defaultOnChange: (e) => e.target?.value,
    defaultValue,
    onChange,
    value,
  });
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-date', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`table-filter-date-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}

TableFilterDate.propTypes = propTypes;
TableFilterDate.defaultProps = defaultProps;

export default TableFilterDate;
