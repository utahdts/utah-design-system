import identity from 'lodash/identity';
import intersection from 'lodash/intersection';

// these match event's altKey, ctrlKey, metaKey, shiftKey names
export const EVENT_MODIFIERS = {
  ALT: 'alt',
  CTRL: 'ctrl',
  META: 'meta',
  SHIFT: 'shift',
};

/**
 * @param codes (array): (optional) the string codes for keyboard keys. ie ['Enter', 'Return', 'Tab', ...]
 * @param handler (function): (required) function to call when key is detected; will be passed the event. ie (event) => ...do something with event...
 * @param modifiers (array) : (optional) the event's modifier prefix(es) to match. ie ['alt', 'ctrl', ...] (should use EVENT_MODIFIERS enum)
 */
export default ({ codes = [], handler, modifiers = [] }) => (
  (event) => {
    const eventCodes = [event.code, event.keyCode, event.key];
    const eventModifiers = Object.values(EVENT_MODIFIERS)
      .map((modifier) => (event[`${modifier}Key`] ? modifier : null))
      .filter(identity);

    // find matching codes/modifiers between the event and the passed in codes/modifiers
    if (
      (!codes.length || intersection(eventCodes, codes).length)
      && (!modifiers.length || intersection(eventModifiers, modifiers).length)
    ) {
      handler(event);
    }
  }
);
