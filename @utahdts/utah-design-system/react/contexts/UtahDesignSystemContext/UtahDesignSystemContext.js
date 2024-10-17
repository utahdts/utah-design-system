import { createContext } from 'react';

/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextValue} UtahDesignSystemContextValue */
/** @typedef {import('use-immer').ImmerHook<UtahDesignSystemContextValue>} ImmerHookUtahDesignSystemContext */

export const UtahDesignSystemContext = /** @type {typeof createContext<ImmerHookUtahDesignSystemContext>} */ (createContext)([
  {
    ariaLive: {
      assertiveMessages: [],
      politeMessages: [],
    },
    banners: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => { },
]);
