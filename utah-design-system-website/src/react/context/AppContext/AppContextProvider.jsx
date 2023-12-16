import { useMemo } from 'react';
import { useImmer } from 'use-immer';
import { allMenus } from '../../components/routing/menus';
import { pageUrls } from '../../components/routing/pageUrls';
import { pages } from '../../components/routing/pages';
import { AppContext } from './AppContext';

/** @typedef {import('utah-design-system-website').AppContextValue} AppContextValue */

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export function AppContextProvider({ children }) {
  const [appState, setAppState] = useImmer(() => ({ isColorPickerShown: false }));
  /** @type {AppContextValue} */
  // @ts-ignore
  const contextState = useMemo(
    () => ({
      // data
      allMenus,
      pages,
      pageUrls,

      // app state
      appState,
      setAppState,
    }),
    [appState, setAppState]
  );

  return (
    <AppContext.Provider value={contextState}>
      {children}
    </AppContext.Provider>
  );
}
