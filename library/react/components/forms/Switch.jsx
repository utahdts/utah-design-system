import PropTypes from 'prop-types';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import RefShape from '../../propTypesShapes/RefShape';
import ErrorMessage from './ErrorMessage';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  innerRef: RefShape,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelOff: PropTypes.node,
  labelOn: PropTypes.node,
  // e => ... do something with e.target.value ...; can be omitted so as to be uncontrolled OR if changes are sent through form's onChange
  onChange: PropTypes.func,
  // when enter key pressed in field, submit the form
  onSubmit: PropTypes.func,
  sliderChildren: PropTypes.node,
  value: PropTypes.bool,
  width: PropTypes.number,
};
const defaultProps = {
  className: null,
  errorMessage: null,
  innerRef: null,
  isDisabled: false,
  labelOff: null,
  labelOn: null,
  onChange: null,
  onSubmit: null,
  sliderChildren: null,
  value: null,
  width: null,
};

function Switch({
  className,
  errorMessage,
  innerRef,
  id,
  isDisabled,
  label,
  labelOn,
  labelOff,
  onChange,
  onSubmit,
  sliderChildren,
  value,
  width,
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
    <div className="input-wrapper input-wrapper--switch">
      <label
        className={joinClassNames('switch__wrapper', currentValue && 'switch__wrapper--on')}
        htmlFor={id}
        style={width && { width: `${width}px` }}
      >
        <span className="switch__label">{label}</span>

        <input
          aria-describedby={currentErrorMessage ? `${id}-error` : null}
          checked={currentValue}
          className={joinClassNames('switch visually-hidden', className)}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={currentOnChange}
          onKeyPress={currentOnFormKeyPress}
          ref={innerRef}
          type="checkbox"
          {...rest}
        />
        <span className={joinClassNames('switch__slider', currentValue && 'switch__slider--on')}>{sliderChildren}</span>
        {
          (labelOn || labelOff)
            ? (
              <span className="switch__inner-label">
                <span className={joinClassNames(currentValue ? 'show' : '', 'switch__inner-label-on')}>{labelOn}</span>
                <span className={joinClassNames(currentValue ? '' : 'show', 'switch__inner-label-off')}>{labelOff}</span>
              </span>
            )
            : null
        }
      </label>

      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
    </div>
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
