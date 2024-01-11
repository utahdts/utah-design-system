import { useCallback, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';
import { useImmer } from 'use-immer';
import { popupPlacement } from '../../enums/popupPlacement';
import { useInterval } from '../../hooks/useInterval';
import { joinClassNames } from '../../util/joinClassNames';
import { Button } from '../buttons/Button';
import { Icons } from '../icons/Icons';
import { CalendarInput } from './CalendarInput/CalendarInput';
import { useFormContextInputValue } from './FormContext/useFormContextInputValue';
import { TextInput } from './TextInput';
import { useOnKeyUp } from '../../util/useOnKeyUp';
import { IconButton } from '../buttons/IconButton';

/**
 * @template FormEventT
 * @typedef {import('react').FormEvent<FormEventT>} FormEvent
 */

/**
 * @param {HTMLDivElement | null} myWrapper
 * @returns {boolean}
 */
function isActiveElementInsideCalendarInput(myWrapper) {
  return document.activeElement?.closest('.input-wrapper--date-input') === myWrapper;
}

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {boolean} [props.hasNoCalendarPopup] if true, the calendar popup does not open so that entry is only keyboard textual
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
 * @param {string} [props.placeholder]
 * @param {boolean} [props.showCalendarTodayButton] on teh calendar popup, should the `today` button be shown
 * @param {string} [props.value]
 * @param {string} [props.wrapperClassName]
 * @returns {import('react').JSX.Element}
 */
export function DateInput({
  className,
  defaultValue,
  errorMessage,
  hasNoCalendarPopup,
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
            onClear={currentOnClear}
            onKeyUp={onDownArrowPress}
            placeholder={placeholder}
            value={currentValue}
            rightContent={(
              <IconButton
                aria-hidden="true"
                className="utds-icon-before-doc-square date-input__calendar-icon"
                icon={<span className="utds-icon-before-chevron-up" aria-hidden="true" />}
                isDisabled={isDisabled}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCalendarPopupOpen(true);
                }}
                title="Open popup calendar"
                // @ts-ignore
                // prevent the chevron from closing and reopening the popup
                onMouseDown={(e) => e.preventDefault()}
              />
            )}
            // @ts-ignore
            onBlur={() => {
              // give time for new item to be come focused
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
          hasNoCalendarPopup
            ? null
            : (
              <CalendarInput
                label={label}
                labelClassName="visually-hidden"
                isDisabled={isDisabled}
                isHidden={!isCalendarPopupOpen}
                onChange={(newValue) => {
                  currentOnChange(newValue);
                  setIsCalendarPopupOpen(false);
                }}
                id={`${id}__calendar-input`}
                innerRef={calendarRef}
                shouldSetFocusOnMount
                showTodayButton={showCalendarTodayButton}
                value={currentValue}
                wrapperClassName={isCalendarPopupOpen ? '' : 'visually-hidden'}
                // @ts-ignore
                style={{
                  ...styles.popper,
                  minWidth: popperReferenceElementRef.current?.scrollWidth,
                }}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...attributes.popper}
              />
            )
        }
        {
          (!hasNoCalendarPopup && isCalendarPopupOpen)
            ? (
              <Button
                onClick={() => setIsCalendarPopupOpen(false)}
                type="button"
              >
                <Icons.IconDangerous />
              </Button>
            )
            : null
        }
      </div>
    </div>
  );
}
