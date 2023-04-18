import PropTypes from 'prop-types';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import RefShape from '../../propTypesShapes/RefShape';
import ErrorMessage from './ErrorMessage';

const propTypes = {
  // children are the options
  children: PropTypes.node,
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
  value: PropTypes.string,
};
const defaultProps = {
  children: null,
  className: null,
  errorMessage: null,
  innerRef: null,
  isDisabled: false,
  onChange: null,
  onSubmit: null,
  value: null,
};

function Select({
  children,
  className,
  errorMessage,
  innerRef,
  id,
  isDisabled,
  label,
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
    <div className="input-wrapper input-wrapper--select">
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id}>{label}</label>
      <select
        aria-describedby={currentErrorMessage ? `${id}-error` : null}
        className={className}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={currentOnChange}
        onKeyPress={currentOnFormKeyPress}
        ref={innerRef}
        value={currentValue}
        {...rest}
      >
        {children}
      </select>
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
    </div>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
