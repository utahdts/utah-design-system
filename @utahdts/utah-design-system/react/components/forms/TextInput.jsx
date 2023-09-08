// @ts-check
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import useRememberCursorPosition from '../../hooks/useRememberCursorPosition';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import IconButton from '../buttons/IconButton';
import ErrorMessage from './ErrorMessage';
import RequiredStar from './RequiredStar';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  innerRef: RefShape,
  // should the clearable "X" icon be shown; is auto set to true if onClear is passed in
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  // e => ... do something with e.target.value ...; can be omitted so as to be uncontrolled OR if changes are sent through form's onChange
  onChange: PropTypes.func,
  // e => ... do something when the field should be cleared (if inside a <Form> context, don't have to provide this and can just set isClearable)
  onClear: PropTypes.func,
  // when enter key pressed in field, submit the form
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  wrapperClassName: PropTypes.string,
};
const defaultProps = {
  className: null,
  defaultValue: null,
  errorMessage: null,
  innerRef: null,
  isClearable: false,
  isDisabled: false,
  isRequired: false,
  labelClassName: null,
  onChange: null,
  onClear: null,
  onSubmit: null,
  placeholder: null,
  value: null,
  wrapperClassName: null,
};

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {React.RefObject} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {EventAction} [props.onChange]
 * @param {EventAction} [props.onClear]
 * @param {() => void} [props.onSubmit]
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
function TextInput({
  className,
  defaultValue,
  errorMessage,
  innerRef,
  id,
  isClearable,
  isDisabled,
  isRequired,
  label,
  labelClassName,
  onChange,
  onClear,
  onSubmit,
  placeholder,
  value,
  wrapperClassName,
  ...rest
}) {
  const {
    currentErrorMessage,
    currentOnChange,
    currentOnClear,
    currentOnFormKeyPress,
    currentValue,
  } = useCurrentValuesFromForm({
    defaultValue,
    errorMessage,
    id,
    onChange,
    onClear,
    onSubmit,
    value,
  });
  const inputRef = /** @type {typeof useRef<HTMLInputElement>} */ (useRef)(null);

  const onChangeSetCursorPosition = useRememberCursorPosition(inputRef, value || '');

  const { addAssertiveMessage } = useAriaMessaging();

  const showClearIcon = !!((isClearable || onClear) && currentValue);

  const clearInput = (e) => {
    // @ts-ignore
    currentOnClear(e);
    addAssertiveMessage(`${label} input was cleared`);
    inputRef.current?.focus();
  };

  const checkKeyPressed = (e) => {
    if (e.key === 'Escape' && showClearIcon) {
      clearInput(e);
    } else {
      currentOnFormKeyPress(e);
    }
  };

  return (
    <div className={joinClassNames('input-wrapper', 'input-wrapper--text-input', wrapperClassName)} ref={innerRef}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id} className={labelClassName}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
      <div className="text-input__inner-wrapper">
        <input
          aria-describedby={currentErrorMessage ? `${id}-error` : null}
          aria-invalid={!!currentErrorMessage}
          className={joinClassNames(className, showClearIcon ? 'text-input--clear-icon-visible' : null)}
          disabled={isDisabled}
          id={id}
          name={id}
          onChange={(e) => {
            onChangeSetCursorPosition(e);
            // @ts-ignore
            currentOnChange(e);
          }}
          // @ts-ignore
          onKeyUp={checkKeyPressed}
          placeholder={placeholder || undefined}
          ref={inputRef}
          required={isRequired}
          type="text"
          value={currentValue}
          {...rest}
        />
        {
          (showClearIcon)
            // @ts-ignore
            ? (
              <IconButton
                className={joinClassNames('text-input__clear-button icon-button--borderless icon-button--small1x')}
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={clearInput}
                title="clear input"
                disabled={isDisabled}
              />
            )
            : null
        }
      </div>
    </div>
  );
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
