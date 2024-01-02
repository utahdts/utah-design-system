/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLOptionElement>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string | number} props.value
 * @returns {import('react').JSX.Element}
 */
export function SelectOption({
  className,
  innerRef,
  isDisabled,
  label,
  value,
  ...rest
}) {
  return (
    <option
      className={className}
      disabled={isDisabled}
      ref={innerRef}
      value={value}
      {...rest}
    >
      {label}
    </option>
  );
}
