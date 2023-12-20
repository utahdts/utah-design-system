import { Tag, useBanner } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: TagExamplePropsShape}} props.state
 * @param {React.RefObject<HTMLDivElement>} props.innerRef
 * @returns {React.JSX.Element}
 */
export function TagExampleRender({
  state: {
    props: {
      nonClickable: {
        className,
        isClearable,
        isDisabled,
        iconLeft,
        iconRight,
        id,
        size,
        title,
      },
    },
  },
  innerRef,
}) {
  const { addBanner } = useBanner();
  return (
    <Tag
      className={className}
      iconLeft={((iconLeft === 'none') || !iconLeft) ? null : <span className={`utds-icon-before-${iconLeft}`} aria-hidden="true" />}
      iconRight={((iconRight === 'none') || !iconRight) ? null : <span className={`utds-icon-before-${iconRight}`} aria-hidden="true" />}
      id={id}
      innerRef={innerRef}
      isDisabled={isDisabled}
      onClear={isClearable ? (() => addBanner({ message: 'You have cleared the Tag.' })) : undefined}
      size={size}
    >
      {title || ''}
    </Tag>
  );
}
