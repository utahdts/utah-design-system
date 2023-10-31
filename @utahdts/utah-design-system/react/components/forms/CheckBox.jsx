import PropTypes from 'prop-types';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import RefShape from '../../propTypesShapes/RefShape';
import ErrorMessage from './ErrorMessage';

const propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  innerRef: RefShape,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  // e => ... do something with e.target.value ...; can be omitted to be uncontrolled OR if changes are sent through form's onChange
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
  name: null,
  onChange: null,
  onSubmit: null,
  value: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {string | null} [props.errorMessage]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string | null} [props.name]
 * @param {EventAction | null} [props.onChange]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {boolean | null} [props.value]
 * @returns {JSX.Element}
 */
function CheckBox({
  className,
  errorMessage,
  innerRef,
  id,
  isDisabled,
  label,
  name,
  onChange,
  onSubmit,
  value,
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
  return (
    <div className="input-wrapper input-wrapper--checkbox">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id}>{label}</label>
      <input
        aria-describedby={currentErrorMessage ? `${id}-error` : null}
        checked={currentValue}
        className={className}
        disabled={isDisabled}
        id={id}
        name={name || id}
        onChange={currentOnChange}
        onKeyPress={currentOnFormKeyPress}
        ref={innerRef}
        type="checkbox"
        {...rest}
      />
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
    </div>
  );
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
