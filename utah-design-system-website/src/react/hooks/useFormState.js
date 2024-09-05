import { setValueAtPath, valueAtPath } from '@utahdts/utah-design-system';
import { useCallback, useMemo } from 'react';

/**
 * @param {object} state
 * @param {import('use-immer').Updater<any>} setState
 * @returns {{onChange: React.ChangeEventHandler<HTMLInputElement>, valueFn: (path: string) => any}}
 */
export function useFormState(state, setState) {
  const onChange = useCallback(
    /** @type {React.ChangeEventHandler<HTMLInputElement>} */
    ((e) => {
      setState((/** @type {object} */ draftState) => {
        setValueAtPath({ object: draftState, path: e.target.id, value: e.target.matches('[type="checkbox"]') ? e.target.checked : e.target.value });
      });
    }),
    [setState]
  );

  const valueFn = useCallback(
    (/** @type {string} */ path) => valueAtPath({ object: state, path }),
    [state]
  );

  return useMemo(() => ({ onChange, valueFn }), [state, setState]);
}
