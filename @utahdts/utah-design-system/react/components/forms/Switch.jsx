import PropTypes from 'prop-types';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import RefShape from '../../propTypesShapes/RefShape';
import ErrorMessage from './ErrorMessage';
import joinClassNames from '../../util/joinClassNames';
import formElementSizesEnum from '../../enums/formElementSizesEnum';

const propTypes = {

  // ** UPDATE DOC PAGE PROPERTIES ** //

  className: PropTypes.string,
  defaultValue: PropTypes.bool,
  errorMessage: PropTypes.string,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  innerRef: RefShape,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  labelOff: PropTypes.node,
  labelOn: PropTypes.node,
  name: PropTypes.string,
  // e => ... do something with e.target.value ...; can be omitted to be uncontrolled OR if changes are sent through form's onChange
  onChange: PropTypes.func,
  // when enter key pressed in field, submit the form
  onSubmit: PropTypes.func,
  size: PropTypes.oneOf([formElementSizesEnum.SMALL, formElementSizesEnum.MEDIUM, formElementSizesEnum.LARGE]),
  sliderChildren: PropTypes.node,
  value: PropTypes.bool,
  width: PropTypes.number,

  // ** UPDATE DOC PAGE PROPERTIES ** //

};
const defaultProps = {
  className: null,
  defaultValue: null,
  errorMessage: null,
  innerRef: null,
  isDisabled: false,
  labelClassName: '',
  labelOff: null,
  labelOn: null,
  name: null,
  onChange: null,
  onSubmit: null,
  size: formElementSizesEnum.MEDIUM,
  sliderChildren: null,
  value: null,
  width: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {boolean | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {string} props.id
 * @param {React.Ref<HTMLDivElement> | null} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string | null} [props.labelOn]
 * @param {string | null} [props.labelOff]
 * @param {string | null} [props.name]
 * @param {((e: Event, id: string, newValue: boolean) => void) | null} [props.onChange]
 * @param {EventAction | null} [props.onSubmit]
 * @param {'small' | 'medium' | 'large'} [props.size] formElementSizesEnum
 * @param {React.ReactNode | null} [props.sliderChildren]
 * @param {boolean | null} [props.value]
 * @param {number | null} [props.width]
 * @param {...any} rest
 * @returns {JSX.Element}
 */
function Switch({
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isDisabled,
  label,
  labelClassName,
  labelOn,
  labelOff,
  name,
  onChange,
  onSubmit,
  size,
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
    defaultValue,
    errorMessage,
    id,
    onChange,
    onSubmit,
    value,
  });

  return (
    <div
      className="input-wrapper input-wrapper--switch"
      ref={innerRef}
    >
      <label
        className={joinClassNames(
          'switch__wrapper',
          size === formElementSizesEnum.MEDIUM ? null : `switch--${size}`,
          isDisabled ? 'switch--disabled' : null,
          currentValue && 'switch__wrapper--on'
        )}
        htmlFor={id}
        style={width && { width: `${width}px` }}
      >
        <span className={joinClassNames('switch__label', labelClassName)}>{label}</span>

        <input
          aria-describedby={currentErrorMessage ? `${id}-error` : null}
          checked={currentValue}
          className={joinClassNames('switch visually-hidden', className)}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={currentOnChange}
          onKeyPress={currentOnFormKeyPress}
          role="switch"
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
