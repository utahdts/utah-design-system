import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useImmer } from 'use-immer';
import allMenus from '../../components/routing/menus';
import pageUrls from '../../components/routing/pageUrls';
import pages from '../../components/routing/pages';
import AppContext from './AppContext';

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

function AppContextProvider({ children }) {
  const [appState, setAppState] = useImmer(() => ({ isColorPickerShown: false }));
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
AppContextProvider.propTypes = propTypes;
AppContextProvider.defaultProps = defaultProps;

export default AppContextProvider;
