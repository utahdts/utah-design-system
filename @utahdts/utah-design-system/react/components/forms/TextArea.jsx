// @ts-check
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import useRememberCursorPosition from '../../hooks/useRememberCursorPosition';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import ErrorMessage from './ErrorMessage';
import RequiredStar from './RequiredStar';
import IconButton from '../buttons/IconButton';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import CharacterCount from './CharacterCount';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  errorMessage: PropTypes.string,
  // id of the input; when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
  id: PropTypes.string.isRequired,
  innerRef: RefShape,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  // e => ... do something with e.target.value ...; can be omitted to be uncontrolled OR if changes are sent through form's onChange
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
  maxLength: null,
  name: null,
  onChange: null,
  onClear: null,
  onSubmit: null,
  placeholder: null,
  value: null,
  wrapperClassName: null,
};

/**
 * @param {Object} props
 * @param {string | null} [props.className]
 * @param {string | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string | null} [props.labelClassName]
 * @param {number | null} [props.maxLength]
 * @param {string | null} [props.name]
 * @param {EventAction | null} [props.onChange]
 * @param {EventAction | null} [props.onClear]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {string | null} [props.placeholder]
 * @param {string | null} [props.value]
 * @param {string | null} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
function TextArea({
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
  maxLength,
  name,
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
  const inputRef = /** @type {typeof useRef<HTMLInputElement> | null} */ (useRef)(null);

  const onChangeSetCursorPosition = useRememberCursorPosition(inputRef, value || '');

  const { addAssertiveMessage } = useAriaMessaging();

  const showClearIcon = !!((isClearable || onClear) && currentValue);

  let ariaDescribedBy = null;
  if (currentErrorMessage) {
    ariaDescribedBy = `${id}-error`;
  } else if (maxLength) {
    ariaDescribedBy = `${id}-character-count`;
  }

  const clearInput = useCallback((e) => {
    // @ts-ignore
    currentOnClear(e);
    addAssertiveMessage(`${label} input was cleared`);
    inputRef.current?.focus();
  }, [addAssertiveMessage, currentOnClear, label]);

  const checkKeyPressed = useCallback((e) => {
    if (e.key === 'Escape' && showClearIcon) {
      clearInput(e);
    } else {
      currentOnFormKeyPress(e);
    }
  }, [clearInput, currentOnFormKeyPress, showClearIcon]);

  return (
    <div className={joinClassNames('input-wrapper', 'input-wrapper--text-area', wrapperClassName)} ref={innerRef}>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <label htmlFor={id} className={joinClassNames('text-area__label', labelClassName)}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
      <div className="text-area__inner-wrapper">
        <textarea
          aria-describedby={ariaDescribedBy}
          aria-invalid={!!currentErrorMessage}
          className={joinClassNames(className, showClearIcon ? 'text-area--clear-icon-visible' : null)}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={useCallback((e) => {
            onChangeSetCursorPosition(e);
            // @ts-ignore
            currentOnChange(e);
          }, [onChangeSetCursorPosition, currentOnChange])}
          // @ts-ignore
          onKeyUp={checkKeyPressed}
          placeholder={placeholder || undefined}
          ref={inputRef}
          required={isRequired}
          value={currentValue}
          {...rest}
        />
        {
          (showClearIcon)
            // @ts-ignore
            ? (
              <IconButton
                className={joinClassNames('text-area__clear-button icon-button--borderless icon-button--small1x')}
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={clearInput}
                title="Clear input"
                disabled={isDisabled}
              />
            )
            : null
        }
      </div>
      <CharacterCount id={id} maxLength={maxLength} value={currentValue} />
    </div>
  );
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
