// @ts-check

// !! This file exists twice !! //
// this file also is in the library. It was duplicated because of build issues with the header
// having the library "external". This was requiring the header AND the library to have the header
// which was a huge pay load for just the header.
// The other option was to duplicating this file was to have the header directly link to the library
// file. But then the file had to be on the allow list for serving the header? and this tightly coupled
// the workspaces. Maybe it would have been fine. And maybe there's an option to have an "external"
// dependency be "internal". It would be hoped to have the library as a dependency and have it tree shaken
// so it would only grab the pieces it uses. But that's more config for another time.

/** @typedef {import('@utahdts/utah-design-system-header/src/js/misc/jsDocTypes').PopupPlacement} PopupPlacement */

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
