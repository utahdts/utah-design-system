import { createContext } from 'react';

export const FileContext = /** @type {typeof createContext<FileContext>} */ (createContext)([
  {
    file: null,
    removeFile: () => { },
  },
]);
