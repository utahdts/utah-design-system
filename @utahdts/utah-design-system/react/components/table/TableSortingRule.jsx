// @ts-check
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import tableSortingRuleFieldType from '../../enums/tableSortingRuleFieldType';
import TableContext from './util/TableContext';

/**
 * @template DataT
 * @typedef {import('../../jsDocTypes').TableSortingFunc<DataT>} TableSortingFunc
 */

const propTypes = {
  // the A11y notification to be read when this sort rule is applied
  a11yLabel: PropTypes.string.isRequired,
  // should be a function that does sorting
  // ({ fieldValueA, fieldValueB, recordA, recordB, records }) => (a < b ? -1 : a > b ? 1 : 0)
  customSort: PropTypes.func,
  // should the field sort ascending by default
  defaultIsAscending: PropTypes.bool,
  // what type of data is in this field so it knows how to sort it
  fieldType: PropTypes.oneOf(Object.values(tableSortingRuleFieldType)),
  // recordFieldPath should match with a recordFieldPath for a <TableHeadCell> in the table
  // OR as one of the tableSortingFieldPaths in a<TableHeadCell>
  // if your records need a calculated field, it is suggested to calculate the value and store it on the record and set this path to the
  // calculated value's path. This way the value does not have to be recalculated on every render.
  recordFieldPath: PropTypes.string.isRequired,
};
const defaultProps = {
  customSort: null,
  defaultIsAscending: true,
  fieldType: 'string',
};

/**
 * @template TableDataT
 * @param {Object} props
 * @param {string} props.a11yLabel
 * @param {TableSortingFunc<TableDataT> | null} props.customSort
 * @param {Object} props.defaultIsAscending
 * @param {Object} props.fieldType
 * @param {Object} props.recordFieldPath
 * @returns {null}
 */
function TableSortingRule({
  a11yLabel,
  customSort = null,
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
          customSort,
          defaultIsAscending,
          fieldType,
          recordFieldPath,
        });
      }
      return () => unregisterSortingRule?.(recordFieldPath);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [!registerSortingRule, !unregisterSortingRule]
  );

  // this component does not render anything
  return null;
}

TableSortingRule.propTypes = propTypes;
TableSortingRule.defaultProps = defaultProps;

export default TableSortingRule;
