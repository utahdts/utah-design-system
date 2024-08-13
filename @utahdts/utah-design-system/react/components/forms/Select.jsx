import { useCallback, useRef } from 'react';
import { useAriaMessaging } from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import { joinClassNames } from '../../util/joinClassNames';
import { IconButton } from '../buttons/IconButton';
import { ErrorMessage } from './ErrorMessage';
import { useFormContextInput } from './FormContext/useFormContextInput';
import { RequiredStar } from './RequiredStar';
import { SelectOption } from './SelectOption';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children] the options as children
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {string} props.id id of the input; the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {import('react').ChangeEventHandler} [props.onChange] can be omitted to be uncontrolled OR if changes are sent through form's onChange
 * @param {import('react').UIEventHandler} [props.onClear] do something when the field should be cleared (not needed if inside a <Form> context)
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function Select({
  children,
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
    value,
  });
  const selectInputRef = /** @type {typeof useRef<HTMLSelectElement>} */ (useRef)(null);

  const { addPoliteMessage } = useAriaMessaging();

  const clearInput = useCallback(
    /** @param {import('react').MouseEvent} e */
    (e) => {
      currentOnClear?.(e);
      addPoliteMessage(`${label} input was cleared`);
      selectInputRef.current?.focus();
    },
    [addPoliteMessage, currentOnClear, label]
  );

  const showClearIcon = !!((isClearable || onClear) && currentValue);

  const onChangeCallback = useCallback(
    /** @param {import('react').ChangeEvent} e */
    (e) => { currentOnChange?.(e); },
    [currentOnChange]
  );

  return (
    <div className={joinClassNames('input-wrapper input-wrapper--select', wrapperClassName)} ref={innerRef}>
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <div className="select-input__inner-wrapper">
        <select
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          className={joinClassNames(className, showClearIcon ? 'select-input--clear-icon-visible' : null)}
          defaultValue={defaultValue ?? undefined}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={currentValue !== undefined ? onChangeCallback : undefined}
          onKeyUp={useCallback(
            /** @param {import('react').KeyboardEvent} e */
            (e) => {
              if (e.key === 'Escape' && showClearIcon) {
                // @ts-expect-error
                clearInput(e);
              } else {
                currentOnFormKeyUp?.(e);
              }
            },
            [clearInput, currentOnFormKeyUp, showClearIcon]
          )}
          ref={selectInputRef}
          required={isRequired ?? undefined}
          value={currentValue}
          {...rest}
        >
          {placeholder ? <SelectOption label={placeholder} value="" isDisabled /> : null}
          {children}
        </select>
        {
          (showClearIcon)
            ? (
              <IconButton
                className={joinClassNames('select-input__clear-button icon-button--borderless icon-button--small1x')}
                icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
                onClick={clearInput}
                title="Clear select"
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
