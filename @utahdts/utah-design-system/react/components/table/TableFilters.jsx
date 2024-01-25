import { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '../../util/joinClassNames';
import { FormContextProvider } from '../forms/FormContext/FormContextProvider';
import { TableContext } from './util/TableContext';

/** @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValueObject} TableContextStateFilterValueObject */

/**
 * @template TableDataT
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {TableContextStateFilterValueObject} [props.defaultValue]
 * @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {((param: { recordFieldPath: string, value: TableDataT }) => TableDataT) | null} [props.onChange]
 * @param {TableContextStateFilterValueObject} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilters({
  children,
  className,
  defaultValue,
  innerRef,
  id,
  onChange,
  value,
  ...rest
}) {
  const { setState, state } = useContext(TableContext);

  useEffect(
    () => {
      if (
        state.filterValues.defaultValue
        || state.filterValues.onChange
        || (state.filterValues.value && Object.values(state.filterValues.value).length)
      ) {
        // if you want to do more than one Filters section, then you'll want to update the context's
        // filterValues.onChange to be an array... and maybe some other changes... ymmv
        // eslint-disable-next-line no-console
        console.warn('defaultValue, onChange, or value were already set for Filters. There should only be one <TableFilters/> section in a table.');
      }

      setState((draftState) => {
        draftState.filterValues.defaultValue = defaultValue ?? null;
        draftState.filterValues.onChange = onChange ?? null;
        draftState.filterValues.value = value || draftState.filterValues.value;
      });

      return () => {
        setState((draftState) => {
          draftState.filterValues.defaultValue = null;
          draftState.filterValues.onChange = null;
          draftState.filterValues.value = {};
        });
      };
    },
    []
  );

  // when value changes, update state...
  useEffect(
    () => {
      setState((draftState) => {
        draftState.filterValues.value = value || draftState.filterValues.value;
      });
    },
    [value]
  );

  // headers get their own state so that they don't interact with a global form because they aren't really form
  // data though they do use inputs that connect to a form.
  const [formState, setFormState] = useImmer({});
  return (
    <FormContextProvider state={formState} setState={setFormState}>
      <tr className={joinClassNames('table-header__row table-header__row--filters', className)} id={id ?? undefined} ref={innerRef} {...rest}>
        {children}
      </tr>
    </FormContextProvider>
  );
}
