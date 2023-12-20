import { useContext } from 'react';
import { UtahDesignSystemContext } from './UtahDesignSystemContext';

/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextValue} UtahDesignSystemContextValue */
/** @typedef {import('use-immer').ImmerHook<UtahDesignSystemContextValue>} ImmerHookUtahDesignSystemContext */

/** @returns {ImmerHookUtahDesignSystemContext} */
export function useUtahDesignSystemContext() {
  return useContext(UtahDesignSystemContext);
}
