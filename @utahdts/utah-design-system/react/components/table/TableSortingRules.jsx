import { useContext, useEffect } from 'react';
import { TableContext } from './util/TableContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.defaultValue]
 * @param {((param: {recordFieldPath: string}) => void)} [props.onChange]
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableSortingRules({
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

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
