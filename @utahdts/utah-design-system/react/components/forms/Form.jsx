import React, { useId, useMemo } from 'react';
import { useImmer } from 'use-immer';
import { joinClassNames } from '../../util/joinClassNames';
import { setValueAtPath } from '../../util/state/setValueAtPath';
import { FormContextProvider } from './FormContext/FormContextProvider';

/**
 * @template FormContextStateT
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {(param: {e?: React.ChangeEvent, fieldPath: string, value: any}) => void} [props.onChange]
 * @param {import('use-immer').Updater<FormContextStateT>} [props.setState]
 * @param {FormContextStateT} [props.state]
 * @returns {import('react').JSX.Element}
 */
export function Form({
  children,
  className,
  onChange,
  setState,
  state,
  ...rest
}) {
  if (!!state !== !!setState) {
    // eslint-disable-next-line no-console
    console.error('a <Form> component must either be controlled (pass in both state and setsTate) or be uncontrolled (pass in neither state nor setState)');
  }
  const formId = useId();

  // internal state is only used if state/setState not passed in
  const internalState = useImmer(() => /** @type {FormContextStateT} */({}));
  const stateUse = /** @type {typeof useMemo<import('use-immer').ImmerHook<FormContextStateT>>} */ (useMemo)(
    () => ((state && setState) ? [state, setState] : internalState),
    [internalState, state, setState]
  );

  const onChangeUse = useMemo(
    () => (
      onChange ?? (
        /**
         * @param {object} param
         * @param {string} param.fieldPath
         * @param {any} param.value
         */
        ({ fieldPath, value }) => {
          stateUse[1]((draftState) => {
            // @ts-expect-error
            setValueAtPath({ object: draftState, path: fieldPath, value });
          });
        }
      )
    ),
    [onChange, stateUse]
  );

  return (
    <FormContextProvider
      onChange={onChangeUse}
      setState={stateUse[1]}
      state={stateUse[0]}
    >
      <form className={joinClassNames('form', className)} id={`form-${formId}`} {...rest}>
        {children}
      </form>
    </FormContextProvider>
  );
}
