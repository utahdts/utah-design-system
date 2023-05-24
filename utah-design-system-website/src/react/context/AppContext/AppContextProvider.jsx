import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import allMenus from '../../components/routing/menus';
import pageUrls from '../../components/routing/pageUrls';
import pages from '../../components/routing/pages';
import AppContext from './AppContext';

const propTypes = { children: PropTypes.node.isRequired };
const defaultProps = {};

function AppContextProvider({ children }) {
  const contextState = useMemo(
    () => ({
      allMenus,
      pages,
      pageUrls,
    }),
    []
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
