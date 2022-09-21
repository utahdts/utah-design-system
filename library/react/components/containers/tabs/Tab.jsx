import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import handleEvent from '../../../util/handleEvent';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

function Tab({ children }) {
  const {
    registerTab,
    selectedTabIndex,
    setSelectedTabId,
    tabGroupId,
    unregisterTab,
  } = useContext(TabGroupContext);
  const [tabId, setTabId] = useImmer(NaN);

  useEffect(
    () => {
      setTabId(registerTab());
      return () => unregisterTab(tabId);
    },
    []
  );

  return (
    Number.isNaN(tabId)
      ? null
      : (
        <button
          // `aria-controls` must match the TabPanel's `id`
          aria-controls={`tabpanel-${tabGroupId}-${tabId}`}
          aria-selected={selectedTabIndex === tabId}
          className={joinClassNames(
            selectedTabIndex === tabId && 'tab-group__tab--selected',
            'tab-group__tab'
          )}
          // `id` must match the TabPanel's `aria-labelledby`
          id={`tab-${tabGroupId}-${tabId}`}
          onClick={handleEvent(() => setSelectedTabId(tabId))}
          role="tab"
          tabIndex="-1"
          type="button"
        >
          {children}
        </button>
      )
  );
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
