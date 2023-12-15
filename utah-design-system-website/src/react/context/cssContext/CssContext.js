import { createContext } from 'react';

/** @typedef {import('utah-design-system-website').CssContextValue} CssContextValue */

// The global context object that tracks the context's state and provides components like the <CssContext.Provider/>
export const CssContext = /** @type {typeof React.createContext<CssContextValue>} */ (createContext)({
  cssState: {},
  setCssState: () => { },
});
