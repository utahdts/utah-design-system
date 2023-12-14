// @ts-check
import React from 'react';
import { BUTTON_APPEARANCE, BUTTON_TYPES } from '../../enums/buttonEnums';
import componentColors from '../../enums/componentColors';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';
import Spinner from '../widgetsIndicators/Spinner';

/** @typedef {import('@utahdts/utah-design-system').ButtonAppearance} ButtonAppearance */
/** @typedef {import('@utahdts/utah-design-system').ButtonTypes} ButtonTypes */
/** @typedef {import('@utahdts/utah-design-system').ComponentColors} ComponentColors */
/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */

/**
 * @param {Object} props
 * @param {ButtonAppearance} [props.appearance] the appearance of the button
 * @param {React.ReactNode} props.children most often is the title of the button, but can also contain most anything
 * @param {string} [props.className] modify your button via className like 'button--primary' and other modifiers found in the button.scss
 * @param {ComponentColors} [props.color] the base color of the button
 * @param {React.RefObject<HTMLButtonElement>} [props.innerRef] a ref to attach to the actual DOM <button> element
 * @param {React.ReactNode} [props.iconLeft] an icon for the left/right side
 * @param {React.ReactNode} [props.iconRight]
 * @param {boolean} [props.isDisabled] button isDisabled state
 * @param {string} [props.id] the button id
 * @param {boolean} [props.isBusy] if the button is busy then it shows a spinner indicator on it and disables the button
 * @param {React.MouseEventHandler} props.onClick event for when the button is clicked: (e) => { ... do something with e ...}
 * @param {FormElementSizes} [props.size]
 * @param {ButtonTypes} [props.type] button type
 * @returns {JSX.Element}
 */
export function Button({
  appearance = BUTTON_APPEARANCE.OUTLINED,
  children,
  className,
  color = componentColors.NONE,
  innerRef,
  isBusy,
  iconLeft,
  iconRight,
  isDisabled,
  id,
  onClick,
  size = 'medium',
  type = BUTTON_TYPES.BUTTON,
  ...rest
}) {
  return (
    <button
      className={joinClassNames(
        'button',
        className,
        `button--${appearance}`,
        // default color is none
        (color && color !== 'none') ? `button--${color}-color` : null,
        // default size is medium
        (size && size !== formElementSizesEnum.MEDIUM) ? `button--${size}` : null
      )}
      disabled={isDisabled || isBusy}
      id={id}
      // @ts-ignore
      onClick={handleEvent((e) => onClick?.(e))}
      ref={innerRef}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
    >
      {
        iconLeft
          ? <span className="button--icon button--icon-left">{iconLeft}</span>
          : null
      }
      {children}
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
      {
        iconRight
          ? <span className="button--icon button--icon-right">{iconRight}</span>
          : null
      }
    </button>
  );
}
