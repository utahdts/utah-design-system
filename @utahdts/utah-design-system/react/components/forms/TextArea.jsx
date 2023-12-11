// @ts-check
import React, { useCallback, useRef } from 'react';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import useRememberCursorPosition from '../../hooks/useRememberCursorPosition';
import joinClassNames from '../../util/joinClassNames';
import IconButton from '../buttons/IconButton';
import ErrorMessage from './ErrorMessage';
import useFormContextInput from './FormContext/useFormContextInput';
import RequiredStar from './RequiredStar';

/** @typedef {import('@utahdts/utah-design-system').EventAction} EventAction */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {React.RefObject<HTMLDivElement>} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {EventAction} [props.onChange]
 * @param {EventAction} [props.onClear]
 * @param {(() => void)} [props.onSubmit]
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
export default function TextArea({
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
  onSubmit,
  placeholder,
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
    onClear,
    onSubmit,
    value,
  });
  const inputRef = /** @type {typeof useRef<HTMLTextAreaElement | null>} */ (useRef)(null);

  const onChangeSetCursorPosition = useRememberCursorPosition(inputRef, value || '');

  const { addAssertiveMessage } = useAriaMessaging();

  const showClearIcon = !!((isClearable || onClear) && currentValue);

  const clearInput = useCallback((e) => {
    currentOnClear?.(e);
    addAssertiveMessage(`${label} input was cleared`);
    inputRef.current?.focus();
  }, [addAssertiveMessage, currentOnClear, label]);

  const checkKeyPressed = useCallback((e) => {
    if (e.key === 'Escape' && showClearIcon) {
      clearInput(e);
    } else {
      currentOnFormKeyUp(e);
    }
  }, [clearInput, currentOnFormKeyUp, showClearIcon]);

  const onChangeCallback = useCallback(
    (e) => {
      onChangeSetCursorPosition(e);
      currentOnChange?.(e);
    },
    [onChangeSetCursorPosition, currentOnChange]
  );

  return (
    <div className={joinClassNames('input-wrapper', 'input-wrapper--text-area', wrapperClassName)} ref={innerRef}>
      <label htmlFor={id} className={joinClassNames('text-area__label', labelClassName)}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <div className="text-area__inner-wrapper">
        <textarea
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          aria-invalid={!!errorMessage}
          className={joinClassNames(className, showClearIcon ? 'text-area--clear-icon-visible' : null)}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={currentValue !== undefined ? onChangeCallback : undefined}
          onKeyUp={checkKeyPressed}
          placeholder={placeholder ?? undefined}
          ref={inputRef}
          required={isRequired}
          value={currentValue}
          {...rest}
        />
        {
          (showClearIcon)
            ? (
              <IconButton
                className={joinClassNames('text-area__clear-button icon-button--borderless icon-button--small1x')}
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={clearInput}
                title="Clear input"
                isDisabled={isDisabled}
              />
            )
            : null
        }
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
