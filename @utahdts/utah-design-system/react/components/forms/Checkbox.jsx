import { joinClassNames } from '../../util/joinClassNames';
import { ErrorMessage } from './ErrorMessage';
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
 * @param {string} props.id
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {import('react').ChangeEventHandler<HTMLInputElement>} [props.onChange] e => {}; can be omitted for uncontrolled
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
  value,
  wrapperClassName,
  ...rest
}) {
  return (
    <div className={joinClassNames('input-wrapper input-wrapper--checkbox', wrapperClassName)} ref={innerRef}>
      <div className="input-wrapper--checkbox-inner">
        <label htmlFor={id} className={labelClassName ?? undefined}>
          {label}
          {isRequired ? <RequiredStar /> : null}
        </label>
        <input
          aria-describedby={errorMessage ? `${id}-error` : undefined}
          defaultChecked={defaultValue}
          checked={value}
          className={className}
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={onChange}
          required={isRequired}
          type="checkbox"
          {...rest}
        />
      </div>
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
