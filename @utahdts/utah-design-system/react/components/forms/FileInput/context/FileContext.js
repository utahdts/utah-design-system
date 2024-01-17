import { createContext } from 'react';

/** @typedef { import('@utahdts/utah-design-system').FileContext} FileContext */

export const FileContext = /** @type {typeof createContext<FileContext>} */ (createContext)([
  {
    file: null,
    removeFile: () => { },
  },
]);
