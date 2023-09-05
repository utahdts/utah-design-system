import PropTypes from 'prop-types';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import TextInput from '../forms/TextInput';
import TableContext from './util/TableContext';
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

function TableFilterDate({
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
    <th className={joinClassNames('table-header__cell table-header__cell--filter-date', className)} id={id} ref={innerRef}>
      <TextInput
        id={`table-filter-date-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        value={currentValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </th>
  );
}

TableFilterDate.propTypes = propTypes;
TableFilterDate.defaultProps = defaultProps;

export default TableFilterDate;
