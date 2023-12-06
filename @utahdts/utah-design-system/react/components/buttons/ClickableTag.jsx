// @ts-check
import React from 'react';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';

/** @typedef {import('../../jsDocTypes').FormElementSizes} FormElementSizes */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children most often is the title of the tag, but can also contain most anything
 * @param {string} [props.className] modify your tag via className like 'tag--primary' and other modifiers found in the tag.scss
 * @param {string} [props.id] the tag id
 * @param {React.RefObject} [props.innerRef] a ref to attach to the actual DOM <button> or <span> element
 * @param {React.ReactNode} [props.iconLeft] an icon for the left side
 * @param {React.ReactNode} [props.iconRight] an icon for the right side
 * @param {boolean} [props.isDisabled] tag isDisabled state
 * @param {boolean} [props.isSelected]
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClick] (e) => { ... do something with e ...}
 * @param {FormElementSizes} [props.size]
 * @returns {JSX.Element}
 */
export function ClickableTag({
  children,
  className,
  id,
  innerRef,
  iconLeft,
  iconRight,
  isDisabled,
  isSelected,
  onClick,
  size = formElementSizesEnum.MEDIUM,
  ...rest
}) {
  return (
    <div className="tag__wrapper">
      <button
        aria-pressed={isSelected}
        className={joinClassNames(
          'tag',
          'tag__button',
          className,
          isSelected ? 'tag--selected' : '',
          `tag--${size}`
        )}
        disabled={isDisabled}
        id={id}
        onClick={onClick && handleEvent((e) => onClick?.(e))}
        ref={innerRef}
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
