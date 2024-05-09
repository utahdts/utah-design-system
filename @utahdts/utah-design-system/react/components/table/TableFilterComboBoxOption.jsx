import { ComboBoxOption } from '../forms/ComboBox/ComboBoxOption';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} props.label
 * @param {string} props.value
 * @returns {import('react').JSX.Element}
 */
export function TableFilterComboBoxOption({
  className,
  label,
  value,
  ...rest
}) {
  return (
    <ComboBoxOption
      className={className ?? undefined}
      label={label}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
