import { joinClassNames } from '../../util/joinClassNames';
import { Icons } from '../icons/Icons';
import { useFormContextInput } from './FormContext/useFormContextInput';
import { TextInput } from './TextInput';

/**
 * @template FormEventT
 * @typedef {import('react').FormEvent<FormEventT>} FormEvent
 */

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name] defaults to id if not provided
 * @param {import('react').ChangeEventHandler<HTMLInputElement>} [props.onChange] e => {}; can be omitted for uncontrolled OR using form's onChange
 * @param {import('react').MouseEventHandler<HTMLInputElement>} [props.onClear]
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function DateInput({
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
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
    onFormKeyUp: currentOnFormKeyUp,
    onClear: currentOnClear,
    value: currentValue,
  } = useFormContextInput({
    defaultValue,
    id,
    onChange,
    onClear,
    value,
  });

  return (
    <div
      className={joinClassNames('input-wrapper input-wrapper--date-input', wrapperClassName)}
      ref={innerRef}
    >
      <div className="input-wrapper--date-input-inner">
        <div>
          <TextInput
            className={className}
            errorMessage={errorMessage}
            id={id}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isRequired={isRequired}
            label={label}
            labelClassName={labelClassName}
            name={name}
            onChange={currentOnChange}
            onClear={currentOnClear}
            // TODO: down arrow should open calendar picker
            onKeyUp={currentOnFormKeyUp}
            placeholder={placeholder}
            value={currentValue}
            // @ts-ignore
            onClick={() => {
              console.log('should pop open the calendar picker');
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
          {/* TODO: calendar icon goes here */}
          <Icons.IconSadFace />
        </div>
      </div>
    </div>
  );
}
