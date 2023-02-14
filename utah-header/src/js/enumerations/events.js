// @ts-check
/**
 * @enum {string}
 */
export default {
  // Fired when the UtahID information is updated per the ajax request when header loads
  AUTH_CHANGED: 'utahHeaderAuthChanged',

  // Fired when the utah header is first loaded (setUtahHeaderSettings does not trigger this)
  HEADER_LOADED: 'utahHeaderLoaded',

  // Fired when the header unloads by code calling the function removeHeader() (not when settings updated)
  HEADER_UNLOADED: 'utahHeaderUnloaded',
};
