import React, { useCallback, useState } from 'react';
import { handleKeyPress } from '../../../../index';
import { formElementSizesEnum } from '../../../enums/formElementSizesEnum';
import { handleEvent } from '../../../util/handleEvent';
import { joinClassNames } from '../../../util/joinClassNames';
import { Spinner } from '../../widgetsIndicators/Spinner';
import { ConfirmationButtonContextProvider } from './context/ConfirmationButtonContextProvider';

/** @typedef {import('@utahdts/utah-design-system').ButtonAppearance} ButtonAppearance */
/** @typedef {import('@utahdts/utah-design-system').ButtonTypes} ButtonTypes */
/** @typedef {import('@utahdts/utah-design-system').ComponentColors} ComponentColors */
/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */
/** @typedef {import('@utahdts/utah-design-system').WrapInElement} WrapInElement */

/**
 * @param {object} props
 * @param {ButtonAppearance} [props.appearance]
 * @param {import('react').ReactNode} props.children
 * @param {string} [props.className]
 * @param {ComponentColors} [props.color]
 * @param {ComponentColors} [props.confirmationColor]
 * @param {import('react').RefObject<HTMLButtonElement>} [props.innerRef]
 * @param {boolean} [props.isBusy]
 * @param {boolean} [props.isDisabled]
 * @param {string} [props.id]
 * @param {import('react').MouseEventHandler} props.onClick
 * @param {FormElementSizes} [props.size]
 * @param {ButtonTypes} [props.type]
 * @returns {import('react').JSX.Element}
 */
export function ConfirmationButton({
  appearance,
  children,
  className,
  color,
  confirmationColor,
  innerRef,
  isBusy,
  isDisabled,
  id,
  onClick,
  size,
  type,
  ...rest
}) {
  const [isClicked, setIsClicked] = useState(false);

  const resetButton = useCallback(() => {
    setIsClicked(false);
  }, []);

  const handleOnClick = handleEvent((e) => {
    if (!isBusy) {
      if (isClicked) {
        onClick?.(e);
        resetButton();
      } else {
        setIsClicked(true);
      }
    }
  });

  const onClickCallback = useCallback(handleOnClick, [handleOnClick]);

  return (
    <button
      className={joinClassNames(
        'button',
        className,
        `button--${appearance}`,
        // default color is none
        (color && color !== 'none') && !(isClicked && confirmationColor) ? `button--${color}-color` : null,
        // default size is medium
        (size && size !== formElementSizesEnum.MEDIUM) ? `button--${size}` : null,
        isClicked ? 'button--confirm' : null,
        isClicked && confirmationColor ? `button--${confirmationColor}-color` : null
      )}
      disabled={isDisabled || isBusy}
      id={id}
      ref={innerRef}
      onClick={onClickCallback}
      onBlur={resetButton}
      onKeyUp={handleKeyPress('Escape', resetButton)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
    >
      <ConfirmationButtonContextProvider isClicked={isClicked}>
        {children}
      </ConfirmationButtonContextProvider>
      {
        isBusy
          ? (
            <Spinner
              className="ml-spacing-xs"
              size={size === formElementSizesEnum.LARGE1X ? 24 : 22}
              strokeWidth={size === formElementSizesEnum.LARGE1X ? 14 : 12}
            />
          )
          : null
      }
    </button>
  );
}
