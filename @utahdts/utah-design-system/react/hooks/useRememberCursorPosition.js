import { useCallback, useEffect } from 'react';
import { useImmer } from 'use-immer';

/**
 * sometimes an input's onchange is asynchronous
 * because the state doesn't change immediately, the input gets recreated later
 * this causes the cursor position to be lost and the cursor jumps to the end of the input
 * this hook remembers the cursor position between updates so that it doesn't jump
 * after a state change.
 * Make sure to call the returned onChange function when the input's value changes.
 * @param {import('react').RefObject<HTMLElement | null>} ref
 * @param {string} value
 * @returns {import('react').ChangeEventHandler<HTMLElement> }
 */
export function useRememberCursorPosition(ref, value) {
  const [cursor, setCursor] = useImmer(NaN);

  useEffect(
    () => {
      // @ts-expect-error these actually do exist... Probably need HTMLElement to be HTMLInputElement?
      ref.current?.setSelectionRange(cursor, cursor);
    },
    [ref, cursor, value]
  );

  return useCallback(
    (e) => {
      // @ts-expect-error these actually do exist... Probably need HTMLElement to be HTMLInputElement?
      setCursor(e.target.selectionStart ?? NaN);
    },
    [setCursor]
  );
}
