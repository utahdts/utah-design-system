import { castArray, identity, isEqual } from 'lodash';
import { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { useAriaMessaging } from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { chainSorters } from '../../util/chainSorters';
import { notNullMap } from '../../util/notNullMap';
import { valueAtPath } from '../../util/state/valueAtPath';
import { trailingS } from '../../util/trailingS';
import { TableBodyDataRowContext } from './TableBodyDataRowContext';
import { useTableContext } from './hooks/useTableContext';
import { convertRecordsToFilterValue } from './util/convertRecordsToFilterValue';
import { createTableFilterFunctions } from './util/createTableFilterFunctions';
import { filterTableRecords } from './util/filterTableRecords';

/**
 * @template RecordT
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} props.recordIdField
 * @param {(RecordT & object)[]} props.records
 * @returns {import('react').JSX.Element[] | null}
 */
export function TableBodyData({
  children,
  recordIdField,
  records,
}) {
  const timer = useRef(NaN);
  const { addPoliteMessage } = useAriaMessaging();
  const [recordsForContexts, setRecordsForContexts] = useImmer(/** @type {(RecordT & object)[] | null} */(null));
  const {
    state: {
      currentSortingOrderIsDefault,
      filterValues,
      pagination,
      sortingRules,
      tableSortingFieldPath,
      tableSortingFieldPaths,
    },
    setBodyData,
  } = useTableContext();
  const previousFilterValues = useRef(filterValues.value);
  const [paginatedRecords, setPaginatedRecords] = useImmer(/** @type {{record: any, recordIndex: number, records: any}[]} */([]));

  useEffect(
    () => {
      let newRecordsForContext = records?.map((record, recordIndex) => ({ record, recordIndex, records }));

      // apply sorting if a column is selected
      if (tableSortingFieldPath || tableSortingFieldPaths) {
        const sorters = castArray(tableSortingFieldPaths || tableSortingFieldPath)
          .map((sortingValue) => sortingRules[sortingValue ?? '']?.sorter)
          .filter(identity)
          .map(notNullMap);
        newRecordsForContext.sort(chainSorters(sorters, newRecordsForContext));
      }

      const filterRules = createTableFilterFunctions(filterValues.value);

      // convert record values to test to a "safeString" so that it can be compared with the filter rule
      const recordsToFilter = convertRecordsToFilterValue(newRecordsForContext, filterValues.value);

      // try the filter rules to see if each record should remain visible
      // @ts-ignore
      newRecordsForContext = filterTableRecords(recordsToFilter, filterRules);

      let paginationBeginIndex = (
        pagination
          ? pagination.currentPageIndex * pagination.itemsPerPage
          : 0
      );
      if (paginationBeginIndex >= newRecordsForContext.length) {
        paginationBeginIndex = 0;
      }
      const paginationEndIndex = (
        pagination
          ? paginationBeginIndex + pagination.itemsPerPage
          : newRecordsForContext.length
      );

      setPaginatedRecords(newRecordsForContext.slice(paginationBeginIndex, paginationEndIndex));

      // create forContexts once for the context provider to avoid recreating objects
      // @ts-ignore
      setRecordsForContexts(newRecordsForContext);

      // register the current data with the TableContext for filtering and other table global data users
      setBodyData(records, newRecordsForContext);

      // only trigger the timer when the filters have changed
      if (!isEqual(filterValues.value, previousFilterValues.current)) {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = NaN;
        }
        timer.current = window.setTimeout(() => {
          addPoliteMessage(`${newRecordsForContext.length} record${trailingS(newRecordsForContext.length)} shown after filtering`);
        }, 1500);
        previousFilterValues.current = filterValues.value;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      currentSortingOrderIsDefault,
      filterValues,
      pagination,
      records,
      sortingRules,
      tableSortingFieldPath,
      tableSortingFieldPaths,
    ]
  );

  return (
    recordsForContexts?.length
      ? (
        // repeat the Row/Cell templates for each record
        paginatedRecords?.map((recordForContext) => (
          <TableBodyDataRowContext.Provider value={recordForContext} key={`table-body-data-${valueAtPath({ object: recordForContext.record, path: recordIdField })}`}>
            {children}
          </TableBodyDataRowContext.Provider>
        ))
      )
      : null
  );
}
