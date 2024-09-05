import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { useFormContext } from '../../FormContext/useFormContext';
import { RadioButtonGroupContext } from './RadioButtonGroupContext';
import { valueAtPath } from '../../../../util/state/valueAtPath';

/** @typedef { import('@utahdts/utah-design-system').RadioButtonGroupContextValue} RadioButtonGroupContextValue */

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.defaultValue]
 * @param {string} props.name
 * @param {((newValue: string) => void)} [props.onChange]
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function RadioButtonGroupContextProvider({
  children,
  defaultValue,
  name,
  onChange,
  value,
}) {
  const { onChange: onChangeFormContext, state: formState } = useFormContext();

  const radioButtonGroupImmer = /** @type {typeof useImmer<RadioButtonGroupContextValue | undefined>} */ (useImmer)({
    name,
    onChange: (newValue) => {
      if (onChange) {
        // parent controls the component
        onChange(newValue);
      } else if (onChangeFormContext) {
        // form context controls the component
        onChangeFormContext({ fieldPath: name, value: newValue });
      } else {
        // controlled by self
        radioButtonGroupImmer[1]((draftState) => {
          if (draftState) {
            draftState.value = newValue;
          }
        });
      }
    },
    value: defaultValue ?? null,
  });
  const setRadioButtonGroupState = radioButtonGroupImmer[1];

  // handle a controlled component changing its value
  useEffect(
    () => {
      if (value !== undefined && value !== radioButtonGroupImmer[0]?.value) {
        setRadioButtonGroupState((draftState) => {
          if (draftState) {
            draftState.value = value;
          }
        });
      }
    },
    [value]
  );

  // form value changed
  const formStateValue = valueAtPath({ object: formState, path: name });
  useEffect(
    () => {
      if (formStateValue !== undefined) {
        setRadioButtonGroupState((draftState) => {
          if (draftState) {
            draftState.value = formStateValue;
          }
        });
      }
    },
    [formStateValue]
  );

  return (
    <RadioButtonGroupContext.Provider value={radioButtonGroupImmer}>
      {children}
    </RadioButtonGroupContext.Provider>
  );
}
