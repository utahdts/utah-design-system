import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useImmer } from 'use-immer';
import { setValueAtPath } from '../../util/state/setValueAtPath';
import { valueAtPath } from '../../util/state/valueAtPath';
import { TableContext } from './util/TableContext';

/**
 * @template TableDataT
 * @typedef {import('@utahdts/utah-design-system').RecordOnChangeFunc<TableDataT>} RecordOnChangeFunc
 */

/**
 * used only by !!! Table Filters !!! (TableContext) This is not a general FormContext hook
 * An input can be controlled, uncontrolled, default value, or controlled by a parent context
 * This function takes these values in to account and provides a current value and onChange event
 * The passed in values trump those of the parent context. A local state is used if neither passed in nor
 * context have a value.
 * @template ChangeEventT the change event's type (React.ChangeEvent for input types, or a custom type for things like the table filter date input)
 * @template TableDataT
 * @param {object} param the path to the data inside the state; ie {filterValues:{...}} where filterValues is actual state in the context
 * @param {string} param.contextStatePath path to the data inside the state; ie {filterValues:{...}} where filterValues is actual state in the context
 * @param {(e: ChangeEventT) => TableDataT} param.defaultOnChange
 * @param {TableDataT | null} param.defaultValue starting value for this component (controlled and uncontrolled)
 * @param {(e: ChangeEventT) => void} [param.onChange]
 * @param {TableDataT | null} param.value the current value of this item
 * @returns {{
 *   currentOnChange: (e: ChangeEventT) => TableDataT
 *   currentValue: (TableDataT | null)
 *   setValue: (newValue: TableDataT) => void
 * }}
 */
export function useCurrentValuesFromStateContext({
  // the path in the state object of the context to the data being used
  contextStatePath,
  // if onChange is not found on context nor passed in, then use this onChange to get the value
  defaultOnChange,
  // the defaultValue the child component was given
  defaultValue,
  // the onChange the child component was given
  onChange,
  // the value the child component was given
  value,
}) {
  const defaultValueRef = useRef(defaultValue);
  const { setState: setStateContext, state: stateContext } = useContext(TableContext) || {};
  const [stateLocal, setStateLocal] = useImmer(defaultValue);

  const fullContextStatePath = `filterValues.value.${contextStatePath}.value`;

  // put default value in to current filter value on mount if there is one
  useEffect(
    () => {
      if (setStateContext && defaultValue) {
        setStateContext((draftStateContext) => {
          setValueAtPath({ object: draftStateContext, path: fullContextStatePath, value: defaultValue });
        });
        stateContext?.filterValues?.onChange?.({ recordFieldPath: fullContextStatePath, value: defaultValue });
      }
    },
    []
  );

  const setValue = useCallback(
    /** @param {TableDataT} newValue */
    (newValue) => {
      if (onChange) {
        // @ts-expect-error this may be a bug? by sending a value instead of an event
        onChange(newValue);
      } else {
        setStateContext((draftStateContext) => {
          // this uses `fullContextStatePath` (filter field) while above it uses `contextStatePath` (non-filter field)
          setValueAtPath({ object: draftStateContext, path: fullContextStatePath, value: newValue });
        });
      }
    },
    [fullContextStatePath, onChange, setStateContext]
  );

  let currentValue = (
    // passed in value (controlled)
    value
    // context's value (context controlled)
    ?? valueAtPath({ object: stateContext, path: fullContextStatePath })
    // pull from local state (which defaults to defaultValue)
    ?? stateLocal
  );
  if (currentValue && currentValue !== defaultValue) {
    // there is a currentValue without looking at defaultValue so defaultValue should never be used ever again
    // this is a hack. couldn't figure out why TableFilterTextInput was making its defaultValue a blank string.
    // @ts-expect-error
    defaultValueRef.current = '';
  }
  if (currentValue === null || currentValue === undefined) {
    currentValue = defaultValueRef.current;
  }

  return useMemo(
    () => ({
      currentOnChange: (
        // use passed in onChange
        onChange
        // use onChange from context (controlled by <TableFilters />)
        || (
          stateContext?.filterValues?.onChange
          && ((e) => (
            // this uses `contextStatePath` (non-filter field) while below it uses `fullContextStatePath` (filter field)
            stateContext?.filterValues?.onChange?.({ recordFieldPath: contextStatePath, value: defaultOnChange(e) })
          ))
        )
        // set context filterValues directly (not controlled by <TableFilters />)
        || (
          setStateContext
          && ((e) => setStateContext((draftStateContext) => {
            // this uses `fullContextStatePath` (filter field) while above it uses `contextStatePath` (non-filter field)
            setValueAtPath({ object: draftStateContext, path: fullContextStatePath, value: defaultOnChange(e) });
          }))
        )
        // no context, so use local state
        || ((e) => {
          setStateLocal(defaultOnChange(e));
        })
      ),
      currentValue,
      setValue,
    }),
    [
      contextStatePath,
      fullContextStatePath,
      onChange,
      setStateContext,
      setStateLocal,
      setValue,
      stateContext,
      stateLocal,
      value,
    ]
  );
}
