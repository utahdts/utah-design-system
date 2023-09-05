import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import Select from '../forms/Select';
import TableContext from './util/TableContext';
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

function TableFilterSelect({
  children,
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
    <th className={joinClassNames('table-header__cell table-header__cell--filter-select', className)} id={id} ref={innerRef} {...rest}>
      <Select
        id={`table-filter-select-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        value={currentValue}
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
