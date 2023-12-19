/**
 * @template KeyboardEventHandlerT
 * @typedef {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} KeyboardEventHandler
 */

/**
 * @template KeyboardEventHandlerT
 * @param {string} code
 * @param {import('react').EventHandler<any>} handler
 * @returns {import('react').KeyboardEventHandler<KeyboardEventHandlerT>}
 */
export function handleKeyPress(code, handler) {
  return (e) => e.code === code && handler(e);
}
