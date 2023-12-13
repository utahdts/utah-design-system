// @ts-check
import { useCallback, useMemo } from 'react';
import valueAtPath from '../../../util/state/valueAtPath';
import useOnKeyUp from '../../../util/useOnKeyUp';
import useFormContext from './useFormContext';

/**
 * @template FormEventT
 * @typedef {import('react').FormEvent<FormEventT>} FormEvent
 */

/**
 * @template FormContextT
 * @template ValueT
 * @typedef {import('@utahdts/utah-design-system').useFormContextInputResult<FormContextT, ValueT>} useFormContextInputResult
 */

/**
 * A component is either controlled by itself or controlled by the form context.
 * If an input is not inside a form context (ignoring default context) then it is uncontrolled.
 * This hook takes the passed in values from the input and trumps the form context or
 * leaves the values undefined to allow for uncontrolled mode.
 *
 * @template FormContextT
 * @template ValueT
 * @param {Object} param
 * @param {ValueT} [param.defaultValue] starting value of the component
 * @param {string} param.id id of the component that is also the path to the data for the component in the form context
 * @param {FormEvent<HTMLInputElement>} [param.onChange] when component changes, call this (e) => void
 * @param {FormEvent<HTMLInputElement>} [param.onKeyUp] when component changes, call this (e) => void
 * @param {FormEvent<HTMLInputElement>} [param.onClear] when component "clears", call this (e) => void
 * @param {(e?: KeyboardEvent) => void} [param.onSubmit] call on enter key pressed, or other (e) => void event
 * @param {ValueT} [param.value] current value of the component
 * @returns {useFormContextInputResult<FormContextT, ValueT>} parameters w/ default form context values
 */
export default function useFormContextInput({
  defaultValue,
  id,
  onChange,
  onClear,
  onKeyUp,
  onSubmit,
  value,
}) {
  const {
    onChange: contextOnChange,
    onSubmit: contextOnSubmit,
    setState,
    state,
  } = /** @type {typeof useFormContext<FormContextT>} */ (useFormContext)();

  const internalOnChange = useCallback(
    (
      /** @param {React.KeyboardEvent} e */
      (e) => {
        // input component didn't supply an onChange so try to handle it automagically
        let newValue = e?.target?.value;
        if (e?.target?.type === 'checkbox') {
          newValue = e.target.checked;
        }
        // could also use setState; Form is doing this anyways; but do generic here and specific there
        contextOnChange?.({ e, fieldPath: id, value: newValue });
      }
    ),
    [contextOnChange, id]
  );

  const currentOnSubmit = onSubmit ?? contextOnSubmit;
  const internalOnKeyUp = useOnKeyUp('Enter', () => currentOnSubmit?.());

  const internalOnClear = useCallback(
    /** @param {React.KeyboardEvent} e */
    (e) => contextOnChange?.({ e, fieldPath: id, value: '' }),
    [contextOnChange, id]
  );

  const valueUse = useMemo(
    () => {
      let retValue = value;
      if (retValue === undefined) {
        retValue = valueAtPath({ object: state, path: id });
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

  return useMemo(
    () => ({
      // indirect generic "magic" functions for passing to event attributes in inputs
      onChange: onChange ?? (contextOnChange && internalOnChange),
      onClear: onClear ?? (contextOnChange && internalOnClear),
      onSubmit: onSubmit ?? currentOnSubmit,
      onFormKeyUp: onKeyUp ?? internalOnKeyUp,

      // direct access to form internals to do whatever you want, though be careful to allow
      // your input's passed in props to trump the form's props
      setState,
      state,
      value: valueUse,
    }),
    [
      contextOnChange,
      currentOnSubmit,
      internalOnChange,
      internalOnClear,
      internalOnKeyUp,
      onChange,
      onClear,
      onKeyUp,
      onSubmit,
      setState,
      state,
      valueUse,
    ]
  );
}
