import {
  add,
  format,
  isValid,
  parse
} from 'date-fns';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react';
import { Button, IconButton, useAriaMessaging } from '../../../..';
import { joinClassNames } from '../../../util/joinClassNames';
import { useOnKeyUp } from '../../../util/useOnKeyUp';
import { ErrorMessage } from '../ErrorMessage';
import { useFormContextInputValue } from '../FormContext/useFormContextInputValue';
import { RequiredStar } from '../RequiredStar';
import { calendarGrid } from './calendarGrid';

let oldMoveCurrentValueFocusTimeoutId = NaN;
/**
 * @param {string} calendarInputId
 * @param {Date | null} oldDate
 * @param {string} dateFormat
 * @param {import('date-fns').Duration} duration
 * @returns {Date | null}
 */
function moveCurrentValueFocus(calendarInputId, oldDate, dateFormat, duration) {
  const newDate = add((oldDate && isValid(oldDate)) ? oldDate : new Date(), duration);

  clearTimeout(oldMoveCurrentValueFocusTimeoutId);
  // focus on the next date; delay so that the new month's view draws before it tries to focus on the new date
  oldMoveCurrentValueFocusTimeoutId = window.setTimeout(
    () => {
      document.getElementById(`${calendarInputId}__${format(newDate, dateFormat)}`)?.focus();
    },
    0
  );

  return newDate;
}

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.dateFormat] use `date-fns` modifiers for formatting the date https://date-fns.org/v3.2.0/docs/format
 * @param {string} [props.defaultValue] expects value to be in format of props.dateFormat
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isHidden] a dateInput will hide its calendar popup when not in use
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {(newValue: string) => void} [props.onChange] e => {}; can be omitted for uncontrolled OR using form's onChange
 * @param {boolean} [props.shouldSetFocusOnMount] if rendered in a popup, then set focus to first focusable element when first shown
 * @param {boolean} [props.showTodayButton]
 * @param {string | null} [props.value] expects value to be in format of props.dateFormat
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function CalendarInput({
  className,
  dateFormat = 'MM/dd/yyyy',
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isDisabled,
  isHidden,
  isRequired,
  label,
  labelClassName,
  onChange,
  shouldSetFocusOnMount,
  showTodayButton,
  value,
  wrapperClassName,
  ...rest
}) {
  const { addPoliteMessage } = useAriaMessaging();
  const calendarInputId = useId();
  const firstFocusableElementRef = useRef(/** @type {any | null} */(null));
  const {
    onChange: currentOnChange,
    value: currentValue,
  } = useFormContextInputValue({
    id,
    defaultValue,
    onChange,
    value,
  });

  // currentValueDate is the currently selected date
  const currentValueDate = currentValue ? parse(currentValue, dateFormat, new Date()) : null;

  // currentValueDateInternal is the currently focused date (not necessarily the selected/value date)
  const [currentValueDateInternal, setCurrentValueDateInternal] = useState(/** @type {Date | null} */(null));

  // if new value passed in, move to that month
  useEffect(
    () => {
      if (currentValueDateInternal?.getTime() !== currentValueDate?.getTime()) {
        setCurrentValueDateInternal((currentValueDate && isValid(currentValueDate)) ? currentValueDate : new Date());
      }
    },
    [currentValueDate?.getTime()]
  );

  // focus on first element when popped open
  useEffect(
    () => {
      if (shouldSetFocusOnMount && !isHidden) {
        firstFocusableElementRef.current?.focus();
      }
    },
    [shouldSetFocusOnMount, isHidden]
  );

  const calendarMonthDate = (currentValueDateInternal && isValid(currentValueDateInternal)) ? currentValueDateInternal : new Date();
  const calendarGridValues = useMemo(() => calendarGrid(currentValueDateInternal, currentValueDate), [currentValueDateInternal, value]);

  const onDownArrowPress = useOnKeyUp(
    'ArrowDown',
    useCallback(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { weeks: 1 })), []),
    true
  );

  const onUpArrowPress = useOnKeyUp(
    'ArrowUp',
    useCallback(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { weeks: -1 })), []),
    true
  );

  const onLeftArrowPress = useOnKeyUp(
    'ArrowLeft',
    useCallback(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { days: -1 })), []),
    true
  );

  const onRightArrowPress = useOnKeyUp(
    'ArrowRight',
    useCallback(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { days: 1 })), []),
    true
  );

  return (
    <div
      className={joinClassNames('input-wrapper input-wrapper--calendar-input', wrapperClassName, className)}
      ref={innerRef}
      {...rest}
    >
      <label htmlFor={id} className={labelClassName ?? undefined}>
        {label}
        {isRequired ? <RequiredStar /> : null}
      </label>
      <div className="calendar-input__controls">
        <div className="calendar-input__controls-month">
          <div>
            {
              shouldSetFocusOnMount
                ? (
                  <div
                    aria-label="You are in a calendar date picker. Press tab to interact. Use arrow keys on days to navigate."
                    className="calendar-input__first-focusable-element"
                    ref={firstFocusableElementRef}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex={0}
                  >
                    {/* First focusable item w/o tooltip */}
                  </div>
                )
                : null
            }
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-chevron-left" aria-hidden="true" />}
              innerRef={shouldSetFocusOnMount ? undefined : firstFocusableElementRef}
              isDisabled={isDisabled}
              onClick={() => (
                setCurrentValueDateInternal((draftDate) => {
                  const newDate = add((draftDate && isValid(draftDate)) ? draftDate : new Date(), { months: -1 });
                  addPoliteMessage(`Month has changed to ${format(newDate, 'MMMM yyyy')}`);
                  return newDate;
                })
              )}
              title="Previous Month"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
          <div className="calendar-input__month">{format(calendarMonthDate, 'MMMM')}</div>
          <div>
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-chevron-right" aria-hidden="true" />}
              isDisabled={isDisabled}
              onClick={() => (
                setCurrentValueDateInternal((draftDate) => {
                  const newDate = add((draftDate && isValid(draftDate)) ? draftDate : new Date(), { months: 1 });
                  addPoliteMessage(`Month has changed to ${format(newDate, 'MMMM yyyy')}`);
                  return newDate;
                })
              )}
              title="Next Month"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
        </div>
        <div className="calendar-input__controls-year">
          <div>
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-double-arrow-left" aria-hidden="true" />}
              isDisabled={isDisabled}
              onClick={() => (
                setCurrentValueDateInternal((draftDate) => {
                  const newDate = add((draftDate && isValid(draftDate)) ? draftDate : new Date(), { years: -1 });
                  addPoliteMessage(`Year has changed to ${newDate.getFullYear()}`);
                  return newDate;
                })
              )}
              title="Last Year"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
          <div className="calendar-input__year">{calendarMonthDate.getFullYear()}</div>
          <div>
            <IconButton
              className="icon-button--small1x icon-button--borderless"
              icon={<span className="utds-icon-before-double-arrow-right" aria-hidden="true" />}
              isDisabled={isDisabled}
              onClick={() => (
                setCurrentValueDateInternal((draftDate) => {
                  const newDate = add((draftDate && isValid(draftDate)) ? draftDate : new Date(), { years: 1 });
                  addPoliteMessage(`Year has changed to ${newDate.getFullYear()}`);
                  return newDate;
                })
              )}
              title="Next Year"
              // @ts-ignore
              tabIndex={isHidden ? -1 : 0}
            />
          </div>
        </div>
      </div>
      <div className="calendar-input__grid" id={id}>
        <div className="calendar-input__row" role="row">
          <span className="calendar-input__cell-header" role="gridcell">Su</span>
          <span className="calendar-input__cell-header" role="gridcell">Mo</span>
          <span className="calendar-input__cell-header" role="gridcell">Tu</span>
          <span className="calendar-input__cell-header" role="gridcell">We</span>
          <span className="calendar-input__cell-header" role="gridcell">Th</span>
          <span className="calendar-input__cell-header" role="gridcell">Fr</span>
          <span className="calendar-input__cell-header" role="gridcell">Sa</span>
        </div>
        {
          calendarGridValues.map(
            (weekGridValues, weekGridValuesIndex) => (
              <div
                className="calendar-input__row"
                // eslint-disable-next-line react/no-array-index-key
                key={`calendar-input__row__${weekGridValuesIndex}`}
                role="row"
              >
                {
                  weekGridValues.map((cellGridValue) => {
                    const formattedDate = format(cellGridValue.date, dateFormat);
                    return (
                      <Button
                        aria-label={format(cellGridValue.date, 'EEEE MMMM do yyyy')}
                        className={joinClassNames(
                          'calendar-input__cell',
                          cellGridValue.isFocusDate && 'calendar-input__cell--focused',
                          cellGridValue.isNextMonth && 'calendar-input__cell--next-month',
                          cellGridValue.isPreviousMonth && 'calendar-input__cell--previous-month',
                          cellGridValue.isSelectedDate && 'calendar-input__cell--selected',
                          cellGridValue.isTodayDate && 'calendar-input__cell--today'
                        )}
                        id={`${calendarInputId}__${formattedDate}`}
                        isDisabled={isDisabled}
                        key={`calendar-input__cell__${cellGridValue.date.getTime()}`}
                        onClick={() => {
                          currentOnChange?.(formattedDate);
                        }}
                        type="button"
                        // @ts-ignore
                        onKeyDown={(e) => {
                          if (
                            [
                              'ArrowDown',
                              'ArrowUp',
                              'ArrowLeft',
                              'ArrowRight',
                            ]
                              .includes(e.key)
                          ) {
                            e.preventDefault();
                            e.stopPropagation();
                          }
                        }}
                        onKeyUp={
                          /** @param {import('react').KeyboardEvent<HTMLButtonElement>} e */
                          (e) => {
                            onDownArrowPress(e);
                            onUpArrowPress(e);
                            onLeftArrowPress(e);
                            onRightArrowPress(e);
                          }
                        }
                        role="gridcell"
                        tabIndex={(isHidden || !cellGridValue.isFocusDate) ? -1 : 0}
                      >
                        <span aria-hidden>{cellGridValue.date.getDate()}</span>
                      </Button>
                    );
                  })
                }
              </div>
            )
          )
        }
      </div>
      {
        showTodayButton
          ? (
            <div className="calendar-input__today" id={id}>
              <button
                className="button--small"
                onClick={() => {
                  setCurrentValueDateInternal(new Date());
                  currentOnChange(format(new Date(), dateFormat));
                }}
                type="button"
              >
                Today
              </button>
            </div>
          )
          : null
      }
      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
