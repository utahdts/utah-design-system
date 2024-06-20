import { tableConstants } from './tableConstants';

/**
 * @param {object} props
 * @param {string | null} props.currentValue
 * @param {string} [props.placeholder]
 * @returns {import('react').JSX.Element}
 */
export function TableFilterDateRangeButtonTitle({ currentValue, placeholder }) {
  const regex = new RegExp(`(.+)?${tableConstants.dateFilterSeparator}(.+)?`, 'g');
  const [foundMatch, beginDate, endDate] = regex.exec(currentValue || '') ?? [];
  return (
    foundMatch
      ? (
        <>
          {beginDate}
          <div>
            <span
              className="utds-icon-before-arrow-right date-input__icon-static"
              aria-hidden="true"
            />
            <span className="visually-hidden">
              to
            </span>
          </div>
          {endDate}
        </>
      )
      // eslint-disable-next-line react/jsx-no-useless-fragment
      : <>{placeholder ?? 'Filter'}</>
  );
}
