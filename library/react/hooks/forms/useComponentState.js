import { useState } from 'react';

/**
 * A component can be Uncontrolled or Controlled. An uncontrolled component can have a default starting value.
 * The library components were intended to allow usage as either uncontrolled or controlled.
 * This hook takes the component's props and returns back a value/onChange state so that every separate
 * component doesn't have to do the same controlled/uncontrolled checks.
 * If a component is "uncontrolled" this trumps and makes it controlled.
 *
 * @param {defaultValue} any UNCONTROLLED: the starting value for an uncontrolled component
 * @param {onChange} func CONTROLLED: function to call when component changes
 * @param {value} func CONTROLLED: current value of the component
 * @returns {onChange, value} the value and onChange for the component
 */
export default function useComponentState({ defaultValue, onChange, value }) {
  const [currentValue, setCurrentValue] = useState(value === undefined ? defaultValue : value);

  return {
    onChange: onChange || setCurrentValue,
    value: value === undefined ? currentValue : value,
  };
}
