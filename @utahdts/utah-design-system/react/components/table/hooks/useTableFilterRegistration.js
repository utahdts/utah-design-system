// @ts-check
import { useEffect } from 'react';
import { useTableContext } from './useTableContext';

/**
 * @typedef {import('@utahdts/utah-design-system').TableFilterOptions} TableFilterOptions
 */

/**
 * each TableFilterX component needs to setup and register its basic information. The context has context
 * global level filter settings, but each filter has its own settings, like `exactMatch`. This hook sets
 * up context filter information for a filter
 *
 * @param {string} recordFieldPath path to the field in the record on which this filter applies
 * @param {boolean} exactMatch should the filter be an exact match on the data
 */
export function useTableFilterRegistration(recordFieldPath, exactMatch) {
  const { setState } = useTableContext();

  useEffect(
    () => {
      // store information about this filter in the context
      setState((draftState) => {
        draftState.filterValues.value[recordFieldPath] = {
          exactMatch,
          value: '',
        };
      });

      // remove this filter from the context
      return (
        () => {
          setState((draftState) => {
            delete draftState.filterValues.value[recordFieldPath];
          });
        }
      );
    },
    [exactMatch, recordFieldPath, setState]
  );
}
