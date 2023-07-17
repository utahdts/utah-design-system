import PropTypes from 'prop-types';
import { useRef } from 'react';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import useRememberCursorPosition from '../../hooks/useRememberCursorPosition';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import ErrorMessage from './ErrorMessage';

const propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  innerRef: RefShape,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  // e => ... do something with e.target.value ...; can be omitted so as to be uncontrolled OR if changes are sent through form's onChange
  onChange: PropTypes.func,
  // when enter key pressed in field, submit the form
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  wrapperClassName: PropTypes.string,
};
const defaultProps = {
  className: null,
  errorMessage: null,
  innerRef: null,
  isDisabled: false,
  labelClassName: null,
  onChange: null,
  onSubmit: null,
  value: null,
  wrapperClassName: null,
};

function TextInput({
  className,
  errorMessage,
  innerRef,
  id,
  isDisabled,
  label,
  labelClassName,
  onChange,
  onSubmit,
  value,
  wrapperClassName,
  ...rest
}) {
  const {
    currentErrorMessage,
    currentOnChange,
    currentOnFormKeyPress,
    currentValue,
  } = useCurrentValuesFromForm({
    errorMessage,
    id,
    onChange,
    onSubmit,
    value,
  });
  const ref = /** @type {typeof useRef<HTMLInputElement>} */ (useRef)(null);
  const innerRefUse = innerRef || ref;

  const onChangeSetCursorPosition = useRememberCursorPosition(innerRefUse, value);

  return (
    <div className={joinClassNames('input-wrapper', 'input-wrapper--text-input', wrapperClassName)}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id} className={labelClassName}>{label}</label>
      <input
        aria-describedby={currentErrorMessage ? `${id}-error` : null}
        className={className}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={(e) => {
          onChangeSetCursorPosition(e);
          currentOnChange(e);
        }}
        onKeyPress={currentOnFormKeyPress}
        ref={innerRefUse}
        type="text"
        value={currentValue}
        {...rest}
      />
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
    </div>
  );
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
