import PropTypes from 'prop-types';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import RefShape from '../../propTypesShapes/RefShape';
import onKeyPress from '../../util/onKeyPress';

const propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  innerRef: RefShape,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  // e => ... do something with e.target.value ...; can be omitted so as to be uncontrolled OR if changes are sent through form's onChange
  onChange: PropTypes.func,
  // when enter key pressed in field, submit the form
  onSubmit: PropTypes.func,
  value: PropTypes.bool,
};
const defaultProps = {
  className: null,
  errorMessage: null,
  innerRef: null,
  isDisabled: false,
  onChange: null,
  onSubmit: null,
  value: null,
};

function CheckBox({
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
    currentErrorMessage,
    currentOnChange,
    currentOnSubmit,
    currentValue,
  } = useCurrentValuesFromForm({
    errorMessage,
    id,
    onChange,
    onSubmit,
    value,
  });
  return (
    <div className="input-wrapper input-wrapper--checkbox">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id}>{label}</label>
      <input
        checked={currentValue}
        className={className}
        disabled={isDisabled}
        id={id}
        onChange={currentOnChange}
        onKeyPress={onKeyPress({ targetKey: 'Enter', func: (e) => currentOnSubmit && currentOnSubmit(e) })}
        ref={innerRef}
        type="checkbox"
        aria-describedby={currentErrorMessage ? `${id}-error` : null}
      />
      {
        currentErrorMessage
          ? (
            <div className="input-wrapper__error-message" id={`${id}-error`}>
              {currentErrorMessage}
            </div>
          )
          : null
      }
    </div>
  );
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
