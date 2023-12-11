import { useMemo, useState } from 'react';
import useRefAlways from '../useRefAlways';

/**
 * @template RefObjectT
 * @typedef {import('react').RefObject<RefObjectT>} RefObject
 */

/**
 * A component can be Uncontrolled or Controlled. An uncontrolled component can have a default starting value.
 * The library components were intended to allow usage as either uncontrolled or controlled.
 * This hook takes the component's props and returns back a value/onChange state so that every separate
 * component doesn't have to do the same controlled/uncontrolled checks.
 * If a component is "uncontrolled" this trumps and makes it controlled.
 *
 * @deprecated this is improperly typed and improperly conceptualized. components should not be forced to always be controlled?
 * @template ValueT
 * @param {Object} param
 * @param {ValueT} param.defaultValue UNCONTROLLED: the starting value for an uncontrolled component
 * @param {(newValue: ValueT) => void} param.onChange CONTROLLED: function to call when component changes
 * @param {ValueT} param.value CONTROLLED: function to call when component changes
 * @returns {{onChange: (newValue: ValueT) => void, value: ValueT, valueRef: RefObject<ValueT>}} the value and onChange for the component
 */
export default function useComponentState({ defaultValue, onChange, value }) {
  const [currentValue, setCurrentValue] = useState(value === undefined ? defaultValue : value);
  const valueUse = value === undefined ? currentValue : value;

  const valueRef = useRefAlways(valueUse);
  return useMemo(
    () => ({
      onChange: onChange || setCurrentValue,
      value: valueUse,
      valueRef,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChange, valueUse]
  );
}
