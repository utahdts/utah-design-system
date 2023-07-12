import { useContext } from 'react';
import CssContext from './CssContext';

/**
 * This hook provides the context's data; most everything should just use this hook and nothing else
 * @returns {{cssState: Object, setCssState: import('use-immer').Updater }} the context state
 */
export default function useCssContext() {
  return useContext(CssContext);
}
