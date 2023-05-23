import castArray from 'lodash/castArray';
import identity from 'lodash/identity';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import useComponentGuid from '../../hooks/useComponentGuid';
import chainSorters from '../../util/chainSorters';
import valueAtPath from '../../util/state/valueAtPath';
import TableBodyDataRowContext from './TableBodyDataRowContext';
import useTableContext from './hooks/useTableContext';
import convertRecordsToFilterValue from './util/convertRecordsToFilterValue';
import createTableFilterFunctions from './util/createTableFilterFunctions';
import filterTableRecords from './util/filterTableRecords';

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
  const guid = useComponentGuid();

  const {
    state: {
      currentSortingOrderIsDefault,
      filterValues,
      sortingRules,
      tableSortingFieldPath,
      tableSortingFieldPaths,
    },
    setBodyDataForComponentGuid,
  } = useTableContext();

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

      const filterRules = createTableFilterFunctions(filterValues.value);

      // convert record values to test to a "safeString" so that it can be compared with the filter rule
      const recordsToFilter = convertRecordsToFilterValue(newRecordsForContext, filterValues.value);

      // try the filter rules to see if each record should remain visible
      newRecordsForContext = filterTableRecords(recordsToFilter, filterRules);

      // create forContexts once for the context provider so as to avoid recreating objects
      setRecordsForContexts(newRecordsForContext);

      // register the current data with the TableContext for filtering and other table global data users
      setBodyDataForComponentGuid(guid, records, newRecordsForContext);
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
