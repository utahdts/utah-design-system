import { useState } from 'react';
import { ICON_BUTTON_APPEARANCE } from '../../enums/buttonEnums';
import { componentColors } from '../../enums/componentColors';
import { formElementSizesEnum } from '../../enums/formElementSizesEnum';
import { joinClassNames } from '../../util/joinClassNames';
import { Tooltip } from '../tooltip/Tooltip';

/** @typedef {import('@utahdts/utah-design-system').IconButtonAppearance} IconButtonAppearance */

/**
 * @param {object} props
 * @param {IconButtonAppearance} [props.appearance]
 * @param {import('react').ReactNode} [props.children]
 * @param {string} [props.className]
 * @param {'primary' | 'secondary' | 'accent' | 'none'} [props.color]
 * @param {import('react').ReactNode} props.icon
 * @param {string} [props.id]
 * @param {import('react').MutableRefObject<HTMLButtonElement | null>} [props.innerRef]
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isTitleVisible]
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClick] what to do when the button is clicked
 * @param {'small1x' | 'small' | 'medium' | 'large' | 'large1x'} [props.size]
 * @param {string} props.title A title is used for accessibility purposes to describe the button for screen readers
 * @param {string | null} [props.tooltipText]
 * @returns {import('react').JSX.Element}
 */
export function IconButton({
  appearance = ICON_BUTTON_APPEARANCE.OUTLINED,
  children,
  className,
  color = componentColors.NONE,
  icon,
  id,
  innerRef: draftInnerRef,
  isDisabled,
  isTitleVisible,
  onClick,
  size = 'medium',
  title,
  tooltipText,
  ...rest
}) {
  const [referenceElement, setReferenceElement] = /** @type {typeof useState<HTMLButtonElement | null>} */ (useState)(null);
  if (draftInnerRef && referenceElement) {
    draftInnerRef.current = referenceElement;
  }

  return (
    <>
      <button
        className={joinClassNames(
          'button icon-button',
          className,
          `${(appearance === ICON_BUTTON_APPEARANCE.BORDERLESS) ? 'icon-button--' : 'button--'}${appearance}`,
          // default color is none
          (color && color !== 'none') ? `button--${color}-color` : null,
          (isTitleVisible ? 'icon-button--visible-title' : null),
          // default size is medium
          (size && size !== formElementSizesEnum.MEDIUM) ? `icon-button--${size}` : null
        )}
        disabled={isDisabled}
        id={id || undefined}
        onClick={onClick}
        ref={setReferenceElement}
        type="button"
        {...rest}
      >
        {icon}
        <span className={isTitleVisible ? undefined : 'visually-hidden'}>{title}</span>
        {children}
      </button>
      {referenceElement ? <Tooltip referenceElement={referenceElement}>{tooltipText ?? title}</Tooltip> : null}
    </>
  );
}
