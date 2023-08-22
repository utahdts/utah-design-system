// @ts-check
import { useContext } from 'react';
import UtahDesignSystemContext from './UtahDesignSystemContext';

/** @typedef {import('../../jsDocTypes').UtahDesignSystemContextValue} UtahDesignSystemContextValue */
/** @typedef {import('use-immer').ImmerHook<UtahDesignSystemContextValue>} ImmerHookUtahDesignSystemContext */

/**
 * @return {ImmerHookUtahDesignSystemContext}
 */
export default function useUtahDesignSystemContext() {
  return useContext(UtahDesignSystemContext);
}
