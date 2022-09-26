import PropTypes from 'prop-types';
import { useContext } from 'react';
import onKeyPress from '../../util/onKeyPress';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import FormContext from './FormContext';
import valueAtPath from '../../util/state/valueAtPath';

const propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  innerRef: RefShape,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  // e => ... do something with e.target.value ...; can be ommitted so as to be uncontrolled OR if changes are sent through form's onChange
  onChange: PropTypes.func,
  // when enter key pressed in field, submit the form
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};
const defaultProps = {
  className: 'text-input-wrapper',
  errorMessage: null,
  innerRef: null,
  isDisabled: false,
  onChange: null,
  onSubmit: null,
  value: null,
};

function TextInput({
  className,
  errorMessage,
  innerRef,
  id,
  isDisabled,
  label,
  onChange,
  onSubmit,
  value,
}) {
  const {
    onChange: contextOnChange,
    onSubmit: contextOnSubmit,
    state,
    validationErrors,
  } = useContext(FormContext) || {};
  const valueUse = (value ?? (state && valueAtPath({ object: state, path: id }))) || '';
  const errorMessageUse = errorMessage ?? (validationErrors && validationErrors[id]);
  const onChangeUse = onChange ?? (contextOnChange && ((e) => contextOnChange({ id, e })));
  const onSubmitUse = onSubmit ?? contextOnSubmit;

  return (
    <div className={joinClassNames('text-input-wrapper', className)}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id}>{label} </label>
      <input
        disabled={isDisabled}
        id={id}
        onChange={onChangeUse}
        onKeyPress={onKeyPress({ targetKey: 'Enter', func: (e) => onSubmitUse && onSubmitUse(e) })}
        ref={innerRef}
        type="text"
        value={valueUse}
      />
      <div className="text-input-wrapper__error-message">
        {errorMessageUse}
      </div>
    </div>
  );
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
