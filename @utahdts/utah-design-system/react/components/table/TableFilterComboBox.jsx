import { joinClassNames } from '../../util/joinClassNames';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';
import { useTableContext } from './hooks/useTableContext';
import { ComboBox } from '../forms/ComboBox/ComboBox';

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
    // @ts-ignore
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

  useTableFilterRegistration(recordFieldPath, !!exactMatch, defaultValue);

  const { state: { tableId } } = useTableContext();
  return (
    <th className={joinClassNames('table-header__cell table-header__cell--filter-combo-box', className)} id={id ?? undefined} ref={innerRef} {...rest}>
      <ComboBox
        id={`${tableId}__table-filter-combo-box-${recordFieldPath}`}
        isClearable
        label={`Filter ${a11yLabel}`}
        // @ts-ignore
        onChange={currentOnChange}
        onClear={() => setValue('')}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </ComboBox>
    </th>
  );
}
