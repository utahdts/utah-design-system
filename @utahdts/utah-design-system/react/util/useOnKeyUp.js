import React, { useCallback } from 'react';

/**
 * @template KeyboardEventElementT
 * @param {string} targetKey which key to watch for (ie 'Enter') https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
 * @param {import('react').KeyboardEventHandler<KeyboardEventElementT>} func the function to call when the given key is pressed
 * @param {boolean} [stopPropagation]
 * @returns {(event: React.KeyboardEvent<KeyboardEventElementT>) => boolean} function that checks for the keypress and fires function when pressed
 */
export function useOnKeyUp(targetKey, func, stopPropagation) {
  return useCallback(
    (e) => {
      const isMatchingKey = e.key === targetKey;
      if (isMatchingKey) {
        if (stopPropagation) {
          e.stopPropagation();
          e.preventDefault();
        }
        func(e);
      }
      return isMatchingKey;
    },
    [func, stopPropagation, targetKey]
  );
}
