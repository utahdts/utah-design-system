import PropTypes from 'prop-types';
import React, { useContext, useMemo } from 'react';
import { useImmer } from 'use-immer';
import tableSortingRuleFieldType from '../../enums/tableSortingRuleFieldType';
import useRefAlways from '../../hooks/useRefAlways';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import valueAtPath from '../../util/state/valueAtPath';

export const TableContext = React.createContext();

export function useTableContext() {
  return useContext(TableContext);
}

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  innerRef: RefShape,
  id: PropTypes.string,
};
const defaultProps = {
  className: null,
  innerRef: null,
  id: null,
};

function sortByFieldType(sortingRule, fieldValueA, fieldValueB) {
  let result;
  switch (sortingRule.fieldType) {
    case tableSortingRuleFieldType.DATE:
      result = (fieldValueA?.getTime() || 0) - (fieldValueB?.getTime() || 0);
      break;

    case tableSortingRuleFieldType.NUMBER:
      result = Number(fieldValueA || 0) - Number(fieldValueB || 0);
      break;

    case tableSortingRuleFieldType.STRING:
      result = (fieldValueA || '').localeCompare(fieldValueB || '');
      break;

    default:
      throw new Error(`Unknown tableSortingRuleFieldType '${sortingRule.fieldType}'`);
  }
  return result;
}

/**
 * tableData has both allData and filteredData separated by component guid. This function
 * combines a particular data type in to a single array.
 * @param {{string: Object[]}} tableData
 * @param {'allData'|'filteredData'} whichField
 * @returns {Object[]}
 */
function combineData(tableData, whichField) {
  return (
    Object.values(tableData)
      .map((tableDatum) => tableDatum[whichField])
      .flat()
  );
}

function TableWrapper({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  const [state, setState] = useImmer({
    // when sorting, should the sort order for a rule be the "default"
    // ie a rule defaults to ascending so when currentSortingOrderIsDefault is true then sort that rule ascending
    currentSortingOrderIsDefault: true,
    // [recordFieldPath]: filterValue <== the current filtering values from <TableFilter... /> components
    filterValues: {
      // context level values from a <TableFilters /> component (<TableFilter... /> child components would override/chain these values)
      // defaultValue - object of [recordFieldPath]:value pairs for filtering inputs
      defaultValue: null,
      // onChange to call for any filter change
      onChange: null,
      // value - object of [recordFieldPath]:value pairs for filtering inputs
      value: {},
    },
    // these are the sorting rules to which a <TableHeadCell> connects assumes order is add order
    sortingRules: {},

    // data for this table separated out by component GUID
    //
    // A table may have multiple dynamic and/or static sections of data yet some things, like
    // a Table Select Filter that wants to show all the possible values, wants to know what all
    // the possible data is for the table. Each data section needs to be able to add/remove its
    // data since the data could morph at each render per component. This `tableData` then holds the data per
    // component (use useComponentGuid() hook to get a guid) so that the component can add/remove its data
    // without zapping other components' data but still give a full picture of all the data in the end.
    // Use the context's exposed `setBodyDataForComponentGuid` to manipulate table data for a component
    //
    // { [guid]: {allData, filteredData }} - allData = all the records, filteredData = just the records being shown
    tableData: {},

    // (func) when table sorting changes, this callback will be called: from <TableSortingRules>
    tableSortingOnChange: null,
    // (string | [string]) the current recordFieldPath name for the current header being sorted
    // array if <TableHeadCell> specifies sort order; otherwise, sort fields in registration order
    // set when a TableHeadCell is selected and sets its tableSortingFieldPaths as the tableSortingFieldPath
    // TableBodyData uses this value to sort its records
    tableSortingFieldPath: null,
    // a TableHeadCell can provide tableSortingFieldPaths to customize which sorters to use in which order
    tableSortingFieldPaths: null,
  });
  const stateRef = useRefAlways(state);

  const contextValue = useMemo(
    () => ({
      // for analytic usage, rendering is generally done at the component level and not at the context level
      // because each data section handles it differently. This allData is useful for filtering and other
      // global table tooling that pokes through the data.
      allData: combineData(stateRef.current.tableData, 'allData'),
      // ATTOW: filteredData may/may not work with a TableRow and TableFilters?
      filteredData: combineData(stateRef.current.tableData, 'filteredData'),

      // register a new rule for sorting, generally from a <TableSortingRule>
      registerSortingRule: (sortingRule) => setState((draftState) => {
        draftState.sortingRules[sortingRule.recordFieldPath] = {
          ...sortingRule,
          sorter: (
            (recordA, recordB, records) => {
              const fieldValueA = valueAtPath({ object: recordA.record, path: sortingRule.recordFieldPath });
              const fieldValueB = valueAtPath({ object: recordB.record, path: sortingRule.recordFieldPath });

              let result;
              if (sortingRule.customSort) {
                // custom sorting
                result = sortingRule.customSort({
                  fieldValueA,
                  fieldValueB,
                  recordA: recordA.record,
                  recordAIndex: recordA.recordIndex,
                  recordB: recordB.record,
                  recordBIndex: recordB.recordIndex,
                  records,
                });
              } else {
                // sort by field type
                result = sortByFieldType(sortingRule, fieldValueA, fieldValueB);
              }

              // return sort result modified for sort order
              return result * (stateRef.current.currentSortingOrderIsDefault ? 1 : -1) * (sortingRule.defaultIsAscending ? 1 : -1);
            }
          ),
        };
      }),
      // unregister a rule for sorting, generally when a <TableSortingRule> unmounts
      unregisterSortingRule: (recordFieldPath) => setState((draftState) => { delete draftState.sortingRules[recordFieldPath]; }),

      /**
       * data recording per table body section so as to form a full picture of the currently exposed data
       * @param {string} guid the guid tied to this specific component instance (use useComponentGuid())
       * @param {any[] | null} data the data for this component (or null on unmount)
       * @param {any[] | null} [filteredData] the filtered data for this component (optional, defaults to [])
       */
      setBodyDataForComponentGuid: (guid, allData, filteredData) => {
        setState((draftState) => {
          draftState.tableData[guid] = { allData, filteredData: filteredData || [] };
        });
      },

      setState,
      state,
    }),
    [state]
  );
  return (
    <TableContext.Provider value={contextValue}>
      <div className={joinClassNames('some-table-wrapper-className', className)} id={id} ref={innerRef} {...rest}>
        {children}
      </div>
    </TableContext.Provider>
  );
}

TableWrapper.propTypes = propTypes;
TableWrapper.defaultProps = defaultProps;

export default TableWrapper;
