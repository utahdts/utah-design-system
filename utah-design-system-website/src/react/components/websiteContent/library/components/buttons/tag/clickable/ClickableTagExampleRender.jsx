import { ClickableTag, joinClassNames, useBanner } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').TagExamplePropsShape} TagExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: TagExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function ClickableTagExampleRender({
  state: {
    props: {
      clickable: {
        className,
        color,
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
      className={joinClassNames(className, color)}
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
