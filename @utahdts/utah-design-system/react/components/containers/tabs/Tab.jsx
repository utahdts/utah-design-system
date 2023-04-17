import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import handleEvent from '../../../util/handleEvent';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  // a tab id must be provided for accessibility and selecting tab
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
const defaultProps = {};

function Tab({ children, id }) {
  const {
    selectedTabId,
    setSelectedTabId,
    tabGroupId,
  } = useContext(TabGroupContext);

  return (
    <div
      className={joinClassNames(
        (selectedTabId === id) && 'tab-group__tab--selected',
        'tab-group__tab'
      )}
    >
      <button
        // `aria-controls` must match the TabPanel's `id`
        aria-controls={`tabpanel-${tabGroupId}-${id}`}
        aria-selected={selectedTabId === id}
        className={joinClassNames(
          (selectedTabId === id) && 'tab-group__tab-button--selected',
          'tab-group__tab-button'
        )}
        // `id` must match the TabPanel's `aria-labelledby`
        id={`tab-${tabGroupId}-${id}`}
        onClick={handleEvent(() => setSelectedTabId(id))}
        role="tab"
        tabIndex="-1"
        type="button"
      >
        {children}
      </button>

    </div>
  );
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
