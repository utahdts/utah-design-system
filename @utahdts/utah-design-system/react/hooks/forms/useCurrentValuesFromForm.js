import { useContext } from 'react';
import FormContext from '../../components/forms/FormContext';
import valueAtPath from '../../util/state/valueAtPath';
import useOnKeyPress from '../../util/useOnKeyPress';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

/**
 * @typedef UseCurrentValuesFromFormResult {
 *  @property {string | undefined} currentErrorMessage
 *  @property {EventAction} currentOnChange
 *  @property {EventAction} currentOnClear
 *  @property {() => void} currentOnSubmit
 *  @property {any} currentValue
 *  @property {EventAction} currentOnFormKeyPress
 * }
 */

/**
 * A component can be
 *  • uncontrolled (no value/onchange)
 *  • controlled by form (<Form> has onChange and state, but Component itself does not)
 *  • controlled by component (<Form> may or may not have onChange and state, but Component itself specifies overriding value and onChange)
 *
 * @param {Object} object
 * @param {string | null} [object.errorMessage] errorMessage from the component that overrides the one from the form context
 * @param {string|boolean|number|any} [object.defaultValue] starting value of the component if not controlled
 * @param {string} object.id id of the component that is also the path to the data for the component in the form context
 * @param {EventAction | null} [object.onChange] when component changes, call this (e) => void, overrides the one from the form context
 * @param {EventAction | null} [object.onKeyUp] when component changes, call this (e) => void, overrides the one from the form context
 * @param {EventAction | null} [object.onClear] when component "clears", call this (e) => void, overrides the one from the form context
 * @param {(() => void) | null} [object.onSubmit] call on enter key pressed, or other (e) => void event; overrides the one from the form context
 * @param {string|boolean|number|any} [object.value] current value of the component, overrides the one from the form context
 * @returns {UseCurrentValuesFromFormResult} the same passed in parameters but checking if the component overrides the form's context values
 */
export default function useCurrentValuesFromForm({
  defaultValue,
  errorMessage,
  id,
  onChange,
  onClear,
  onKeyUp,
  onSubmit,
  value,
}) {
  if (!id) {
    // eslint-disable-next-line no-console
    console.error('useCurrentValuesFromForm: `id` is required');
  }
  const {
    onChange: contextOnChange,
    onSubmit: contextOnSubmit,
    state,
    validationErrors,
  } = useContext(FormContext) || {};

  const currentOnSubmit = onSubmit ?? contextOnSubmit;
  const currentOnKeyPress = useOnKeyPress({ targetKey: 'Enter', func: () => currentOnSubmit?.() });

  return {
    currentErrorMessage: errorMessage ?? validationErrors?.[id]?.[0],
    currentOnChange: onChange ?? (contextOnChange && ((e, newValue) => contextOnChange({ e, id, newValue }))),
    currentOnClear: onClear ?? (contextOnChange && ((e) => contextOnChange({ e, id, newValue: '' }))),
    currentOnSubmit,
    currentValue: (value ?? (state && valueAtPath({ object: state, path: id }))) ?? defaultValue ?? '',
    currentOnFormKeyPress: onKeyUp ?? currentOnKeyPress,
  };
}
