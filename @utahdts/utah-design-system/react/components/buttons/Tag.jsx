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
 * @param {string} [props.clearMessage] the message to show when hover the "x" icon
 * @param {string} [props.id] the tag id
 * @param {Object} [props.iconButtonProps] props for the icon button
 * @param {React.Ref<HTMLDivElement>} [props.innerRef] a ref to attach to the actual DOM <button> or <span> element
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
  clearMessage = 'Clear Tag',
  iconButtonProps = {},
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
      // ref needs to be for the div so that the ref comes back for the div
      ref={innerRef}
      // need to spread {...rest} on the div so that it can get onKeyUp for the whole package and not just the span
      {...rest}
    >
      <span
        className={joinClassNames('tag', className, `tag--${size}`)}
        id={id}
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
              icon={<span className="utds-icon-before-x-icon" aria-hidden />}
              onClick={onClear}
              title={clearMessage}
              isDisabled={isDisabled}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...iconButtonProps}
            />
          )
          : null
      }
    </div>
  );
}
