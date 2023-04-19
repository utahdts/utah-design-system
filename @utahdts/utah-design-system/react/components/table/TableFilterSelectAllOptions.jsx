import identity from 'lodash/identity';
import uniq from 'lodash/uniq';
import PropTypes from 'prop-types';
import chainSorters from '../../util/chainSorters';
import SelectOption from '../forms/SelectOption';
import { useTableContext } from './TableWrapper';

const propTypes = {
  className: PropTypes.string,
  idBase: PropTypes.string,
  recordFieldPath: PropTypes.string.isRequired,
};
const defaultProps = {
  className: null,
  idBase: null,
};

function TableFilterSelectAllOptions({
  className,
  idBase,
  recordFieldPath,
  ...rest
}) {
  const { allData } = useTableContext();

  // get all possible values from each data's `recordFieldPath`
  const dataOptions = (
    uniq(
      allData.map((datum) => datum[recordFieldPath])
        .filter(identity)
    )
      .sort(chainSorters([
        (a, b) => (a < b ? -1 : 0),
        (a, b) => (a > b ? 1 : 0),
      ]))
  );

  return (
    <>
      <SelectOption
        className={className}
        id={idBase ? `${idBase}-empty` : null}
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
            id={idBase ? `${idBase}-${dataOption}` : null}
            key={`${idBase || 'table-filter-select-all-options'}-${dataOption}`}
            label={dataOption}
            value={dataOption}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
        ))
      }
    </>
  );
}

TableFilterSelectAllOptions.propTypes = propTypes;
TableFilterSelectAllOptions.defaultProps = defaultProps;

export default TableFilterSelectAllOptions;
