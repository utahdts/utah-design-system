/**
 * @param {targetKey} which key to watch for (ie 'Enter') https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
 * @param {func} the function to call when the given key is pressed
 * @returns function that checks for the keypress and fires function when pressed
 */
export default function useOnKeyPress({ targetKey, func }) {
  return (e) => {
    if (e.key === targetKey) {
      func(e);
    }
  };
}
