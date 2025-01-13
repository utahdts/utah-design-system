import { formElementSizesEnum } from '../../enums/formElementSizesEnum';
import { handleEvent } from '../../util/handleEvent';
import { joinClassNames } from '../../util/joinClassNames';

/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children most often is the title of the tag, but can also contain most anything
 * @param {string} [props.className] modify your tag via className like 'tag--primary' and other modifiers found in the tag.scss
 * @param {string} [props.id]
 * @param {import('react').RefObject<HTMLDivElement>} [props.innerRef] a ref to attach to the wrapper <div>
 * @param {import('react').ReactNode} [props.iconLeft] an icon for the left side of props.children
 * @param {import('react').ReactNode} [props.iconRight] an icon for the right side of props.children
 * @param {boolean} [props.isDisabled]
 * @param {boolean} [props.isSelected]
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClick]
 * @param {FormElementSizes} [props.size]
 * @returns {import('react').JSX.Element}
 */
export function ClickableTag({
  children,
  className,
  id,
  iconLeft,
  iconRight,
  innerRef,
  isDisabled,
  isSelected,
  onClick,
  size = formElementSizesEnum.MEDIUM,
  ...rest
}) {
  return (
    <div className="tag__wrapper" ref={innerRef}>
      <button
        aria-pressed={isSelected}
        className={joinClassNames(
          'tag',
          'tag__button',
          `tag--${size}`,
          className,
          isSelected ? 'tag--selected' : ''
        )}
        disabled={isDisabled}
        id={id}
        onClick={onClick && handleEvent((e) => onClick(e))}
        type="button"
        {...rest}
      >
        {iconLeft ? <span className="tag--icon tag--icon-left">{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className="tag--icon tag--icon-right">{iconRight}</span> : null}
      </button>
    </div>
  );
}
