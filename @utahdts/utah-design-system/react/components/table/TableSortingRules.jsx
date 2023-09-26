// @ts-check
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import TableContext from './util/TableContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  defaultValue: PropTypes.string,
  // ({ recordFieldPath }) => { ... do something ... }
  onChange: PropTypes.func,
  value: PropTypes.string,
};
const defaultProps = {
  defaultValue: null,
  onChange: null,
  value: undefined,
};

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string | null} [props.defaultValue]
 * @param {((e) => void) | null} [props.onChange]
 * @param {string | null} [props.value]
 * @returns {JSX.Element}
 */
function TableSortingRules({
  children,
  defaultValue = null,
  onChange = null,
  value = null,
}) {
  const { setState, state } = useContext(TableContext) || {};
  useEffect(
    () => {
      if (setState && state) {
        if ((onChange && state?.tableSortingOnChange) || (defaultValue && state?.tableSortingFieldPath)) {
          // eslint-disable-next-line no-console
          console.error('A TableWrapper should only have one TableSortingRules section.');
        } else {
          setState((draftState) => {
            draftState.tableSortingFieldPath = defaultValue ?? null;
            draftState.tableSortingOnChange = onChange ?? null;
          });
        }
      }

      return () => {
        // unset the sortingRules when this component gets unmounted
        if (setState) {
          setState((draftState) => {
            draftState.tableSortingFieldPath = null;
            draftState.tableSortingOnChange = null;
          });
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [!setState, !state]
  );

  // controlled by parent, so set value to current value
  useEffect(
    () => {
      if (value !== undefined && setState) {
        setState((draftState) => { draftState.tableSortingFieldPath = value; });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value, !setState, !state]
  );

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

TableSortingRules.propTypes = propTypes;
TableSortingRules.defaultProps = defaultProps;

export default TableSortingRules;
