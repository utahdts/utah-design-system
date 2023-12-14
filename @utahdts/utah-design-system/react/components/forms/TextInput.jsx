import React, { useCallback, useRef } from 'react';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import useFormContextInput from './FormContext/useFormContextInput';
import useRememberCursorPosition from '../../hooks/useRememberCursorPosition';
import joinClassNames from '../../util/joinClassNames';
import { IconButton } from '../buttons/IconButton';
import { ErrorMessage } from './ErrorMessage';
import { RequiredStar } from './RequiredStar';

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form, the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {React.Ref<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isClearable] should the clearable "X" icon be shown; is auto set to true if onClear is passed in
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {React.FormEventHandler} [props.onChange] can be omitted to be uncontrolled OR controlled by form
 * @param {React.FormEventHandler} [props.onKeyUp]
 * @param {React.FormEventHandler} [props.onClear] e => ... do something when the field should be cleared (not needed if inside a <Form> context)
 * @param {React.ChangeEventHandler} [props.onSubmit] when enter key pressed in field, this callback may be called
 * @param {string} [props.placeholder]
 * @param {React.ReactNode} [props.rightContent] custom content to put to the right of the text input
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export default function TextInput({
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
  name,
  onChange,
  onClear,
  onKeyUp,
  onSubmit,
  placeholder,
  rightContent,
  value,
  wrapperClassName,
  ...rest
}) {
  const {
    onChange: currentOnChange,
    onClear: currentOnClear,
    onFormKeyUp: currentOnFormKeyUp,
    value: currentValue,
  } = useFormContextInput({
    defaultValue,
    id,
    onChange,
    onKeyUp,
    onClear,
    onSubmit,
    value,
  });
  const inputRef = /** @type {typeof useRef<HTMLInputElement>} */ (useRef)(null);

  const onChangeSetCursorPosition = useRememberCursorPosition(inputRef, value || '');

  const { addAssertiveMessage } = useAriaMessaging();

  const showClearIcon = !!((isClearable || onClear) && currentValue);

  const clearInput = useCallback(
    /** @param {React.UIEvent} e */
    (e) => {
      if (currentOnClear) {
        currentOnClear(e);
      } else if (inputRef.current) {
        inputRef.current.value = '';
      }
      addAssertiveMessage(`${label} input was cleared`);
      inputRef.current?.focus();
    },
    [addAssertiveMessage, currentOnClear, label]
  );

  const checkKeyPressed = useCallback(
    /** @param {React.KeyboardEvent} e */
    (e) => {
      if (e.key === 'Escape' && showClearIcon) {
        clearInput(e);
      } else {
        currentOnFormKeyUp(e);
      }
    },
    [clearInput, currentOnFormKeyUp, showClearIcon]
  );

  const onChangeCallback = useCallback(
    /** @param {React.ChangeEvent<HTMLElement>} e */
    (e) => {
      onChangeSetCursorPosition(e);
      currentOnChange?.(e);
    },
    [onChangeSetCursorPosition, currentOnChange]
  );

  return (
    <div className={joinClassNames('input-wrapper', 'input-wrapper--text-input', wrapperClassName)} ref={innerRef}>
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <div className="text-input__inner-wrapper">
        <input
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          aria-invalid={!!errorMessage}
          className={joinClassNames(className, showClearIcon ? 'text-input--clear-icon-visible' : null)}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={currentOnChange && onChangeCallback}
          // @ts-ignore
          onKeyUp={onKeyUp || checkKeyPressed}
          placeholder={placeholder || undefined}
          ref={inputRef}
          required={isRequired}
          type="text"
          value={currentValue}
          {...rest}
        />
        {
          (showClearIcon)
            ? (
              <IconButton
                className={joinClassNames('text-input__clear-button icon-button--borderless icon-button--small1x')}
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={clearInput}
                title="Clear input"
                isDisabled={isDisabled}
              />
            )
            : null
        }
        {rightContent}
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
