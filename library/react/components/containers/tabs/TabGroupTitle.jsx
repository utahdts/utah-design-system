import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  tagName: PropTypes.string,
};
const defaultProps = {
  tagName: 'div',
};

function TabGroupTitle({ children, tagName: TagName }) {
  const { tabGroupId } = useContext(TabGroupContext);
  return (
    <TagName id={`tab-group-${tabGroupId}`} className="tag-group__title">
      {children}
    </TagName>
  );
}

TabGroupTitle.propTypes = propTypes;
TabGroupTitle.defaultProps = defaultProps;

export default TabGroupTitle;
