// @ts-check
/** @typedef {import('../jsDocTypes').EventAction} EventAction */
/** @typedef {import('../jsDocTypes').EventActionBoolean} EventActionBoolean */

import { useCallback } from 'react';

/**
 * @param {string} targetKey which key to watch for (ie 'Enter') https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
 * @param {EventAction} func the function to call when the given key is pressed
 * @param {boolean} [stopPropagation]
 * @returns {EventActionBoolean} function that checks for the keypress and fires function when pressed
 */
export default function useOnKeyUp(targetKey, func, stopPropagation) {
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
