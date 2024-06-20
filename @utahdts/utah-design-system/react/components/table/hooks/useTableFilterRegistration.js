import { useEffect } from 'react';
import { useTableContext } from './useTableContext';

/** @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValueOptions} TableContextStateFilterValueOptions */

/**
 * each TableFilterX component needs to set up and register its basic information. The context has context
 * global level filter settings, but each filter has its own settings, like `exactMatch`. This hook sets
 * up context filter information for a filter
 * @param {string} recordFieldPath path to the field in the record on which this filter applies
 * @param {string | number | undefined | null} defaultValue filter can have a default starting value
 * @param {TableContextStateFilterValueOptions} filterOptions
 */
export function useTableFilterRegistration(recordFieldPath, defaultValue, filterOptions) {
  const { setState } = useTableContext();

  useEffect(
    () => {
      // store information about this filter in the context
      setState((draftState) => {
        draftState.filterValues.value[recordFieldPath] = {
          value: defaultValue ?? '',
          options: filterOptions,
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
    // filterOptions is an object and will probably be recreated on every call to this function,
    // so spread its contents to avoid always looking like it changed.
    [...Object.values(filterOptions), recordFieldPath]
  );
}
