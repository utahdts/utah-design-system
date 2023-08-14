import React from 'react';

/** @typedef {import('../../../typedefs.d').AppContextValue} AppContextValue */

// The global context object that tracks the context's state and provides components like the <CssContext.Provider/>
const AppContext = /** @type {typeof React.createContext<AppStateContextValue>} */ (React.createContext)({
  // fake data for a brief moment before actual context provider kicks in
  allMenus: [],
  pages: {},
  pageUrls: {},
  appState: { isColorPickerShown: false },
  setAppState: () => { },
});

export default AppContext;
