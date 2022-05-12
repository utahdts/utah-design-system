import { useCallback } from 'react';
import intersection from 'lodash/intersection';
import identity from 'lodash/identity';

// these match event's altKey, ctrlKey, metaKey, shiftKey names
export const MODIFIER_KEYS = {
  ALT: 'alt',
  CTRL: 'ctrl',
  META: 'meta',
  SHIFT: 'shift',
};

/**
 * @param codes (array): the string codes for keyboard keys. ie ['Enter', 'Return', 'Tab', ...]
 * @param handler (function): function to call when key is detected; will be passed the event. ie (event) => ... do something with event ...
 * @param modifiers (array) : the modifier prefix(es) to match when detecting keys. ie ['alt', 'ctrl', ...] (can use MODIFIER_KEYS enum)
 */
export default ({ codes, handler, modifiers }) => (
  useCallback(
    (event) => {
      const eventCodes = [event.code, event.keyCode, event.key];
      const eventModifiers = Object.values(MODIFIER_KEYS).map((modifier) => (event[`${modifier}Key`] ? modifier : null))
        .filter(identity);

      // find matching values between the event and the component's desired keys
      if (intersection(eventCodes, codes).length && (!modifiers.length || intersection(eventModifiers, modifiers).length)) {
        handler(event);
      }
    },
    [...codes]
  )
);
