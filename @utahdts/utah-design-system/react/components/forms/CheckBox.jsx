import PropTypes from 'prop-types';
import React from 'react';
import RefShape from '../../propTypesShapes/RefShape';
import ErrorMessage from './ErrorMessage';
import RequiredStar from './RequiredStar';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.bool,
  errorMessage: PropTypes.string,
  innerRef: RefShape,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  // e => ... do something with e.target.value ...; can be omitted to be uncontrolled OR if changes are sent through form's onChange
  onChange: PropTypes.func,
  // when enter key pressed in field, submit the form
  onSubmit: PropTypes.func,
  value: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};
const defaultProps = {
  className: null,
  defaultValue: false,
  errorMessage: null,
  innerRef: null,
  isDisabled: false,
  isRequired: false,
  labelClassName: null,
  name: null,
  onChange: null,
  onSubmit: null,
  value: null,
  wrapperClassName: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {boolean | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string | null} [props.labelClassName]
 * @param {string | null} [props.name]
 * @param {EventAction | null} [props.onChange]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {boolean | null} [props.value]
 * @param {string | null} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
function CheckBox({
  className,
  defaultValue,
  errorMessage,
  innerRef,
  id,
  isDisabled,
  isRequired,
  label,
  labelClassName,
  name,
  onChange,
  onSubmit,
  value,
  wrapperClassName,
  ...rest
}) {
  return <div>I am broken</div>;
  // const {
  //   currentErrorMessage,
  //   currentOnChange,
  //   currentOnFormKeyPress,
  //   currentValue,
  // } = useFormContextInput({
  //   defaultValue,
  //   errorMessage,
  //   id,
  //   onChange,
  //   onSubmit,
  //   value,
  // });
  // return (
  //   <div className={joinClassNames('input-wrapper input-wrapper--checkbox', wrapperClassName)}>
  //     {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
  //     <label htmlFor={id} className={labelClassName ?? undefined}>
  //       {label}
  //       {isRequired ? <RequiredStar /> : null}
  //     </label>
  //     <input
  //       aria-describedby={currentErrorMessage ? `${id}-error` : null}
  //       checked={currentValue}
  //       className={className}
  //       disabled={isDisabled}
  //       id={id}
  //       name={name || id}
  //       onChange={currentOnChange}
  //       onKeyPress={currentOnFormKeyPress}
  //       ref={innerRef}
  //       required={isRequired}
  //       type="checkbox"
  //       {...rest}
  //     />
  //     <ErrorMessage errorMessage={currentErrorMessage} id={id} />
  //   </div>
  // );
}

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
