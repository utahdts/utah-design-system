import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultProps = {};

function TabList({ children }) {
  const { tabGroupId } = useContext(TabGroupContext);

  return (
    <div className="tab-group__list" role="tablist" aria-labelledby={`tab-group-${tabGroupId}`}>
      {children}
    </div>
  );
}

TabList.propTypes = propTypes;
TabList.defaultProps = defaultProps;

export default TabList;
