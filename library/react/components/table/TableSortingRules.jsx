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
  const { setState, state } = useContext(TableContext);
  useEffect(
    () => {
      if ((onChange && state.tableSortingOnChange) || (defaultValue && state.tableSortingFieldPath)) {
        console.error('A TableWrapper should only have one TableSortingRules section.');
      } else {
        if (onChange) {
          setState((draftState) => { draftState.tableSortingOnChange = onChange; });
        }
        if (defaultValue) {
          setState((draftState) => { draftState.tableSortingFieldPath = defaultValue; });
        }
      }

      // unset the onChange if this component gets unmounted
      return () => {
        if (onChange === state.tableSortingOnChange) {
          setState((draftState) => { draftState.tableSortingOnChange = null; });
        }
      };
    },
    []
  );

  // controlled by parent, so set value to current value
  useEffect(
    () => {
      if (value !== undefined) {
        setState((draftState) => { draftState.tableSortingFieldPath = value; });
      }
    },
    [value]
  );

  return children;
}

TableSortingRules.propTypes = propTypes;
TableSortingRules.defaultProps = defaultProps;

export default TableSortingRules;
