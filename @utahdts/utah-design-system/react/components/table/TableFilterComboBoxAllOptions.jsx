import { identity, uniq } from 'lodash';
import { useMemo } from 'react';
import { chainSorters } from '../../util/chainSorters';
import { joinClassNames } from '../../util/joinClassNames';
import { ComboBox } from '../forms/ComboBox/ComboBox';
import { ComboBoxOption } from '../forms/ComboBox/ComboBoxOption';
import { useTableContext } from './hooks/useTableContext';
import { useTableFilterRegistration } from './hooks/useTableFilterRegistration';
import { useCurrentValuesFromStateContext } from './useCurrentValuesFromStateContext';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string | number} [props.defaultValue]
 * @param {boolean} [props.exactMatch]
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
 * @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
 * @param {(() => {})} [props.onChange]
 * @param {string} [props.placeholder]
 * @param {string} props.recordFieldPath
 * @param {string} [props.value]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterComboBoxAllOptions({
  a11yLabel,
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
  const { allData, state: { tableId } } = useTableContext();
  const dataOptions = useMemo(
    () => (
      // get all possible values from each datum's `recordFieldPath`
      uniq(
        allData.map((datum) => datum[recordFieldPath])
          .filter(identity)
      )
        .sort(chainSorters([
          (a, b) => (a < b ? -1 : 0),
          (a, b) => (a > b ? 1 : 0),
        ]))
    ),
    [allData]
  );

  // keep the default settings object from being recreated every render so that it does not trigger filter registration
  useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch: !!exactMatch });

  return (
    <th
      className={joinClassNames('table-header__cell table-header__cell--filter-combo-box', className)}
      id={id ?? undefined}
      ref={innerRef}
      {...rest}
    >
      <ComboBox
        id={`table-filter-combo-box-all-options__${recordFieldPath}__${tableId}`}
        isClearable
        label={`Filter ${a11yLabel}`}
        onChange={currentOnChange}
        onClear={() => setValue('')}
        placeholder={placeholder ?? 'Filter'}
        value={currentValue?.toString()}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        <ComboBoxOption
          className={className ?? undefined}
          label=""
          value=""
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
        {
          // create combo box options for each possible data value
          dataOptions.map((dataOption) => (
            <ComboBoxOption
              className={className ?? undefined}
              key={`${id || 'table-filter-combo-box-all-options'}-${recordFieldPath}-${dataOption}`}
              label={dataOption}
              value={dataOption}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...rest}
            />
          ))
        }
      </ComboBox>
    </th>
  );
}
