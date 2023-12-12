// @ts-check
import React from 'react';

/** @typedef {import('../../jsDocTypes').UtahDesignSystemContextValue} UtahDesignSystemContextValue */
/** @typedef {import('use-immer').ImmerHook<UtahDesignSystemContextValue>} ImmerHookUtahDesignSystemContext */

const UtahDesignSystemContext = /** @type {typeof React.createContext<ImmerHookUtahDesignSystemContext>} */ (React.createContext)([
  {
    ariaLive: {
      assertiveMessages: [],
      politeMessages: [],
    },
    banners: [],
  },
  () => { },
]);

export default UtahDesignSystemContext;
