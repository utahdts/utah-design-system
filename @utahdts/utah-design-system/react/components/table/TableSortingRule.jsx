import { useContext, useEffect } from 'react';
import { TableContext } from './util/TableContext';

/**
 * @template DataT
 * @typedef {import('@utahdts/utah-design-system').TableSortingFunc<DataT>} TableSortingFunc
*/
/** @typedef {import('@utahdts/utah-design-system').TableSortingRuleFieldType} TableSortingRuleFieldType */

/**
 * @template TableDataT
 * @param {Object} props
 * @param {string} props.a11yLabel the A11y notification to be read when this sort rule is applied
 * @param {TableSortingFunc<TableDataT>} [props.customSort] should be a function that does sorting
 * @param {boolean} [props.defaultIsAscending] should the field sort ascending by default
 * @param {TableSortingRuleFieldType} [props.fieldType] what type of data is in this field so it knows how to sort it
 * @param {string} [props.recordFieldPath]
 *   recordFieldPath should match with a recordFieldPath for a <TableHeadCell> in the table
 *   OR as one of the tableSortingFieldPaths in a<TableHeadCell>
 *   if your records need a calculated field, it is suggested to calculate the value and store it on the record and set this path to the
 *   calculated value's path. This way the value does not have to be recalculated on every render.
 * @returns {null}
 */
export function TableSortingRule({
  a11yLabel,
  customSort,
  defaultIsAscending = true,
  fieldType = 'string',
  recordFieldPath,
}) {
  const { registerSortingRule, unregisterSortingRule } = useContext(TableContext) || {};

  // register this sorting rule with the context
  useEffect(
    () => {
      if (registerSortingRule) {
        registerSortingRule({
          a11yLabel,
          customSort: customSort ?? null,
          defaultIsAscending,
          fieldType,
          recordFieldPath: recordFieldPath ?? '',
        });
      }
      return () => unregisterSortingRule?.(recordFieldPath ?? '');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [!registerSortingRule, !unregisterSortingRule]
  );

  // this component does not render anything
  return null;
}
