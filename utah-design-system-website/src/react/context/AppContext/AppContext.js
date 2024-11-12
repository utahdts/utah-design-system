import { createContext } from 'react';

/** @typedef {import('utah-design-system-website').AppContextValue} AppContextValue */

// The global context object that tracks the context's state and provides components like the <CssContext.Provider/>
export const AppContext = /** @type {typeof createContext<AppContextValue>} */ (createContext)({
  // fake data for a brief moment before actual context provider kicks in
  allMenus: {},
  pages: {},
  pageUrls: {},
  appState: { isColorPickerShown: false },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAppState: () => { },
});
