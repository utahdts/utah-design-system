// @ts-check
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import useAriaMessaging from '../../contexts/UtahDesignSystemContext/hooks/useAriaMessaging';
import useCurrentValuesFromForm from '../../hooks/forms/useCurrentValuesFromForm';
import RefShape from '../../propTypesShapes/RefShape';
import joinClassNames from '../../util/joinClassNames';
import IconButton from '../buttons/IconButton';
import ErrorMessage from './ErrorMessage';
import SelectOption from './SelectOption';

/** @typedef {import('../../jsDocTypes').EventAction} EventAction */

const propTypes = {
  // children are the options
  children: PropTypes.node,
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
  children: null,
  className: null,
  defaultValue: null,
  errorMessage: null,
  innerRef: null,
  isClearable: false,
  isDisabled: false,
  isRequired: null,
  labelClassName: null,
  name: null,
  placeholder: null,
  onChange: null,
  onClear: null,
  onSubmit: null,
  value: null,
  wrapperClassName: null,
};

/**
 * @param {Object} props
 * @param {React.ReactNode | null} [props.children]
 * @param {string | null} [props.className]
 * @param {string | null} [props.defaultValue]
 * @param {string | null} [props.errorMessage]
 * @param {React.RefObject | null} [props.innerRef]
 * @param {string} props.id
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean | null} [props.isRequired]
 * @param {string} props.label
 * @param {string | null} [props.labelClassName]
 * @param {string | null} [props.name]
 * @param {EventAction | null} [props.onChange]
 * @param {EventAction | null} [props.onClear]
 * @param {(() => void) | null} [props.onSubmit]
 * @param {string | null} [props.placeholder]
 * @param {string | null} [props.value]
 * @param {string | null} [props.wrapperClassName]
 * @returns {JSX.Element}
 */
function Select({
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
  onSubmit,
  placeholder,
  value,
  wrapperClassName,
  ...rest
}) {
  // TODO: add a clear button like TextInput
  // TODO: on escape key clears select
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
  const selectInputRef = /** @type {typeof useRef<HTMLSelectElement>} */ (useRef)(null);

  const { addAssertiveMessage } = useAriaMessaging();

  const clearInput = useCallback(
    (e) => {
      currentOnClear(e);
      addAssertiveMessage(`${label} input was cleared`);
      selectInputRef.current?.focus();
    },
    [addAssertiveMessage, currentOnClear, label]
  );

  const showClearIcon = !!((isClearable || onClear) && currentValue);

  return (
    <div className={joinClassNames('input-wrapper input-wrapper--select', wrapperClassName)} ref={innerRef}>
      <label htmlFor={id} className={labelClassName ?? undefined}>{label}</label>
      <div className="select-input__inner-wrapper">
        <select
          aria-describedby={currentErrorMessage ? `${id}-error` : undefined}
          className={joinClassNames(className, showClearIcon ? 'text-input--clear-icon-visible' : null)}
          defaultValue={defaultValue ?? undefined}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={useCallback((e) => { currentOnChange(e); }, [currentOnChange])}
          onKeyUp={useCallback((e) => { currentOnFormKeyPress(e); }, [currentOnFormKeyPress])}
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
                title="Clear input"
                isDisabled={isDisabled}
              />
            )
            : null
        }
      </div>
      <ErrorMessage errorMessage={currentErrorMessage} id={id} />
    </div>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
