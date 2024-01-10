import { add, format } from 'date-fns';

/** @typedef {import('@utahdts/utah-design-system').CalendarGridValue} CalendarGridValue */
/** @typedef {import('@utahdts/utah-design-system').CalendarGridMonth} CalendarGridMonth */

/**
 * @param {Date | null} dateA
 * @param {Date | null} dateB
 * @returns {boolean}
 */
function dateIsEqualYMD(dateA, dateB) {
  return (
    !!dateA && !!dateB
    && dateA.getFullYear() === dateB.getFullYear()
    && dateA.getMonth() === dateB.getMonth()
    && dateA.getDate() === dateB.getDate()
  );
}

/**
 * @param {Date} infoDate
 * @param {Date} focusDate
 * @param {Date | null} selectedDate
 * @returns {CalendarGridValue}
 */
function constructCalendarGridValue(infoDate, focusDate, selectedDate) {
  return {
    date: infoDate,
    isFocusDate: dateIsEqualYMD(infoDate, focusDate),
    isSelectedDate: dateIsEqualYMD(infoDate, selectedDate),
    isNextMonth: add(focusDate, { months: 1 }).getMonth() === infoDate.getMonth(),
    isPreviousMonth: add(focusDate, { months: -1 }).getMonth() === infoDate.getMonth(),
  };
}

/**
 * @param {Date} focusDate
 * @param {Date | null} selectedDate
 * @returns {CalendarGridMonth}
 */
export function calendarGrid(focusDate, selectedDate) {
  const firstOfMonth = new Date(focusDate.getFullYear(), focusDate.getMonth(), 1);
  const startDayOfWeek = Number(format(firstOfMonth, 'e'));

  /** @type {CalendarGridMonth} */
  const calendarGridMonth = [];

  // some month grids have only 4 (aug 2025) or even 6 (feb 2026) rows!
  for (
    let loopDate = add(firstOfMonth, { days: -1 * startDayOfWeek + 1 });
    loopDate.getFullYear() <= focusDate.getFullYear()
    && (
      // current is 01/2023 so previous is 12/2024
      loopDate.getFullYear() < focusDate.getFullYear()
      // current is same year as previous, so month has to be <=
      || loopDate.getMonth() <= focusDate.getMonth()
      // has moved to next month, but last row is not yet filled, so finish filling it
      || calendarGridMonth[calendarGridMonth.length - 1]?.length !== 7
    );
    loopDate = add(loopDate, { days: 1 })
  ) {
    if (calendarGridMonth.length === 0 || calendarGridMonth[calendarGridMonth.length - 1]?.length === 7) {
      // @ts-ignore
      calendarGridMonth.push([]);
    }
    calendarGridMonth[calendarGridMonth.length - 1]?.push(constructCalendarGridValue(loopDate, focusDate, selectedDate));
  }
  return calendarGridMonth;
}
