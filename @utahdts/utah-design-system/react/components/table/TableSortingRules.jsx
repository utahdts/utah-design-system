import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import TableContext from './TableContext';

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

function TableSortingRules({
  children,
  defaultValue,
  onChange,
  value,
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
            draftState.tableSortingFieldPath = defaultValue;
            draftState.tableSortingOnChange = onChange;
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
    [!setState, !state]
  );

  // controlled by parent, so set value to current value
  useEffect(
    () => {
      if (value !== undefined && setState) {
        setState((draftState) => { draftState.tableSortingFieldPath = value; });
      }
    },
    [value, !setState, !state]
  );

  return children;
}

TableSortingRules.propTypes = propTypes;
TableSortingRules.defaultProps = defaultProps;

export default TableSortingRules;
