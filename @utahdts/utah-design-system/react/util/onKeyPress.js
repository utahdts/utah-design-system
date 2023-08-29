// @ts-check
/** @typedef {import('../jsDocTypes').EventAction} EventAction */
/**
 * @param {Object} params
 * @param {string} params.targetKey which key to watch for (ie 'Enter') https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
 * @param {EventAction} params.func the function to call when the given key is pressed
 * @returns {EventAction} function that checks for the keypress and fires function when pressed
 */
export default function onKeyPress({ targetKey, func }) {
  return (e) => {
    if (e.key === targetKey) {
      func(e);
    }
  };
}
