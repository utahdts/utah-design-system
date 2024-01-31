import { MultiSelectComboBox } from './MultiSelectComboBox';
import MultiSelectContextProvider from './context/MultiSelectContextProvider';

/**
 * @param {object} props
 * @param {boolean} [props.allowCustomEntry] can the user type in their own items to add to the list?
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string[]} [props.defaultValues]
 * @param {string} [props.errorMessage]
 * @param {string} props.id
 * @param {import('react').RefObject<HTMLDivElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name]
 * @param {((newValue: string[]) => void)} [props.onChange]
 * @param {() => void} [props.onClear]
 * @param {(customValue: string) => void} [props.onCustomEntry] caller is responsible for adding options when they are added
 * @param {string} [props.placeholder]
 * @param {string[]} [props.values]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function MultiSelect({
  allowCustomEntry,
  children,
  className,
  defaultValues,
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
  onCustomEntry,
  placeholder,
  values,
  wrapperClassName,
  ...rest
}) {
  return (
    <MultiSelectContextProvider
      defaultValues={defaultValues}
      multiSelectId={id}
      onChange={onChange}
      onClear={onClear}
      values={values}
    >
      <MultiSelectComboBox
        allowCustomEntry={allowCustomEntry}
        className={className}
        errorMessage={errorMessage}
        innerRef={innerRef}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRequired={isRequired}
        label={label}
        labelClassName={labelClassName}
        name={name}
        onCustomEntry={onCustomEntry}
        placeholder={placeholder}
        wrapperClassName={wrapperClassName}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </MultiSelectComboBox>
    </MultiSelectContextProvider>
  );
}
