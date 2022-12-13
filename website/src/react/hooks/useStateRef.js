import { useState } from 'react';
import useRefAlways from '@utahdts/utah-design-system/react/hooks/useRefAlways';

/**
 * Stale state is an issue! Occurs mainly inside event callbacks where the callback's
 * `state` variable is stale compared to the last rendered `state`. Those cases are
 * resolved by setting a ref to the current state and then using the ref in the
 * callback. It's always a bit jarring to see useState followed by useRef with the
 * wiring. This is a simple hook that does that wiring and supplies state, setState,
 * and ref in a visually less distracting hook.
 *
 * Note that because defaultState goes to useState and then flows to useRef, that this
 * hook makes useRef now allow a function to be resolved as its default value! yay!
 */
export default (defaultState) => {
  const [state, setState] = useState(defaultState);
  const stateRef = useRefAlways(state);

  return [state, setState, stateRef];
};
