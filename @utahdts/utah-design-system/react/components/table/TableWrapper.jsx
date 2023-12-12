// @ts-check
import React, { useEffect, useMemo, useRef } from 'react';
import { useImmer } from 'use-immer';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { tableSortingRuleFieldType } from '../../enums/tableSortingRuleFieldType';
import useRefAlways from '../../hooks/useRefAlways';
import joinClassNames from '../../util/joinClassNames';
import valueAtPath from '../../util/state/valueAtPath';
import { TableContext } from './util/TableContext';

/**
 * @template TableSortingRuleT
 * @typedef {import('../../jsDocTypes').TableSortingRule<TableSortingRuleT>} TableSortingRule
*/
/**
 * @template TableContextStateT
 * @typedef {import('../../jsDocTypes').TableContextState<TableContextStateT>} TableContextState
 */

/**
 * @template SortByFieldTypeDataT
 * @param {TableSortingRule<SortByFieldTypeDataT>} sortingRule
 * @param {any} fieldValueA
 * @param {any} fieldValueB
 * @returns {number}
 */
function sortByFieldType(sortingRule, fieldValueA, fieldValueB) {
  /** @type {number} */
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
 * @template TableDataT
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {React.RefObject} [props.innerRef]
 * @param {string} [props.id]
 * @returns {JSX.Element}
 */
export function TableWrapper({
  children,
  className,
  innerRef,
  id,
  ...rest
}) {
  /** @type {[TableContextState<TableDataT>, import('use-immer').Updater<import('../../../@types/jsDocTypes.d').TableContextState<TableDataT>>]} */
  const [state, setState] = useImmer(
    /** @returns {TableContextState<TableDataT>} */
    () => ({
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
        // value - object of [recordFieldPath]:{value, exactMatch, otherFilterSpecificSettings} for filtering inputs
        value: {},
      },
      // these are the sorting rules to which a <TableHeadCell> connects assumes order is add order
      sortingRules: {},

      tableData: { allData: [], filteredData: [] },

      // (func) when table sorting changes, this callback will be called: from <TableSortingRules>
      tableSortingOnChange: null,
      // (string | [string]) the current recordFieldPath name for the current header being sorted
      // array if <TableHeadCell> specifies sort order; otherwise, sort fields in registration order
      // set when a TableHeadCell is selected and sets its tableSortingFieldPaths as the tableSortingFieldPath
      // TableBodyData uses this value to sort its records
      tableSortingFieldPath: null,
      // a TableHeadCell can provide tableSortingFieldPaths to customize which sorters to use in which order
      tableSortingFieldPaths: null,
    })
  );
  const stateRef = useRefAlways(state);
  const tableSortingFieldPathOldRef = useRef(state.tableSortingFieldPath);
  const tableSortingFieldPathsOldRef = useRef(state.tableSortingFieldPaths);
  const isAscendingOldRef = useRef(state.currentSortingOrderIsDefault);
  const { addPoliteMessage } = useAriaMessaging();

  useEffect(
    () => {
      if (
        // do not send notification when first loading the table when the currentPath is null
        tableSortingFieldPathOldRef.current
        && state.tableSortingFieldPath
        // subsequent changes to sorting probably should have been triggered by the user and therefore needs announced
        && (
          tableSortingFieldPathOldRef.current !== state.tableSortingFieldPath
          || tableSortingFieldPathsOldRef.current !== state.tableSortingFieldPaths
          || state.currentSortingOrderIsDefault !== isAscendingOldRef.current
        )
      ) {
        const sortingFields = state.tableSortingFieldPaths || [state.tableSortingFieldPath];
        const sortingRules = sortingFields.map((sortingField) => state.sortingRules[sortingField]);
        const sortingRulesMessages = sortingRules.map((sortingRule) => {
          const isAscending = (!!sortingRule?.defaultIsAscending === !!state.currentSortingOrderIsDefault);
          return `${sortingRule.a11yLabel} ${isAscending ? 'ascending' : 'descending'}`;
        });
        addPoliteMessage(`Sorting changed to ${sortingRulesMessages.join(', ')}`);
        state.tableSortingOnChange?.({ recordFieldPath: state.tableSortingFieldPath });
      }
      isAscendingOldRef.current = state.currentSortingOrderIsDefault;
      tableSortingFieldPathOldRef.current = state.tableSortingFieldPath;
      tableSortingFieldPathsOldRef.current = state.tableSortingFieldPaths;
    },
    [addPoliteMessage, state]
  );

  const contextValue = useMemo(
    () => ({
      // for analytic usage, rendering is generally done at the component level and not at the context level
      // because each data section handles it differently. This allData is useful for filtering and other
      // global table tooling that pokes through the data.
      allData: stateRef.current.tableData.allData,
      filteredData: stateRef.current.tableData.filteredData,

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
       * @param {TableDataT[] | null} allData the data for this component (or null on unmount)
       * @param {TableDataT[] | null} [filteredData] the filtered data for this component (optional, defaults to [])
       */
      setBodyData: (allData, filteredData) => {
        setState((draftState) => {
          draftState.tableData = {
            // @ts-ignore
            allData: allData ?? [],
            // @ts-ignore
            filteredData: filteredData || [],
          };
        });
      },

      setState,
      state,
    }),
    [setState, state, stateRef]
  );

  return (
    <TableContext.Provider value={contextValue}>
      <div className={joinClassNames('table__wrapper', className)} id={id} ref={innerRef} {...rest}>
        {children}
      </div>
    </TableContext.Provider>
  );
}
