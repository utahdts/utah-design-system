import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useImmer } from 'use-immer';
import tableSortingRuleFieldType from '../../enums/tableSortingRuleFieldType';
import useRefAlways from '../../hooks/useRefAlways';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import valueAtPath from '../../util/state/valueAtPath';
import TableContext from './TableContext';

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
              }

              // return sort result modified for sort order
              return result * (stateRef.current.currentSortingOrderIsDefault ? 1 : -1) * (sortingRule.defaultIsAscending ? 1 : -1);
            }
          ),
        };
      }),
      // unregister a rule for sorting, generally when a <TableSortingRule> unmounts
      unregisterSortingRule: (recordFieldPath) => setState((draftState) => { delete draftState.sortingRules[recordFieldPath]; }),

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
