import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

function TabPanel({ children }) {
  const {
    registerPanel,
    selectedTabId,
    tabGroupId,
    unregisterPanel,
  } = useContext(TabGroupContext);
  const [tabPanelId, setTabPanelId] = useState(NaN);

  // panelIndexRef must match the tab's index; This will automagically happen if the <Tab> and <Panel>
  // components are in the same render order
  useEffect(
    () => {
      setTabPanelId(registerPanel());
      return () => unregisterPanel(tabPanelId);
    },
    []
  );
  return (
    <div
      // `aria-labelledby` must match the related Tab's `id`
      aria-labelledby={`tab-${tabGroupId}-${tabPanelId}`}
      className={joinClassNames(
        selectedTabId === tabPanelId && 'tab-group__panel--selected',
        'tab-group__panel'
      )}
      // `id` must match the related Tab's `aria-controls`
      id={`tabpanel-${tabGroupId}-${tabPanelId}`}
      role="tabpanel"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;

export default TabPanel;
