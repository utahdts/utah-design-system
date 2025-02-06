import { joinClassNames } from '../../util/joinClassNames';
import { ComboBox } from '../forms/ComboBox/ComboBox';
import { useTableContext } from './hooks/useTableContext';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';

/**
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string | number} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {(() => {})} [props.onChange]
 * @param {string} [props.placeholder]
 * @param {string} props.recordFieldPath
 * @param {string | number} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterComboBox({
  a11yLabel,
  children,
  className,
  defaultValue,
  exactMatch,
  id,
  innerRef,
  onChange,
  placeholder,
  recordFieldPath,
  value,
  ...rest
}) {
  const {
    currentOnChange,
    currentValue,
    setValue,
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    defaultOnChange: (
      /**
       * @param {string} newValue
       * @returns {string}
       */
      (newValue) => newValue
    ),
    defaultValue,
    onChange,
    value,
  });

  useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch: !!exactMatch });

  const { state: { tableId } } = useTableContext();
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-combo-box', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      <ComboBox
        id={`table-filter-combo-box__${tableId}__${recordFieldPath}`}
        isClearable
        label={`Filter ${a11yLabel}`}
        onChange={currentOnChange}
        onClear={() => setValue('')}
        placeholder={placeholder ?? 'Filter'}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </ComboBox>
    </th>
  );
}
