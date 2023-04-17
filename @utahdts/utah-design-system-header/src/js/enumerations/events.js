// @ts-check

/** @typedef {import('../misc/jsDocTypes').Events} Events */

/**
 * @enum {Events}
 */
export default {
  // Fired when the utah header is first loaded (setUtahHeaderSettings does not trigger this)
  HEADER_LOADED: /** @type {Events} */ ('utahHeaderLoaded'),

  // Fired when the header unloads by code calling the function removeHeader() (not when settings updated)
  HEADER_UNLOADED: /** @type {Events} */ ('utahHeaderUnloaded'),
};
