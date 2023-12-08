// @ts-check
import { Tag, useBanner } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('../../../../../../../../typedefs.d').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: TagExamplePropsShape}>} props.setState
 * @param {{props: TagExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
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
  const showBanner = useBanner();
  return (
    <Tag
      className={className}
      iconLeft={((iconLeft === 'none') || !iconLeft) ? null : <span className={`utds-icon-before-${iconLeft}`} aria-hidden="true" />}
      iconRight={((iconRight === 'none') || !iconRight) ? null : <span className={`utds-icon-before-${iconRight}`} aria-hidden="true" />}
      id={id}
      innerRef={innerRef}
      isDisabled={isDisabled}
      onClear={isClearable ? (() => showBanner({ message: 'You have cleared the Tag.' })) : undefined}
      size={size}
    >
      {title || ''}
    </Tag>
  );
}
