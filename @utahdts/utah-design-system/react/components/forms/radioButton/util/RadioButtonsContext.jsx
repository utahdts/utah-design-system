import { createContext } from 'react';

export const RadioButtonsContext = (createContext)({
  state: {
    currentValue: null,
    currentName: null,
  },
});
