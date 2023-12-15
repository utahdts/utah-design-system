import { Icons, Switch } from '@utahdts/utah-design-system';
import React from 'react';

/** @typedef {import('utah-design-system-website').SwitchExamplePropsShape} SwitchExamplePropsShape */

/**
 * @param {Object} props
 * @param {React.RefObject} props.innerRef
 * @param {import('use-immer').Updater<{props: SwitchExamplePropsShape}>} props.setState
 * @param {Object} props.state
 * @param {SwitchExamplePropsShape} props.state.props
 * @returns {JSX.Element}
 */
export default function SwitchExampleRender({
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
      sliderChildren={((icon === 'none') || !icon) ? null : Icons[icon]()}
      value={value}
      width={Number(width) || 80}
      // @ts-ignore
      size={size}
    />
  );
}
