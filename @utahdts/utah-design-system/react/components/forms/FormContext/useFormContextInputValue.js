import { useCallback, useMemo } from 'react';
import { useImmer } from 'use-immer';
import { valueAtPath } from '../../../util/state/valueAtPath';
import { useFormContext } from './useFormContext';

/**
 * @template FormContextT
 * @template ValueT
 * @typedef useFormContextInputValueResult {
 *  @property {(newValue: ValueT) => void} onChange
 *  @property {() => void} onClear
 *  @property {ValueT} [value]
 *  @property {import('use-immer').Updater<FormContextT>} [setState] current values of all the form elements
 *  @property {FormContextT} [state]
 * }
 */

/**
 * A component is either controlled by itself or controlled by the form context.
 * If an input is not inside a form context (ignoring default context) then it is uncontrolled.
 * This hook takes the passed in values from the input and trumps the form context or
 * leaves the values undefined to allow for uncontrolled mode.
 * @template FormContextT
 * @template ValueT
 * @param {object} param
 * @param {ValueT} [param.defaultValue] starting value of the component
 * @param {string} param.id id of the component that is also the path to the data for the component in the form context
 * @param {(newValue: string) => void} [param.onChange] when component changes, call this (e) => void
 * @param {() => void} [param.onClear] when component "clears", call this (e) => void
 * @param {ValueT} [param.value] current value of the component
 * @returns {useFormContextInputValueResult<FormContextT, ValueT>} parameters w/ default form context values
 */
export function useFormContextInputValue({
  defaultValue,
  id,
  onChange,
  onClear,
  value,
}) {
  const [internalState, setInternalState] = useImmer(defaultValue);
  const {
    onChange: contextOnChange,
    setState,
    state,
  } = useFormContext();

  const internalOnChange = useCallback(
    (
      /** @param {ValueT} newValue */
      (newValue) => {
        contextOnChange?.({ fieldPath: id, value: newValue });
      }
    ),
    [contextOnChange, id]
  );

  const internalOnClear = useCallback(
    () => { contextOnChange?.({ fieldPath: id, value: '' }); },
    [contextOnChange, id]
  );

  const valueUse = useMemo(
    () => {
      // USE: passed in value
      let retValue = value;

      // USE: form context value
      if (retValue === undefined) {
        retValue = valueAtPath({ object: state ?? null, path: id });
      }

      // USE: defaultValue (uncontrolled/internal)
      if (retValue === undefined) {
        // if an onChange is provided then it's meant to be controlled, so start with this value
        // if an onChange was not provided then the defaultValue is a starting value of an uncontrolled component; don't use it as a controlled value
        retValue = onChange === undefined ? internalState : defaultValue;
      }

      // USE: ???
      if (retValue === undefined) {
        // allow uncontrolled if not in a form context
        retValue = onChange ? (/** @type {ValueT} */ ('')) : undefined;
      }
      return retValue;
    },
    [defaultValue, id, internalState, onChange, state, value]
  );

  // weird typing things going on here so that a ts-ignore wasn't necessary so that other errors aren't accidentally hidden. worth it? meh...?
  return useMemo(
    () => ({
      // indirect generic "magic" functions for passing to event attributes in inputs
      onChange: /** @type {any} */ (
        onChange
        ?? (contextOnChange && internalOnChange)
        ?? setInternalState
      ),
      onClear: () => {
        (onClear ?? internalOnClear)();
        setInternalState(/** @type {ValueT} */(''));
      },

      // direct access to form internals to do whatever you want, though be careful to allow
      // your input's passed in props to trump the form's props
      setState: /** @type {any} */ (setState ?? setState),
      state: /** @type {any} */ (state ?? state),
      value: valueUse,
    }),
    [
      contextOnChange,
      internalOnChange,
      internalOnClear,
      onChange,
      onClear,
      setState,
      state,
      valueUse,
    ]
  );
}
