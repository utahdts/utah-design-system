import { useCallback, useMemo } from 'react';
import { valueAtPath } from '../../../util/state/valueAtPath';
import { useFormContext } from './useFormContext';

/**
 * @template FormEventT
 * @typedef {import('react').FormEvent<FormEventT>} FormEvent
 */

/**
 * @template FormContextT
 * @template ValueT
 * @template HTMLElementT
 * @typedef {import('@utahdts/utah-design-system').useFormContextInputResult<FormContextT, ValueT, HTMLElementT>} useFormContextInputResult
 */

/**
 * A component is either controlled by itself or controlled by the form context.
 * If an input is not inside a form context (ignoring default context) then it is uncontrolled.
 * This hook takes the passed in values from the input and trumps the form context or
 * leaves the values undefined to allow for uncontrolled mode.
 * @template FormContextT
 * @template ValueT
 * @template HTMLElementT
 * @param {object} param
 * @param {ValueT} [param.defaultValue] starting value of the component
 * @param {string} param.id id of the component that is also the path to the data for the component in the form context
 * @param {import('react').ChangeEventHandler<HTMLElementT>} [param.onChange] when component changes, call this (e) => void
 * @param {import('react').KeyboardEventHandler<HTMLElementT>} [param.onKeyUp] when component changes, call this (e) => void
 * @param {import('react').UIEventHandler<HTMLElementT>} [param.onClear] when component "clears", call this (e) => void
 * @param {ValueT} [param.value] current value of the component
 * @returns {useFormContextInputResult<FormContextT, ValueT, HTMLElementT>} parameters w/ default form context values
 */
export function useFormContextInput({
  defaultValue,
  id,
  onChange,
  onClear,
  onKeyUp,
  value,
}) {
  const {
    onChange: contextOnChange,
    setState,
    state,
  } = useFormContext();

  const internalOnChange = useCallback(
    (
      /** @param {import('react').ChangeEvent<HTMLElementT>} e */
      (e) => {
        // input component didn't supply an onChange so try to handle it automagically
        // @ts-ignore
        let newValue = e?.target?.value;
        // @ts-ignore
        if (e?.target?.type === 'checkbox') {
          // @ts-ignore
          newValue = e.target.checked;
        }
        // could also use setState; Form is doing this anyways; but do generic here and specific there
        // @ts-ignore
        contextOnChange?.({ e, fieldPath: id, value: newValue });
      }
    ),
    [contextOnChange, id]
  );

  const internalOnClear = useCallback(
    /** @param {import('react').UIEvent<HTMLElementT>} e */
    // @ts-ignore
    (e) => { contextOnChange?.({ e, fieldPath: id, value: '' }); },
    [contextOnChange, id]
  );

  const valueUse = useMemo(
    () => {
      let retValue = value;
      if (retValue === undefined) {
        retValue = valueAtPath({ object: state ?? null, path: id });
      }
      if (retValue === undefined) {
        // if an onChange is provided then it's meant to be controlled, so start with this value
        // if an onChange was not provided then the defaultValue is a starting value of an uncontrolled component; don't use it as a controlled value
        retValue = onChange === undefined ? undefined : defaultValue;
      }
      if (retValue === undefined) {
        // allow uncontrolled if not in a form context
        retValue = onChange ? (/** @type {ValueT} */ ('')) : undefined;
      }
      return retValue;
    },
    [defaultValue, id, onChange, state, value]
  );

  // @ts-ignore
  return useMemo(
    () => ({
      // indirect generic "magic" functions for passing to event attributes in inputs
      onChange: onChange ?? (contextOnChange && internalOnChange),
      onClear: onClear ?? (contextOnChange && internalOnClear),

      // direct access to form internals to do whatever you want, though be careful to allow
      // your input's passed in props to trump the form's props
      setState,
      state,
      value: valueUse,
    }),
    [
      contextOnChange,
      internalOnChange,
      internalOnClear,
      onChange,
      onClear,
      onKeyUp,
      setState,
      state,
      valueUse,
    ]
  );
}
