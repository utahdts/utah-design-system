/**
 * UTAHDS-572 don't want to import from header in to library, but jsDocTypes is in header, so dup it now
 * these match the popper's position options
 * @typedef {'auto' | 'auto-start' | 'auto-end' |
 *   'bottom' | 'bottom-start' | 'bottom-end' |
 *    'left' | 'left-start' | 'left-end' |
 *    'right' | 'right-start' | 'right-end' |
 *    'top' | 'top-start' | 'top-end'
 * } PopupPlacement
*/

/** @enum {PopupPlacement} */
export default {
  AUTO: /** @type {PopupPlacement} */ ('auto'),
  AUTO_START: /** @type {PopupPlacement} */ ('auto-start'),
  AUTO_END: /** @type {PopupPlacement} */ ('auto-end'),
  BOTTOM: /** @type {PopupPlacement} */ ('bottom'),
  BOTTOM_START: /** @type {PopupPlacement} */ ('bottom-start'),
  BOTTOM_END: /** @type {PopupPlacement} */ ('bottom-end'),
  LEFT: /** @type {PopupPlacement} */ ('left'),
  LEFT_START: /** @type {PopupPlacement} */ ('left-start'),
  LEFT_END: /** @type {PopupPlacement} */ ('left-end'),
  RIGHT: /** @type {PopupPlacement} */ ('right'),
  RIGHT_START: /** @type {PopupPlacement} */ ('right-start'),
  RIGHT_END: /** @type {PopupPlacement} */ ('right-end'),
  TOP: /** @type {PopupPlacement} */ ('top'),
  TOP_START: /** @type {PopupPlacement} */ ('top-start'),
  TOP_END: /** @type {PopupPlacement} */ ('top-end'),
};
