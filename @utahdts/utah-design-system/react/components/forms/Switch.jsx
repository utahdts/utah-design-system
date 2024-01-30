import React, { useCallback, useEffect, useState } from 'react';
import { formElementSizesEnum } from '../../enums/formElementSizesEnum';
import { joinClassNames } from '../../util/joinClassNames';
import { setValueAtPath } from '../../util/state/setValueAtPath';
import { valueAtPath } from '../../util/state/valueAtPath';
import { ErrorMessage } from './ErrorMessage';
import { useFormContext } from './FormContext/useFormContext';

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {boolean} [props.defaultValue]
 * @param {string} [props.errorMessage]
 * @param {string} props.id when tied to a Form the `id` is also the 'dot' path to the data in the form's state: ie person.contact.address.line1
 * @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {string} props.label
 * @param {string} [props.labelClassName]
 * @param {string} [props.labelOn]
 * @param {string} [props.labelOff]
 * @param {string} [props.name]
 * @param {((e: React.KeyboardEvent) => void)} [props.onChange] e => ...; optional if uncontrolled OR controlled by form
 * @param {'small' | 'medium' | 'large'} [props.size] formElementSizesEnum
 * @param {import('react').ReactNode} [props.sliderChildren]
 * @param {boolean} [props.value]
 * @param {number} [props.width]
 * @returns {import('react').JSX.Element}
 */
export function Switch({
  className,
  defaultValue,
  errorMessage,
  id,
  innerRef,
  isDisabled,
  label,
  labelClassName,
  labelOn,
  labelOff,
  name,
  onChange,
  size,
  sliderChildren,
  value,
  width,
  ...rest
}) {
  // there is no "uncontrolled" version of this component
  const { setState, state } = useFormContext();
  const [internalState, setInternalState] = useState(!!(defaultValue ?? value));

  // switch example was passing in a value but it wasn't updating the UI
  useEffect(
    () => {
      if (value !== undefined) {
        setState?.(
          /** @param {Record<string, any>} draftState */
          // @ts-ignore
          (draftState) => {
            setValueAtPath({
              object: draftState,
              path: id,
              value,
            });
          }
        );
        setInternalState(!!value);
      }
    },
    [value]
  );

  const currentValue = valueAtPath({ object: state ?? null, path: id }) ?? internalState;

  const internalOnChange = useCallback(
    /** @param {import('react').KeyboardEvent} e */
    (e) => {
      if (setState) {
        setState(
          /** @param {Record<string, any>} draftState */
          // @ts-ignore
          (draftState) => {
            setValueAtPath({
              object: draftState,
              path: id,
              // @ts-ignore
              value: e.target.checked,
            });
          }
        );
      } else {
        // @ts-ignore
        setInternalState(e.target.checked);
      }
    },
    [id, setState]
  );
  const currentOnChange = onChange ?? internalOnChange;

  return (
    <div
      className="input-wrapper input-wrapper--switch"
      ref={innerRef}
    >
      <label
        className={joinClassNames(
          'switch__wrapper',
          size && (size === formElementSizesEnum.MEDIUM ? null : `switch--${size}`),
          isDisabled ? 'switch--disabled' : null,
          currentValue && 'switch__wrapper--on'
        )}
        htmlFor={id}
        style={(width || width === 0) ? { width: `${width}px` } : undefined}
      >
        <span className={joinClassNames('switch__label', labelClassName)}>{label}</span>

        <input
          aria-describedby={errorMessage ? `${id}-error` : null}
          checked={currentValue}
          className={joinClassNames('switch visually-hidden', className)}
          disabled={isDisabled}
          id={id}
          name={name || id}
          // @ts-ignore
          onChange={currentOnChange}
          role="switch"
          type="checkbox"
          {...rest}
        />
        <span className={joinClassNames('switch__slider', currentValue && 'switch__slider--on')}>{sliderChildren}</span>
        {
          (labelOn || labelOff)
            ? (
              <span className="switch__inner-label">
                <span className={joinClassNames(currentValue ? 'show' : '', 'switch__inner-label-on')}>{labelOn}</span>
                <span className={joinClassNames(currentValue ? '' : 'show', 'switch__inner-label-off')}>{labelOff}</span>
              </span>
            )
            : null
        }
      </label>

      <ErrorMessage errorMessage={errorMessage} id={id} />
    </div>
  );
}
