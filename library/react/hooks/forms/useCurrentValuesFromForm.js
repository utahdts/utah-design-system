import { useContext } from 'react';
import FormContext from '../../components/forms/FormContext';
import valueAtPath from '../../util/state/valueAtPath';
import onKeyPress from '../../util/onKeyPress';

/**
 * A component can be
 *  • uncontrolled (no value/onchange)
 *  • controlled by form (<Form> has onChange and state, but Component itself does not)
 *  • controlled by component (<Form> may or may not have onChange and state, but Component itself specifies overriding value and onChange)
 *
 * @param {string} object.errorMessage errorMessage from the component that overrides the one from the form context
 * @param {string|number} object.id id of the component that is also the path to the data for the component in the form context
 * @param {func} object.onChange when component changes, call this function, overrides the one from the form context
 * @param {func} object.onSubmit when enter key pressed ,or some other submitting event, call this function, overrides the one from the form context
 * @param {string|bool|number|any} object.value current value of the component, overrides the one from the form context
 * @returns the same passed in parameters but checking if the component overrides the form's context values
 */
export default function useCurrentValuesFromForm({
  errorMessage,
  id,
  onChange,
  onSubmit,
  value,
}) {
  if (!id) {
    console.error('useCurrentValuesFromForm: `id` is required');
  }
  const {
    onChange: contextOnChange,
    onSubmit: contextOnSubmit,
    state,
    validationErrors,
  } = useContext(FormContext) || {};

  const currentOnSubmit = onSubmit ?? contextOnSubmit;
  return {
    currentErrorMessage: errorMessage ?? (validationErrors && validationErrors[id]),
    currentOnChange: onChange ?? (contextOnChange && ((e) => contextOnChange({ id, e }))),
    currentOnSubmit,
    currentValue: (value ?? (state && valueAtPath({ object: state, path: id }))) || '',
    currentOnFormKeyPress: onKeyPress({ targetKey: 'Enter', func: (e) => currentOnSubmit && currentOnSubmit(e) }),
  };
}
