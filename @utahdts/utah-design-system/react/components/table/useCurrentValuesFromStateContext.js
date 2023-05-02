import { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import setValueAtPath from '../../util/state/setValueAtPath';
import valueAtPath from '../../util/state/valueAtPath';

/**
 * An input can be controlled, uncontrolled, default value, or controlled by a parent context
 * This function takes these values in to account and provides a current value and onChange event
 * The passed in values trump those of the parent context. A local state is used if neither passed in nor
 * context have a value.
 *
 * @param {context} React.createContext from which to pull state/setState
 * @param {contextStatePath} string the path to the data inside the state; ie {filterValues:{...}} where filterValues is actual state in the context
 * @param {defaultValue} string starting value for this component (controlled and uncontrolled)
 * @param {onChange} func when the value changes, call this function; ie (e) => { do something with e }
 * @param {value} any the current value of this item
 */
export default function useCurrentValuesFromStateContext({
  // the React.createContext being questioned
  context,
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
  const { setState: setStateContext, state: stateContext } = useContext(context) || {};
  const [stateLocal, setStateLocal] = useImmer(defaultValue);

  const fullContextStatePath = `filterValues.value.${contextStatePath}.value`;

  // put default value in to current filter value on mount if there is one
  useEffect(
    () => {
      if (setStateContext && defaultValue) {
        setStateContext((draftStateContext) => {
          setValueAtPath({ object: draftStateContext, path: fullContextStatePath, value: defaultValue });
        });
      }
    },
    [defaultValue, !setStateContext]
  );

  return {
    currentOnChange: (
      // use passed in onChange
      onChange
      // use onChange from context (controlled by <TableFilters />)
      || (stateContext?.filterValues?.onChange && ((e) => (
        // this uses `contextStatePath` (non-filter field) while below it uses `fullContextStatePath` (filter field)
        stateContext?.filterValues?.onChange({ recordFieldPath: contextStatePath, value: defaultOnChange(e) })
      )))
      // set context filterValues directly (not controlled by <TableFilters />)
      || (setStateContext && ((e) => setStateContext((draftStateContext) => {
        // this uses `fullContextStatePath` (filter field) while above it uses `contextStatePath` (non-filter field)
        setValueAtPath({ object: draftStateContext, path: fullContextStatePath, value: defaultOnChange(e) });
      })))
      // no context, so use local state
      || ((newValue) => setStateLocal(defaultOnChange(newValue)))
    ),
    currentValue: (
      // passed in value (controlled)
      value
      // context's value (context controlled)
      ?? valueAtPath({ object: stateContext, path: fullContextStatePath })
      // pull from local state (which defaults to defaultValue)
      ?? stateLocal
    ),
  };
}
