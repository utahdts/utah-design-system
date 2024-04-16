/** @typedef {import('@utahdts/utah-design-system-header').MainMenuItem} MainMenuItem */
/** @typedef {import('@utahdts/utah-design-system-header').MenuItem} MenuItem */

/**
 * @param {MenuItem | MainMenuItem} menuItem
 * @param {string | ((menuItem: MainMenuItem | MenuItem) => string)} [parentMenuLinkSuffix]
 * @returns {string}
 */
export function suffixForMenuItemTitle(menuItem, parentMenuLinkSuffix) {
  let titleSuffix;
  if (typeof parentMenuLinkSuffix === 'function') {
    titleSuffix = parentMenuLinkSuffix(menuItem);
  } else {
    titleSuffix = parentMenuLinkSuffix ?? 'Overview';
  }
  return ` ${titleSuffix}`;
}
