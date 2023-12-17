// !! This file exists twice !! //
// this file also is in the library. It was duplicated because of build issues with the header
// having the library "external". This was requiring the header AND the library to have the header
// which was a huge pay load for just the header.
// The other option was to duplicating this file was to have the header directly link to the library
// file. But then the file had to be on the allow list for serving the header? and this tightly coupled
// the workspaces. Maybe it would have been fine. And maybe there's an option to have an "external"
// dependency be "internal". It would be hoped to have the library as a dependency and have it tree shaken
// so it would only grab the pieces it uses. But that's more config for another time.

/** @typedef {import('src/@types/jsDocTypes.d').PopupPlacement} PopupPlacementType */

/** @enum {PopupPlacementType} */
export const PopupPlacement = {
  AUTO: /** @type {PopupPlacementType} */ ('auto'),
  AUTO_START: /** @type {PopupPlacementType} */ ('auto-start'),
  AUTO_END: /** @type {PopupPlacementType} */ ('auto-end'),
  BOTTOM: /** @type {PopupPlacementType} */ ('bottom'),
  BOTTOM_START: /** @type {PopupPlacementType} */ ('bottom-start'),
  BOTTOM_END: /** @type {PopupPlacementType} */ ('bottom-end'),
  LEFT: /** @type {PopupPlacementType} */ ('left'),
  LEFT_START: /** @type {PopupPlacementType} */ ('left-start'),
  LEFT_END: /** @type {PopupPlacementType} */ ('left-end'),
  RIGHT: /** @type {PopupPlacementType} */ ('right'),
  RIGHT_START: /** @type {PopupPlacementType} */ ('right-start'),
  RIGHT_END: /** @type {PopupPlacementType} */ ('right-end'),
  TOP: /** @type {PopupPlacementType} */ ('top'),
  TOP_START: /** @type {PopupPlacementType} */ ('top-start'),
  TOP_END: /** @type {PopupPlacementType} */ ('top-end'),
};
