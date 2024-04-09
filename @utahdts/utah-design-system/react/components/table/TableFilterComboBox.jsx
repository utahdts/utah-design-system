import React from 'react';
import { joinClassNames } from '../../util/joinClassNames';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';
import { useTableContext } from './hooks/useTableContext';
import { ComboBox } from '../forms/ComboBox/ComboBox';

/**
 * @template TableDataT
 * @param {object} props
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {string | number} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} [props.id]
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {((e: React.ChangeEvent) => TableDataT)} [props.onChange]
 * @param {string} props.recordFieldPath
 * @param {string | number} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterComboBox({
  children,
  className,
  defaultValue,
  exactMatch,
  innerRef,
  id,
  a11yLabel,
  onChange,
  recordFieldPath,
  value,
  ...rest
}) {
  const {
    currentOnChange,
    currentValue,
  } = useCurrentValuesFromStateContext({
    contextStatePath: recordFieldPath,
    defaultOnChange: (
      /**
       * @param {import('react').BaseSyntheticEvent} e
       * @returns {any}
       */
      (e) => e.target.value
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
        label={`Filter ${a11yLabel}`}
        // @ts-ignore
        onChange={currentOnChange}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </ComboBox>
    </th>
  );
}
