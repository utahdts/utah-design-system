/**
 * @template KeyboardEventHandlerT
 * @typedef {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} KeyboardEventHandler
 */

/**
 * @template KeyboardEventHandlerT
 * @param {string} code
 * @param {() => void} handler
 * @returns {KeyboardEventHandler<KeyboardEventHandlerT>}
 */
export function handleKeyPress(code, handler) {
  return (e) => e.code === code && handler();
}
