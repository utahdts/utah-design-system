// @ts-check
import { ClickableTag, useBanner } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../../typedefs.d').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TagExamplePropsShape}>} props.setState
 * @param {{props: TagExamplePropsShape}} props.state
 * @param {React.RefObject<HTMLButtonElement>} props.innerRef
 * @returns {JSX.Element}
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
