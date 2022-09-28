import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
const defaultProps = {
  className: null,
};

function TabList({ children, className }) {
  const { tabGroupId } = useContext(TabGroupContext);

  return (
    <div
      className={joinClassNames(className, 'tab-group__list')}
      role="tablist"
      aria-labelledby={`tab-group-${tabGroupId}`}
    >
      {children}
    </div>
  );
}

TabList.propTypes = propTypes;
TabList.defaultProps = defaultProps;

export default TabList;
