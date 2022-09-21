import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  // a tabId id must be provided for accessibility and selecting tabs
  tabId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
const defaultProps = {};

function TabPanel({ children, tabId }) {
  const { selectedTabId, tabGroupId } = useContext(TabGroupContext);

  return (
    <div
      // `aria-labelledby` must match the related Tab's `id`
      aria-labelledby={`tab-${tabGroupId}-${tabId}`}
      className={joinClassNames(
        selectedTabId === tabId && 'tab-group__panel--selected',
        'tab-group__panel'
      )}
      // `id` must match the related Tab's `aria-controls`
      id={`tabpanel-${tabGroupId}-${tabId}`}
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
