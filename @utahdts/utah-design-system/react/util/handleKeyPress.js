/**
 * @template KeyboardEventHandlerT
 * @typedef {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} KeyboardEventHandler
 */

/**
 * @template KeyboardEventHandlerT
 * @param {string} code
 * @param {React.EventHandler<any>} handler
 * @returns {React.KeyboardEventHandler<KeyboardEventHandlerT>}
 */
export function handleKeyPress(code, handler) {
  return (e) => e.code === code && handler(e);
}
