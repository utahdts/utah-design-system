import { Icons, Switch } from '@utahdts/utah-design-system';

/** @typedef {import('utah-design-system-website').SwitchExamplePropsShape} SwitchExamplePropsShape */

/**
 * @param {object} props
 * @param {import('react').RefObject<HTMLDivElement>} props.innerRef
 * @param {import('use-immer').Updater<{props: SwitchExamplePropsShape}>} props.setState
 * @param {object} props.state
 * @param {SwitchExamplePropsShape} props.state.props
 * @returns {import('react').JSX.Element}
 */
export function SwitchExampleRender({
  setState,
  state: {
    props: {
      className,
      errorMessage,
      icon,
      id,
      isDisabled,
      label,
      labelOff,
      labelOn,
      size,
      value,
      width,
    },
  },
  innerRef,
}) {
  return (
    <Switch
      className={className}
      errorMessage={errorMessage}
      id={id}
      innerRef={innerRef}
      isDisabled={isDisabled}
      label={label || 'Switch Label'}
      labelOff={labelOff}
      labelOn={labelOn}
      onChange={() => setState((draftState) => {
        draftState.props.value = !draftState.props.value;
      })}
      sliderChildren={
        ((icon === 'none') || !icon)
          ? null
          : <span className={icon === 'visibility' ? 'utds-icon-before-visibility' : 'utds-icon-before-check'} aria-hidden="true" />
      }
      value={value}
      width={Number(width) || 80}
      // @ts-ignore
      size={size}
    />
  );
}
