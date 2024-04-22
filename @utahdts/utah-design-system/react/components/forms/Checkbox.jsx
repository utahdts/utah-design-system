import { joinClassNames } from '../../util/joinClassNames';
import { ErrorMessage } from './ErrorMessage';
import { useFormContextInput } from './FormContext/useFormContextInput';
import { RequiredStar } from './RequiredStar';

/**
 * @template FormEventT
 * @typedef {import('react').FormEvent<FormEventT>} FormEvent
 */

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {boolean} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {import('react').ChangeEventHandler<HTMLInputElement>} [props.onChange] e => {}; can be omitted for uncontrolled OR using form's onChange
 * @param {(() => void)} [props.onSubmit]
 * @param {boolean} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function Checkbox({
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
  const {
    onChange: currentOnChange,
    onFormKeyUp: currentOnFormKeyUp,
    value: currentValue,
  } = useFormContextInput({
    defaultValue,
    id,
    onChange,
    onSubmit,
    value,
  });

  return (
    <div className={joinClassNames('input-wrapper input-wrapper--checkbox', wrapperClassName)} ref={innerRef}>
      <div className="input-wrapper--checkbox-inner">
        <label htmlFor={id} className={labelClassName ?? undefined}>
          {label}
          {isRequired ? <RequiredStar /> : null}
        </label>
        <input
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          checked={currentValue}
          className={className}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={currentOnChange}
          onKeyUp={currentOnFormKeyUp}
          required={isRequired}
          type="checkbox"
          {...rest}
        />
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
