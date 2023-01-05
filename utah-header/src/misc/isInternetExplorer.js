// TODO: review this file for inclusion
/**
 * A function that returns true if the currently running browser is Internet Explorer
 * @returns {boolean}
 */
export default function isInternetExplorer() {
  return !!window.document.documentMode;
}
