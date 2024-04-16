import { useCallback, useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';
import { useGlobalKeyEvent } from '../../hooks/useGlobalKeyEvent';
import { joinClassNames } from '../../util/joinClassNames';
import { CalendarInput } from '../forms/CalendarInput/CalendarInput';
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
 * @param {import('react').RefObject<HTMLDivElement>} props.popperReferenceElement
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
  popperReferenceElement,
  setIsPopupOpen,
  tableFilterDateId,
  value,
}) {
  const beginDateRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const [currentInput, setCurrentInput] = useImmer(/** @type {BeginEndDate} */(BeginEndDates.BEGIN));

  useEffect(
    () => {
      // when popup first opens, focus on the begin date
      if (isPopupOpen) {
        const beginDateInput = beginDateRef.current?.querySelector('.date-input');
        // @ts-ignore
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
      referenceElement={popperReferenceElement}
      role="dialog"
    >
      <DateInput
        className="table-filter-date-popup__begin-date"
        dateFormat={dateFormat}
        hasCalendarPopup={false}
        id={`${tableFilterDateId}__begin-date`}
        innerRef={beginDateRef}
        isClearable
        label="Date Begin"
        onChange={(newValue) => onChange(formatNewValue(BeginEndDates.BEGIN, newValue, beginDateStr, endDateStr))}
        onClear={() => onChange(formatNewValue(BeginEndDates.BEGIN, '', beginDateStr, endDateStr))}
        value={beginDateStr}
        // @ts-ignore
        onFocus={() => setCurrentInput(BeginEndDates.BEGIN)}
      />
      <DateInput
        className="table-filter-date-popup__end-date"
        dateFormat={dateFormat}
        hasCalendarPopup={false}
        id={`${tableFilterDateId}__end-date`}
        isClearable
        label="Date End"
        onChange={(newValue) => onChange(formatNewValue(BeginEndDates.END, newValue, beginDateStr, endDateStr))}
        onClear={() => onChange(formatNewValue(BeginEndDates.END, '', beginDateStr, endDateStr))}
        value={endDateStr}
        // @ts-ignore
        onFocus={() => setCurrentInput(BeginEndDates.END)}
      />
      <CalendarInput
        className="table-filter-date-popup__calendar"
        dateFormat={dateFormat}
        id={`${tableFilterDateId}__calendar`}
        label={`Calendar for table filter ${currentInput === BeginEndDates.BEGIN ? 'begin' : 'end'} date`}
        labelClassName="visually-hidden"
        onChange={(newValue) => onChange(formatNewValue(currentInput, newValue, beginDateStr, endDateStr))}
        showTodayButton
        value={(currentInput === BeginEndDates.BEGIN ? beginDateStr : endDateStr) ?? ''}
      />
    </Popup>
  );
}
