import { SelectOption } from '../forms/SelectOption';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {import('react').RefObject<HTMLOptionElement>} [props.innerRef]
 * @param {string} props.label
 * @param {string | number} props.value
 * @returns {import('react').JSX.Element}
 */
export function TableFilterSelectOption({
  className,
  innerRef,
  label,
  value,
  ...rest
}) {
  return (
    <SelectOption
      className={className ?? undefined}
      innerRef={innerRef ?? undefined}
      label={label}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
