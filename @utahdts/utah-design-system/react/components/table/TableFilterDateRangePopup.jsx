import { useCallback, useEffect, useRef } from 'react';
import { useGlobalKeyEvent } from '../../hooks/useGlobalKeyEvent';
import { joinClassNames } from '../../util/joinClassNames';
import { DateInput } from '../forms/DateInput';
import { Popup } from '../popups/Popup';
import { tableConstants } from './tableConstants';

/** @typedef { 'BEGIN' | 'END' } BeginEndDate */
/** @enum {BeginEndDate} */
const BeginEndDates = {
  BEGIN: /** @type {BeginEndDate} */ ('BEGIN'),
  END: /** @type {BeginEndDate} */ ('END'),
};

/**
 * @param {BeginEndDate} whichInput
 * @param {string} newValue
 * @param {string | undefined} currentBeginDate
 * @param {string | undefined} currentEndDate
 * @returns {string}
 */
function formatNewValue(whichInput, newValue, currentBeginDate, currentEndDate) {
  const beginDateStr = whichInput === BeginEndDates.BEGIN ? newValue : (currentBeginDate || '');
  const endDateStr = whichInput === BeginEndDates.END ? newValue : (currentEndDate || '');
  return `${beginDateStr}${tableConstants.dateFilterSeparator}${endDateStr}`;
}

/**
 * @param {object} props
 * @param {string} [props.dateFormat]
 * @param {string} props.id
 * @param {boolean} props.isPopupOpen
 * @param {(newValue: string) => void} props.onChange
 * @param {import('react').RefObject<HTMLDivElement | null>} props.popupReferenceElement
 * @param {(isPopupOpen: boolean) => void} props.setIsPopupOpen
 * @param {string} props.tableFilterDateId
 * @param {string} props.value
 * @returns {import('react').JSX.Element}
 */
export function TableFilterDateRangePopup({
  dateFormat,
  id,
  isPopupOpen,
  onChange,
  popupReferenceElement,
  setIsPopupOpen,
  tableFilterDateId,
  value,
}) {
  const beginDateRef = useRef(/** @type {HTMLDivElement | null} */(null));

  useEffect(
    () => {
      // when popup first opens, focus on the begin date
      if (isPopupOpen) {
        const beginDateInput = beginDateRef.current?.querySelector('.date-input');
        // @ts-expect-error
        beginDateInput?.focus();
      }
    },
    [isPopupOpen]
  );

  const [beginDateStr, endDateStr] = (value || '').split(tableConstants.dateFilterSeparator);

  // close popup anytime the escape key is pressed
  useGlobalKeyEvent({ whichKeyCode: 'Escape', onKeyUp: useCallback(() => setIsPopupOpen(false), []) });

  return (
    <Popup
      ariaLabelledBy={tableFilterDateId}
      className={joinClassNames(
        'table-filter-date__popup',
        !isPopupOpen && 'visually-hidden'
      )}
      hasCloseButton
      id={id}
      isVisible={isPopupOpen}
      onVisibleChange={(_, isVisible) => setIsPopupOpen(isVisible)}
      referenceElement={popupReferenceElement}
      role="dialog"
    >
      <div className="flex gap-xs full-width">
        <DateInput
          ariaLabel="Date Filter Date Begin."
          className="table-filter-date-popup__begin-date"
          dateFormat={dateFormat}
          id={`table-filter-date-range-popup__${tableFilterDateId}__begin-date`}
          innerRef={beginDateRef}
          isClearable
          label="Date Begin"
          onChange={(newValue) => onChange(formatNewValue(BeginEndDates.BEGIN, newValue, beginDateStr, endDateStr))}
          onClear={() => onChange(formatNewValue(BeginEndDates.BEGIN, '', beginDateStr, endDateStr))}
          value={beginDateStr}
        />
        <div className="flex flex-col justify-end">
          <span
            className="utds-icon-before-arrow-right date-input__icon-static"
            aria-hidden="true"
          />
          <span className="visually-hidden">
            to
          </span>
        </div>
        <DateInput
          ariaLabel="Date Filter Date End."
          className="table-filter-date-popup__end-date"
          dateFormat={dateFormat}
          id={`table-filter-date-range-popup__${tableFilterDateId}__end-date`}
          isClearable
          label="Date End"
          onChange={(newValue) => onChange(formatNewValue(BeginEndDates.END, newValue, beginDateStr, endDateStr))}
          onClear={() => onChange(formatNewValue(BeginEndDates.END, '', beginDateStr, endDateStr))}
          value={endDateStr}
        />
      </div>
    </Popup>
  );
}
