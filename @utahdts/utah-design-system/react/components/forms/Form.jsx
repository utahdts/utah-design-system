// @ts-check
import React, { useMemo } from 'react';
import { useImmer } from 'use-immer';
import joinClassNames from '../../util/joinClassNames';
import setValueAtPath from '../../util/state/setValueAtPath';
import uuidv4 from '../../util/uuidv4';
import FormContextProvider from './FormContext/FormContextProvider';

/**
 * @template FormContextStateT
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {({e, fieldPath, value}: {e?: React.KeyboardEvent, fieldPath: string, value: any}) => void} [props.onChange]
 * @param {(e?: React.KeyboardEvent) => void} [props.onSubmit]
 * @param {import('use-immer').Updater<FormContextStateT>} [props.setState]
 * @param {FormContextStateT} [props.state]
 * @returns {JSX.Element}
 */
export default function Form({
  children,
  className,
  onChange,
  onSubmit,
  setState,
  state,
  ...rest
}) {
  if (!!state !== !!setState) {
    // eslint-disable-next-line no-console
    console.error('a <Form> component must either be controlled (pass in both state and setsTate) or be uncontrolled (pass in neither state nor setState)');
  }
  const formId = useMemo(() => uuidv4(), []);

  // internal state is only used if state/setState not passed in
  const internalState = useImmer(() => /** @type {FormContextStateT} */({}));
  const stateUse = /** @type {typeof useMemo<import('use-immer').ImmerHook<FormContextStateT>>} */ (useMemo)(
    () => ((state && setState) ? [state, setState] : internalState),
    [internalState, state, setState]
  );

  const onChangeUse = useMemo(
    () => (
      onChange
      ?? (({ fieldPath, value }) => stateUse[1]((draftState) => {
        setValueAtPath({ object: draftState, path: fieldPath, value });
      }))
    ),
    [onChange, stateUse]
  );

  return (
    <FormContextProvider
      onChange={onChangeUse}
      onSubmit={onSubmit}
      setState={stateUse[1]}
      state={stateUse[0]}
    >
      <form className={joinClassNames('form', className)} id={`form-${formId}`} {...rest}>
        {children}
      </form>
    </FormContextProvider>
  );
}
