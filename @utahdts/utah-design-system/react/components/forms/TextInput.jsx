import { useCallback, useRef } from 'react';
import { useAriaMessaging } from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { useRememberCursorPosition } from '../../hooks/useRememberCursorPosition';
import { joinClassNames } from '../../util/joinClassNames';
import { IconButton } from '../buttons/IconButton';
import { ErrorMessage } from './ErrorMessage';
import { useFormContextInput } from './FormContext/useFormContextInput';
import { RequiredStar } from './RequiredStar';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {import('react').MutableRefObject<HTMLButtonElement | null>} [props.clearIconRef]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form, the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isClearable] should the clearable "X" icon be shown; is auto set to true if onClear is passed in
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isLabelSkipped] highly recommended to not skip the label; instead, hide it; multiselect skips label - it renders its own
 * @param {boolean} [props.isRequired]
 * @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {import('react').ChangeEventHandler<HTMLInputElement>} [props.onChange] can be omitted to be uncontrolled OR controlled by form
 * @param {import('react').KeyboardEventHandler<HTMLInputElement>} [props.onKeyUp]
 * @param {import('react').UIEventHandler<HTMLInputElement>} [props.onClear] (not needed if inside a <Form> context)
 * @param {string} [props.placeholder]
 * @param {import('react').ReactNode} [props.rightContent] custom content to put to the right of the text input
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function TextInput({
  className,
  clearIconRef,
  defaultValue,
  errorMessage,
  innerRef,
  id,
  isClearable,
  isDisabled,
  isLabelSkipped,
  isRequired,
  isShowingClearableIcon,
  label,
  labelClassName,
  name,
  onChange,
  onClear,
  onKeyUp,
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
    value,
  });
  const inputRef = /** @type {typeof useRef<HTMLInputElement>} */ (useRef)(null);

  const onChangeSetCursorPosition = useRememberCursorPosition(inputRef, value || '');

  const { addPoliteMessage } = useAriaMessaging();

  const showClearIcon = isShowingClearableIcon ?? !!((isClearable || onClear) && currentValue);

  const clearInput = useCallback(
    /** @param {import('react').UIEvent<HTMLInputElement>} e */
    (e) => {
      if (currentOnClear) {
        currentOnClear(e);
      } else if (inputRef.current) {
        inputRef.current.value = '';
      }
      addPoliteMessage(`${label} input was cleared`);
      inputRef.current?.focus();
    },
    [addPoliteMessage, currentOnClear, label]
  );

  const checkKeyPressed = useCallback(
    /** @param {import('react').KeyboardEvent<HTMLInputElement>} e */
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
    /** @param {import('react').ChangeEvent<HTMLInputElement>} e */
    (e) => {
      onChangeSetCursorPosition(e);
      currentOnChange?.(e);
    },
    [onChangeSetCursorPosition, currentOnChange]
  );

  return (
    <div className={joinClassNames('input-wrapper', 'input-wrapper--text-input', wrapperClassName)} ref={innerRef}>
      {
        isLabelSkipped
          ? null
          : (
            <label htmlFor={id} className={labelClassName ?? undefined}>
              {label}
              {isRequired ? <RequiredStar /> : null}
            </label>
          )
      }
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
                innerRef={clearIconRef}
                isDisabled={isDisabled}
                // @ts-ignore
                onClick={clearInput}
                title="Clear input"
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
