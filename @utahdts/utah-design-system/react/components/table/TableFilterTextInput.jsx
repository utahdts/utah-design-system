// @ts-check
import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TextInput from '../forms/TextInput';
import useTableFilterRegistration from './hooks/useTableFilterRegistration';
import useCurrentValuesFromStateContext from './useCurrentValuesFromStateContext';

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  exactMatch: PropTypes.bool,
  innerRef: RefShape,
  id: PropTypes.string,
  onChange: PropTypes.func,
  recordFieldPath: PropTypes.string.isRequired,
  value: PropTypes.string,
};
const defaultProps = {
  className: null,
  defaultValue: null,
  exactMatch: false,
  innerRef: null,
  id: null,
  onChange: null,
  value: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {string | null} [props.defaultValue]
 * @param {boolean | null} [props.exactMatch]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string | null} [props.id]
 * @param {((e: Event) => void) | null} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {string | null} [props.value]
 * @returns {JSX.Element}
 */
function TableFilterTextInput({
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
    setValue,
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    defaultOnChange: (e) => e.target.value,
    defaultValue,
    onChange,
    value,
  });

  useTableFilterRegistration(recordFieldPath, !!exactMatch);

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-text-input', className)} id={id ?? undefined} ref={innerRef}>
      <TextInput
        id={`table-filter-text-input-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        onClear={() => setValue('')}
        value={currentValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}

TableFilterTextInput.propTypes = propTypes;
TableFilterTextInput.defaultProps = defaultProps;

export default TableFilterTextInput;
