/** @typedef {import('@utahdts/utah-design-system').TabGroupContextValue} TabGroupContextValue */

export const TabGroupContext = /** @type {typeof React.createContext<TabGroupContextValue>} */ (React.createContext)({
  selectedTabId: '',
  setSelectedTabId: () => { },
  tabGroupId: '',
});
