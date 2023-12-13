// @ts-check
import React from 'react';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import joinClassNames from '../../util/joinClassNames';
import IconButton from './IconButton';

/** @typedef {import('../../jsDocTypes').FormElementSizes} FormElementSizes */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children most often is the title of the tag, but can also contain most anything
 * @param {string} [props.className]
 * @param {string} [props.id] the tag id
 * @param {React.RefObject<HTMLDivElement>} [props.innerRef] a ref to attach to the actual DOM <button> or <span> element
 * @param {React.ReactNode} [props.iconLeft] an icon for the left side
 * @param {React.ReactNode} [props.iconRight] an icon for the right side
 * @param {boolean} [props.isDisabled] tag isDisabled state
 * @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClear]
 * @param {FormElementSizes} [props.size]
 * @returns {JSX.Element}
 */
export function Tag({
  children,
  className,
  innerRef,
  iconLeft,
  iconRight,
  isDisabled,
  id,
  onClear,
  size = formElementSizesEnum.MEDIUM,
  ...rest
}) {
  return (
    <div
      className={joinClassNames('tag__wrapper', onClear && 'tag--clearable')}
      ref={innerRef}
    >
      <span
        className={joinClassNames('tag', className, `tag--${size}`)}
        id={id}
        {...rest}
      >
        {iconLeft ? <span className="tag--icon tag--icon-left">{iconLeft}</span> : null}
        {children}
        {iconRight ? <span className="tag--icon tag--icon-right">{iconRight}</span> : null}
      </span>
      {
        onClear
          ? (
            <IconButton
              className="tag__clear-button icon-button--borderless icon-button--small1x"
              icon={<span className="utds-icon-before-x-icon" aria-hidden="true" />}
              onClick={onClear}
              title="Clear tag"
              isDisabled={isDisabled}
            />
          )
          : null
      }
    </div>
  );
}
