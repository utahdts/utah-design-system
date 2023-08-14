import { useContext } from 'react';
import AppContext from './AppContext';

/** @typedef {import ('../../../typedefs.d').AppContextValue} AppContextValue */

/**
 * @returns {AppContextValue}
 */
export default function useAppContext() {
  return useContext(AppContext);
}
