import {
  Button,
  Icons,
  useBanner
} from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').ButtonExamplePropsShape} ButtonExamplePropsShape */

/**
 * @param {object} props
 * @param {{props: ButtonExamplePropsShape}} props.state
 * @param {import('react').RefObject<HTMLButtonElement>} props.innerRef
 * @returns {import('react').JSX.Element}
 */
export function ButtonExampleRender({
  state: {
    props: {
      appearance,
      isBusy,
      className,
      color,
      isDisabled,
      iconLeft,
      iconRight,
      id,
      size,
      title,
      type,
    },
  },
  innerRef,
}) {
  const { addBanner } = useBanner();
  return (
    <Button
      appearance={appearance}
      className={className}
      color={color}
      iconLeft={
        (
          (iconLeft === 'none') || !iconLeft)
          ? null
          // @ts-ignore
          : Icons[iconLeft]()
      }
      iconRight={
        (
          (iconRight === 'none') || !iconRight)
          ? null
          // @ts-ignore
          : Icons[iconRight]()
      }
      id={id}
      innerRef={innerRef}
      isBusy={isBusy}
      isDisabled={isDisabled}
      onClick={() => addBanner({ message: 'You have clicked the button.' })}
      size={size}
      type={type}
    >
      {title || ''}
    </Button>
  );
}
