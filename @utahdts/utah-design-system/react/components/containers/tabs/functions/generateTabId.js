/**
 * @param {string} tabGroupId
 * @param {string} tabId
 * @returns {string}
 */
export function generateTabId(tabGroupId, tabId) {
  return `tab-${tabGroupId}-${tabId}`;
}
