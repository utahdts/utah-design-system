import identity from 'lodash/identity';
import castArray from 'lodash/castArray';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import valueAtPath from '../../util/state/valueAtPath';
import TableBodyDataRowContext from './TableBodyDataRowContext';
import TableContext from './TableContext';
import chainSorters from '../../util/chainSorters';
import toSafeString from '../../util/toSafeString';

const propTypes = {
  // the TableBodyDataRowTemplate and TableBodyDataCellTemplate elements making up the repeatable section
  children: PropTypes.node.isRequired,
  // field on the record that provides the unique id of the record; uses pathing ie 'contact.address.zipCode'
  recordIdField: PropTypes.string.isRequired,
  // the data records to repeat in the children templates
  records: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
const defaultProps = {};

function TableBodyData({ children, recordIdField, records }) {
  const [recordsForContexts, setRecordsForContexts] = useImmer(null);

  const {
    state: {
      currentSortingOrderIsDefault,
      filterValues,
      sortingRules,
      tableSortingFieldPath,
      tableSortingFieldPaths,
    },
  } = useContext(TableContext);

  useEffect(
    () => {
      let newRecordsForContext = records?.map((record, recordIndex) => ({ record, recordIndex, records }));

      // apply sorting if a column is selected
      if (tableSortingFieldPath || tableSortingFieldPaths) {
        const sorters = castArray(tableSortingFieldPaths || tableSortingFieldPath)
          .map((sortingValue) => sortingRules[sortingValue]?.sorter)
          .filter(identity);
        newRecordsForContext.sort(chainSorters(sorters, newRecordsForContext));
      }

      // filter records by filter fields
      newRecordsForContext = newRecordsForContext.filter((recordInfo) => (
        Object.entries(filterValues.value || {})
          // preformat filter values for optimization
          .map(([filterKey, filterValue]) => [filterKey, filterValue.split(' ').map((s) => s.toLowerCase())])
          .reduce(
            (isMatch, [filterFieldPath, filterValue]) => (
              isMatch
              && (
                // break apart the value by spaces to allow partial multi phrase filtering
                filterValue.every((filterValuePiece) => (
                  (toSafeString(valueAtPath({ object: recordInfo.record, path: filterFieldPath })))
                    // lowercase so that uppercase isn't an issue
                    ?.toLocaleLowerCase()
                    ?.includes(filterValuePiece)
                ))
              )
            ),
            true
          )
      ));

      // create forContexts once for the context provider so as to avoid recreating objects
      setRecordsForContexts(newRecordsForContext);
    },
    [currentSortingOrderIsDefault, filterValues, records, tableSortingFieldPath, tableSortingFieldPaths]
  );

  return (
    recordsForContexts?.length
      ? (
        // repeat the Row/Cell templates for each record
        recordsForContexts?.map((recordForContext) => (
          <TableBodyDataRowContext.Provider value={recordForContext} key={`table-body-data-${valueAtPath({ object: recordForContext.record, path: recordIdField })}`}>
            {children}
          </TableBodyDataRowContext.Provider>
        ))
      )
      : null
  );
}

TableBodyData.propTypes = propTypes;
TableBodyData.defaultProps = defaultProps;

export default TableBodyData;
