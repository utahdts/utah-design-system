import { createContext } from 'react';
import { cssContextDefaultColors } from './cssContextDefaultColors';

/** @typedef {import('utah-design-system-website').CssContextValue} CssContextValue */

// The global context object that tracks the context's state and provides components like the <CssContext.Provider/>
export const CssContext = /** @type {typeof createContext<CssContextValue>} */ (createContext)({
  // @ts-expect-error
  cssState: cssContextDefaultColors,
  setCssState: () => { },
});
