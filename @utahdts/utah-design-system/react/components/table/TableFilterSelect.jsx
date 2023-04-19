import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import Select from '../forms/Select';
import { TableContext } from './TableWrapper';
import TableFilterSelectAllOptions from './TableFilterSelectAllOptions';
import useCurrentValuesFromStateContext from './useCurrentValuesFromStateContext';

const propTypes = {
  // if no children (TableFilterSelect) are provided then it will automagically use TableFilterSelectAllOptions
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  innerRef: null,
  id: null,
  onChange: null,
  value: null,
};

function TableFilterSelect({
  children,
  className,
  defaultValue,
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
  return (
    <th className={joinClassNames('some-TableFilterSelect-classname', className)} id={id} ref={innerRef} {...rest}>
      <Select
        id={`table-filter-select-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        value={currentValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {
          children || (
            <TableFilterSelectAllOptions
              className={className}
              idBase={id}
              recordFieldPath={recordFieldPath}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            />
          )
        }
      </Select>
    </th>
  );
}

TableFilterSelect.propTypes = propTypes;
TableFilterSelect.defaultProps = defaultProps;

export default TableFilterSelect;
