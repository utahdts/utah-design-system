import { ClickableTag, useBanner } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: TagExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLButtonElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function ClickableTagExampleRender({
  state: {
    props: {
      clickable: {
        className,
        isDisabled,
        isSelected,
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
    <ClickableTag
      className={className}
      iconLeft={((iconLeft === 'none') || !iconLeft) ? null : <span className={`utds-icon-before-${iconLeft}`} aria-hidden="true" />}
      iconRight={((iconRight === 'none') || !iconRight) ? null : <span className={`utds-icon-before-${iconRight}`} aria-hidden="true" />}
      id={id}
      innerRef={innerRef}
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={() => addBanner({ message: 'You have clicked the Tag.' })}
      size={size}
    >
      {title || ''}
    </ClickableTag>
  );
}
