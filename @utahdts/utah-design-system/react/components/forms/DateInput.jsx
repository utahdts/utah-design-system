import { useCallback, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { useImmer } from 'use-immer';
import { popupPlacement } from '../../enums/popupPlacement';
import { useInterval } from '../../hooks/useInterval';
import { joinClassNames } from '../../util/joinClassNames';
import { useOnKeyUp } from '../../util/useOnKeyUp';
import { IconButton } from '../buttons/IconButton';
import { CalendarInput } from './CalendarInput/CalendarInput';
import { useFormContextInputValue } from './FormContext/useFormContextInputValue';
import { TextInput } from './TextInput';

/**
 * @param {HTMLDivElement | null} myWrapper
 * @returns {boolean}
 */
function isActiveElementInsideCalendarInput(myWrapper) {
  return document.activeElement?.closest('.input-wrapper--date-input') === myWrapper;
}

/**
 * @param {object} props
 * @param {string} [props.ariaLabel]
 * @param {string} [props.className]
 * @param {string} [props.dateFormat] use `date-fns` modifiers for formatting the date; used for CalendarInput
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {boolean} [props.hasCalendarPopup] defaults to true so that the calendar popup opens; otherwise entry is only textual keyboard
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').MutableRefObject<HTMLDivElement | null>} [props.innerRef]
 * @param {boolean} [props.isClearable]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isRequired]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.name] defaults to id if not provided
 * @param {(newValue: string) => void} [props.onChange] e => {}; can be omitted for uncontrolled OR using form's onChange
 * @param {() => void} [props.onClear]
 * @param {(e: React.KeyboardEvent<HTMLInputElement>) => void} [props.onKeyUp]
 * @param {string} [props.placeholder]
 * @param {boolean} [props.showCalendarTodayButton] on teh calendar popup, should the `today` button be shown
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function DateInput({
  ariaLabel,
  className,
  dateFormat,
  defaultValue,
  errorMessage,
  hasCalendarPopup = true,
  id,
  innerRef: draftInnerRef,
  isClearable,
  isDisabled,
  isRequired,
  label,
  labelClassName,
  name,
  onChange,
  onClear,
  onKeyUp,
  placeholder,
  showCalendarTodayButton,
  value,
  wrapperClassName,
  ...rest
}) {
  const wrapperInternalRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const [isCalendarPopupOpen, setIsCalendarPopupOpen] = useImmer(false);
  const popperReferenceElementRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const calendarRef = useRef(/** @type {HTMLDivElement | null} */(null));
  const { styles, attributes, update } = usePopper(
    popperReferenceElementRef.current,
    calendarRef.current,
    {
      placement: popupPlacement.BOTTOM,
      modifiers: [
        { name: 'offset', options: { offset: [0, 4] } },
      ],
    }
  );
  const {
    onChange: currentOnChange,
    onClear: currentOnClear,
    value: currentValue,
  } = useFormContextInputValue({
    id,
    defaultValue,
    onChange,
    onClear,
    value,
  });

  // update popper location on changes
  useEffect(
    () => {
      if (update) {
        update();
      }
    },
    [isCalendarPopupOpen, currentValue, update]
  );

  // check if no longer have focus when open
  useInterval(
    () => {
      if (!isActiveElementInsideCalendarInput(wrapperInternalRef.current)) {
        setIsCalendarPopupOpen(false);
      }
    },
    250,
    { isDisabled: !isCalendarPopupOpen }
  );

  const onDownArrowPress = useOnKeyUp(
    'ArrowDown',
    useCallback(
      () => setIsCalendarPopupOpen(true),
      []
    ),
    true
  );

  return (
    <div
      className={joinClassNames('input-wrapper input-wrapper--date-input', wrapperClassName)}
      ref={(ref) => {
        if (draftInnerRef) {
          draftInnerRef.current = ref;
        }
        wrapperInternalRef.current = ref;
      }}
    >
      <div className="date-input__inner-wrapper">
        <div>
          <TextInput
            // table date range filter date picker still goes to a calendar on down arrow press even if !hasCalendarPopup
            aria-label={joinClassNames(ariaLabel, 'Press down arrow to open a calendar picker')}
            className={joinClassNames(className, 'date-input')}
            errorMessage={errorMessage}
            id={id}
            innerRef={popperReferenceElementRef}
            isClearable={isClearable}
            isDisabled={isDisabled}
            isRequired={isRequired}
            label={label}
            labelClassName={labelClassName}
            name={name}
            onChange={(e) => currentOnChange(e.target.value)}
            onClear={isClearable ? currentOnClear : undefined}
            onKeyUp={(e) => {
              onDownArrowPress(e);
              onKeyUp?.(e);
            }}
            placeholder={placeholder}
            value={currentValue}
            rightContent={(
              hasCalendarPopup
                ? (
                  <IconButton
                    aria-hidden="true"
                    className="date-input__calendar-icon icon-button--borderless icon-button--small"
                    icon={<span className="utds-icon-before-calendar " aria-hidden="true" />}
                    isDisabled={isDisabled}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCalendarPopupOpen((isOpen) => {
                        if (isOpen) {
                          const textInput = popperReferenceElementRef.current?.querySelector('input[type="text"]');
                          // @ts-ignore
                          textInput?.focus();
                        }
                        return !isOpen;
                      });
                    }}
                    title="Open popup calendar"
                    // prevent closing and reopening the popup
                    // @ts-ignore
                    onMouseDown={(e) => e.preventDefault()}
                    onFocus={() => setIsCalendarPopupOpen(false)}
                  />
                )
                : (
                  <div
                    aria-hidden
                    className={joinClassNames('date-input__calendar-icon date-input__icon-static', isDisabled && 'date-input__calendar-icon--is-disabled')}
                    onMouseDown={(e) => {
                      // without the preventDefault, clicking the calendar was closing the popup instead of focusing in the text input
                      e.preventDefault();
                      popperReferenceElementRef.current?.querySelector('input')?.focus();
                    }}
                  >
                    <span className="utds-icon-before-calendar " aria-hidden="true" />
                  </div>
                )
            )}
            // @ts-ignore
            onBlur={() => {
              // give time for new item to become focused
              setTimeout(
                () => {
                  // if still active inside the wrapper, don't close the popup
                  if (!isActiveElementInsideCalendarInput(wrapperInternalRef.current)) {
                    setIsCalendarPopupOpen(false);
                  }
                },
                0
              );
            }}
            onClick={() => setIsCalendarPopupOpen(true)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
        </div>
        {
          hasCalendarPopup
            ? (
              <div
                className={joinClassNames('date-input__popup', isCalendarPopupOpen ? '' : 'visually-hidden')}
                ref={calendarRef}
                style={{
                  ...styles.popper,
                  minWidth: popperReferenceElementRef.current?.offsetWidth,
                }}
                {...attributes.popper}
              >
                <CalendarInput
                  dateFormat={dateFormat}
                  label={label}
                  labelClassName="visually-hidden"
                  isDisabled={isDisabled}
                  isHidden={!isCalendarPopupOpen}
                  onChange={(newValue) => {
                    currentOnChange(newValue);
                    setIsCalendarPopupOpen(false);
                    const textInput = popperReferenceElementRef.current?.querySelector('input[type="text"]');
                    // @ts-ignore
                    textInput?.focus();
                  }}
                  id={`${id}__calendar-input`}
                  shouldSetFocusOnMount
                  showTodayButton={showCalendarTodayButton}
                  value={currentValue}
                />
              </div>
            )
            : null
        }
      </div>
    </div>
  );
}
