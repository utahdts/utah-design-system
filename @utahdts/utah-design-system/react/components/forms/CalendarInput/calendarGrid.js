import { add, format } from 'date-fns';

/** @typedef {import('@utahdts/utah-design-system').CalendarGridValue} CalendarGridValue */
/** @typedef {import('@utahdts/utah-design-system').CalendarGridMonth} CalendarGridMonth */

/**
 *
 * @param {Date} infoDate
 * @param {Date} currentDate
 * @returns {CalendarGridValue}
 */
function constructCalendarGridValue(infoDate, currentDate) {
  return {
    date: infoDate,
    isCurrentDate: (
      infoDate.getFullYear() === currentDate.getFullYear()
      && infoDate.getMonth() === currentDate.getMonth()
      && infoDate.getDay() === currentDate.getDay()
    ),
    isNextMonth: add(currentDate, { months: 1 }).getMonth() === infoDate.getMonth(),
    isPreviousMonth: add(currentDate, { months: -1 }).getMonth() === infoDate.getMonth(),
  };
}

/**
 * @param {Date} currentDate
 * @returns {CalendarGridMonth}
 */
export function calendarGrid(currentDate) {
  const firstOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const startDayOfWeek = Number(format(firstOfMonth, 'e'));

  /** @type {CalendarGridMonth} */
  const calendarGridMonth = [];

  // some month grids have only 4 (aug 2025) or even 6 (feb 2026) rows!
  for (
    let loopDate = add(firstOfMonth, { days: -1 * startDayOfWeek + 1 });
    loopDate.getFullYear() <= currentDate.getFullYear()
    && (
      // current is 01/2023 so previous is 12/2024
      loopDate.getFullYear() < currentDate.getFullYear()
      // current is same year as previous, so month has to be <=
      || loopDate.getMonth() <= currentDate.getMonth()
      // has moved to next month, but last row is not yet filled, so finish filling it
      || calendarGridMonth[calendarGridMonth.length - 1]?.length !== 7
    );
    loopDate = add(loopDate, { days: 1 })
  ) {
    if (calendarGridMonth.length === 0 || calendarGridMonth[calendarGridMonth.length - 1]?.length === 7) {
      // @ts-ignore
      calendarGridMonth.push([]);
    }
    calendarGridMonth[calendarGridMonth.length - 1]?.push(constructCalendarGridValue(loopDate, currentDate));
  }
  return calendarGridMonth;
}
