import { useImmer } from 'use-immer';
import { useRefAlways } from './useRefAlways';

/**
 * Stale state is an issue! Occurs mainly inside event callbacks where the callback's
 * `state` variable is stale compared to the last rendered `state`. Those cases are
 * resolved by setting a ref to the current state and then using the ref in the
 * callback. It's always a bit jarring to see useState followed by useRef with the
 * wiring. This is a simple hook that does that wiring and supplies state, setState,
 * and ref in a visually less distracting hook.
 *
 * Be careful, because setting the value of the ref does NOT update the state and will reset
 * back to the state's value after the next render.
 *
 * Note that because defaultState goes to useState and then flows to useRef, that this
 * hook makes useRef now allow a function to be resolved as its default value! yay!
 * @template StateT
 * @param {StateT} defaultState
 * @returns {[StateT, import('use-immer').Updater<StateT>, import('react').MutableRefObject<StateT>]}
 */
export function useImmerRef(defaultState) {
  const [state, setState] = useImmer(defaultState);
  const stateRef = useRefAlways(state);

  return [state, setState, stateRef];
}
