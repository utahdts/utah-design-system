import identity from 'lodash/identity';
import uniq from 'lodash/uniq';
import PropTypes from 'prop-types';
import useStateEffect from '../../hooks/useStateEffect';
import RefShape from '../../propTypesShapes/RefShape';
import chainSorters from '../../util/chainSorters';
import joinClassNames from '../../util/joinClassNames';
import Select from '../forms/Select';
import SelectOption from '../forms/SelectOption';
import useTableContext from './hooks/useTableContext';
import TableContext from './util/TableContext';
import useTableFilterRegistration from './hooks/useTableFilterRegistration';
import useCurrentValuesFromStateContext from './useCurrentValuesFromStateContext';

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  exactMatch: PropTypes.bool,
  id: PropTypes.string,
  innerRef: RefShape,
  onChange: PropTypes.func,
  recordFieldPath: PropTypes.string.isRequired,
  value: PropTypes.string,
};
const defaultProps = {
  className: null,
  defaultValue: null,
  exactMatch: true,
  id: null,
  innerRef: null,
  onChange: null,
  value: null,
};

function TableFilterSelectAllOptions({
  className,
  defaultValue,
  exactMatch,
  id,
  innerRef,
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
  const { allData } = useTableContext();
  const [dataOptions] = useStateEffect({
    calculateValueFn: () => (
      // get all possible values from each datum's `recordFieldPath`
      uniq(
        allData.map((datum) => datum[recordFieldPath])
          .filter(identity)
      )
        .sort(chainSorters([
          (a, b) => (a < b ? -1 : 0),
          (a, b) => (a > b ? 1 : 0),
        ]))
    ),
    dependencyList: [allData],
  });

  // keep the default settings object from being recreated every render so that it does not trigger filter registration
  useTableFilterRegistration(recordFieldPath, exactMatch);

  return (
    <th className={joinClassNames('some-TableFilterSelectAllOptions-classname', className)} id={id} ref={innerRef} {...rest}>
      <Select
        id={`table-filter-select-${recordFieldPath}`}
        label={`filter ${recordFieldPath}`}
        onChange={currentOnChange}
        value={currentValue}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        <SelectOption
          className={className}
          id={id ? `${id}-empty` : null}
          label=""
          value=""
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
        {
          // create select options for each possible data value
          dataOptions.map((dataOption) => (
            <SelectOption
              className={className}
              id={id ? `${id}-${dataOption}` : null}
              key={`${id || 'table-filter-select-all-options'}-${recordFieldPath}-${dataOption}`}
              label={dataOption}
              value={dataOption}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            />
          ))
        }
      </Select>
    </th>
  );
}

TableFilterSelectAllOptions.propTypes = propTypes;
TableFilterSelectAllOptions.defaultProps = defaultProps;

export default TableFilterSelectAllOptions;
