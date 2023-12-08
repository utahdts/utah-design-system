/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Icons,
  useBanner
} from '@utahdts/utah-design-system';

/** @typedef {import('../../../../../../../typedefs.d').ButtonExamplePropsShape} ButtonExamplePropsShape */

/**
 * @param {Object} props
 * @param {import('use-immer').Updater<{props: ButtonExamplePropsShape}>} props.setState
 * @param {{props: ButtonExamplePropsShape}} props.state
 * @param {React.RefObject} props.innerRef
 * @returns {JSX.Element}
 */
export default function ButtonExampleRender({
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
      iconLeft={((iconLeft === 'none') || !iconLeft) ? null : Icons[iconLeft]()}
      iconRight={((iconRight === 'none') || !iconRight) ? null : Icons[iconRight]()}
      id={id}
      innerRef={innerRef}
      isBusy={isBusy}
      isDisabled={isDisabled}
      onClick={() => addBanner({ message: 'You have clicked the button.', duration: 3500 })}
      size={size}
      type={type}
    >
      {title || ''}
    </Button>
  );
}
