import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TextInput from '../forms/TextInput';
import TableContext from './util/TableContext';
import useCurrentValuesFromStateContext from './useCurrentValuesFromStateContext';
import useTableFilterRegistration from './hooks/useTableFilterRegistration';

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

function TableFilterTextInput({
  className,
  defaultValue,
  exactMatch,
  innerRef,
  id,
  onChange,
  recordFieldPath,
  value,
  ...rest
}) {
  const {
    currentOnChange,
    currentValue,
    setValue,
  } = useCurrentValuesFromStateContext({
    context: TableContext,
    contextStatePath: recordFieldPath,
    defaultOnChange: (e) => e.target.value,
    defaultValue,
    onChange,
    value,
  });

  useTableFilterRegistration(recordFieldPath, exactMatch);

  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-text-input', className)} id={id} ref={innerRef}>
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
